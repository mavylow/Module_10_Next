"use client";

import Modal from "@components/Modal";
import type { RootState } from "@/store";
import { createContext, useEffect, useRef, type ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeModal, setIsOpen } from "@/slices/modalSlice";

interface IPopUpContext {
  handleCloseModal: (id: number) => void;
}

export const PopUpContext = createContext<IPopUpContext>({
  handleCloseModal: () => {},
});

interface IPopUpProvider {
  children: ReactNode;
}

function PopUpProvider({ children }: IPopUpProvider) {
  const modals = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const timeoutsRef = useRef<Map<number, NodeJS.Timeout>>(new Map());

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current.clear();
    };
  }, []);

  useEffect(() => {
    if (modals.length) {
      modals.forEach((modal) => {
        if (!timeoutsRef.current.has(modal.id)) {
          const timeout = setTimeout(() => {
            dispatch(setIsOpen({ id: modal.id, isOpen: false }));
            timeoutsRef.current.delete(modal.id);
          }, 3000);

          timeoutsRef.current.set(modal.id, timeout);
        }
      });
    }
  }, [modals, dispatch]);

  useEffect(() => {
    const closedModals = modals.filter((modal) => !modal.isOpen);

    closedModals.forEach((modal) => {
      setTimeout(() => {
        dispatch(removeModal(modal.id));
        if (timeoutsRef.current.has(modal.id)) {
          clearTimeout(timeoutsRef.current.get(modal.id));
          timeoutsRef.current.delete(modal.id);
        }
      }, 300);
    });
  }, [modals, dispatch]);

  const handleCloseModal = (id: number) => {
    dispatch(setIsOpen({ id, isOpen: false }));

    if (timeoutsRef.current.has(id)) {
      clearTimeout(timeoutsRef.current.get(id));
      timeoutsRef.current.delete(id);
    }
  };

  return (
    <PopUpContext.Provider value={{ handleCloseModal }}>
      {children}
      {modals.map((modal) => (
        <Modal key={modal.id} {...modal} />
      ))}
    </PopUpContext.Provider>
  );
}

export default PopUpProvider;
