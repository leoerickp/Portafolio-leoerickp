import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FormContext } from "../context/form/FormContext";
import { CardTable } from "./CardTable";
import { Spinner } from "./Spinner";

export const ListFrame = ({ children, pathname, options: { sTitle, sParentTitle, modelState, getData, setOffset, setLimit, DataForm, backButton = false } }) => {
    const { id } = useParams();
    const mainTitle = sTitle + 's';
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLogged, userData } = useSelector((state) => state.auth);

    const { showForm, visibleForm, closeForm } = useContext(FormContext);



    const { isLoading, error, count, limit, offset } = useSelector(
        (state) => state[modelState]
    );

    const reloadData = (limit = 0, offset = 0) => {
        if (isLogged) {
            if (id) {
                dispatch(getData(userData.token, id, limit, offset));
            } else {
                dispatch(getData(userData.token, limit, offset));
            }
        }
    }

    const goBack = () => {
        navigate(-1);
    }

    const newData = () => {
        showForm("New " + sTitle);
    };


    const updateOffset = (offsetParam) => {
        dispatch(setOffset(offsetParam));
    };

    const updateLimit = (limitParam) => {
        dispatch(setLimit(limitParam));
    };


    useEffect(() => {
        reloadData(limit, offset);
    }, [limit, offset]);


    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        closeForm();
    }, []);
    return (
        <>
            <div className='d-flex justify-content-between'>
                {sParentTitle ? <div className='d-flex'><h3>{`${sParentTitle}/`}</h3><h1>{mainTitle}</h1></div> : <h1>{mainTitle}</h1>}
                {
                    backButton && (
                        <button type='button' className='btn btn-outline-primary' onClick={() => goBack()}>
                            <FontAwesomeIcon icon="fa-regular fa-circle-left" />
                        </button>
                    )
                }

            </div>
            <hr />

            {isLoading && <Spinner />}
            {
                error !== null
                    ? <div className="alert alert-danger" listFrame="alert">{`Data "${mainTitle}" could not be loaded successfully. Try to `}<NavLink to="/login" className="alert-link">Login</NavLink> again . Give it a click if you like.</div>
                    : <>
                        {
                            visibleForm
                                ? <DataForm />
                                : (<CardTable
                                    labeledCardData={{ title: "List of " + mainTitle, limit, offset, onAddEvent: newData, onReload: reloadData }}
                                    searchBarData={{ limit, onLimitChange: updateLimit }}
                                    paginationData={{ count, limit, offset, onPageChange: updateOffset }}
                                >
                                    {children}
                                </CardTable>)
                        }

                    </>
            }
        </>
    )
}
