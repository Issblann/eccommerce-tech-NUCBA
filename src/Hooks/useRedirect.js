import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRedirect = (redirectTo) => {
  const { currentUser } = useSelector((state) => state.User);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate(redirectTo);
    }
  }, [currentUser, redirectTo, navigate]);
};

export default useRedirect;
