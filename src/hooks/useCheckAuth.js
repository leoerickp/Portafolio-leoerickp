import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useCheckAuth = () => {
  const { isLogged, userData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate("/admin/login");
    }
  }, [isLogged]);
  return { isLogged, userData };
};
