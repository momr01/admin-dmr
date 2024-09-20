"use client"

import { Button, Modal } from "flowbite-react";
import React from "react";

interface PlainMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  content: string;
  createdAt: Date;
}

interface ModalMessageProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: PlainMessage;
}

const ModalMessage = ({
  openModal,
  setOpenModal,
  message,
}: ModalMessageProps) => {
  return (
    <Modal
      show={openModal}
      position={"center"}
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header>Mensaje de {message.name}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6 p-6">
          {/* <h2>{message.email}</h2> */}
          <p>Correo electrónico: {message.email}</p>
          <p>Teléfono: {message.phone}</p>
          <p>Fecha: {message.createdAt.toLocaleString()}</p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
           Mensaje: {message.content}
          </p>
          {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p> */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>Listo</Button>
        {/* <Button color="gray" onClick={() => setOpenModal(false)}>
          Decline
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMessage;
