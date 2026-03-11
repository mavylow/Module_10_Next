"use client";

import { useContext } from "react";
import "@components/Modal/style.css";
import CrossIcon from "@assets/CrossIcon";
import { PopUpContext } from "@providers/PopupProvider";
import Portal from "@components/Portal";
import Button from "@components/Button";
import type { IModal } from "@/interfaces";
import { useTranslation } from "react-i18next";

function Modal({ id, isOpen, message, status }: IModal) {
  const { handleCloseModal } = useContext(PopUpContext);
  const { t } = useTranslation();

  return (
    <Portal>
      <div
        data-testid="modal-message"
        className={`modal ${isOpen ? "modal--open" : "modal--close"} ${status}`}
      >
        <span> {t(message)}</span>
        <Button
          Icon={CrossIcon}
          type="button"
          onButtonClick={() => handleCloseModal(id)}
          description="close modal button"
        />
      </div>
    </Portal>
  );
}

export default Modal;
