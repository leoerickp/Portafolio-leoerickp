import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { portfolioApi } from "../api/portfolioApi";
import { NavColorContext } from "../context/NavColorContext";
import { removeAuth, registerAuth } from "../admin/slices/AuthSlice/AuthSlice";
import { useForm } from "react-hook-form";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ModalWindow } from "../components/ModalWindow";
import { LoginButton } from "../components/LoginButton";

const schema = yup.object({
  email: yup.string().email('The field is an invalid email format').required('The email field is required'),
  password: yup.string().min(6, 'Min length must be more than 6 characters').required('The password field is required'),
}).required();

const initialFormState = {

  email: '',
  password: '',
};


export const Login = ({ pathname }) => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Network error');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {

    dispatch(removeAuth());

  }, []);

  const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);

  const modalMessage = useRef();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setNavbarBackgroundColor(navbarBackgroundColorInit)
  }, [pathname]);

  const authLogin = async (data) => {
    const { email, password } = data;

    setIsConnecting(true);
    try {
      /*dispatch(login({
        email: 'leoerickp@gmail.com',
        password: '123456'
      }));*/

      const resp = await portfolioApi
        .post(`/auth/login`, {
          email,
          password
        });

      dispatch(registerAuth(resp.data));
      navigate('/admin/');

    } catch (error) {

      setErrorMessage(`${error.message}. ${error.code === 'ERR_NETWORK'
        ? 'It cannot login in this moment. Please try later or contact to the system manager.' : 'User does not exist or the password is wrong.'} `);

      const modal = new bootstrap.Modal(modalMessage.current);
      modal.show();

      dispatch(removeAuth());
    }
    setIsConnecting(false);

  }

  return (
    <section className="section-esp vh-100">
      <h1>Login</h1>
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <div className="card shadow">

              <div className="card-body">

                <form onSubmit={handleSubmit(authLogin)}>
                  <div className="row mb-3 px-3">
                    <div className="form-floating p-0">
                      <input type="text" className={`form-control ${errors.email && 'is-invalid'}`} placeholder="Email"
                        {...register("email")}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>
                      <label htmlFor="email">Email address</label>
                    </div>

                  </div>
                  <div className="row mb-3 px-3">
                    <div className="form-floating p-0">
                      <input type="password" className={`form-control ${errors.password && 'is-invalid'}`} placeholder="Password"
                        {...register("password")}
                        aria-invalid={errors.password ? "true" : "false"}
                      />
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                      <label htmlFor="password" >Password</label>
                    </div>


                  </div>
                  <div className="row mb- px-3">
                    <LoginButton isConnecting={isConnecting} />
                  </div>
                </form>

              </div>
            </div>
          </AnimationOnScroll>
        </div>

      </div>
      <ModalWindow modalMessage={modalMessage} modalTitle={"Error message"} message={errorMessage} />

    </section>
  )
};
