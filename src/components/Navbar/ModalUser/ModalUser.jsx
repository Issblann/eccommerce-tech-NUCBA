import React from "react";
import {
  ModalContainerStyled,
  LinkStyled,
  UsernameStyled,
  HrStyled,
} from "./ModalUserStyles";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  toggleMenuHidden,
} from "../../../redux/user/userSlice";
const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
        >
          <UsernameStyled>{currentUser?.nombre}</UsernameStyled>

          <HrStyled />

          <LinkStyled to="/my orders">My orders</LinkStyled>
          <span
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(toggleMenuHidden());
            }}
          >
            Log out
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
