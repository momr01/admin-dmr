"use client";

import React, { useState } from "react";
import styles from "../messages.module.css";
import { Button, Modal } from "flowbite-react";
import ModalMessage from "../modal/modalMessage";

interface PlainMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  content: string;
  createdAt: Date;
}

const TableMessages = ({ messages }: { messages: PlainMessage[] }) => {
  const [openModal, setOpenModal] = useState(false);

  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [dynamicProps, setDynamicProps] = useState(
 {
    message: {
        id: "",
        name: "",
        email: "",
        phone: "",
        content: "",
        createdAt: new Date(),
    }
    
 }
); // Estado para props dinámicas

  const handleClick = (msg: PlainMessage) => {
    // Aquí puedes cambiar las props dinámicamente
    setDynamicProps({
     message: msg,
      //    id: Math.floor(Math.random() * 100), // Genera un ID aleatorio
    });

    // Muestra el componente
   // setIsComponentVisible(true);
   setOpenModal(true)
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className="w-52">Nombre</td>
            <td className="w-52">Email</td>
            <td className="w-52">Teléfono</td>
            <td className="w-52">Mensaje</td>
            <td className="w-52">Fecha de creación</td>
            <td className="w-52">Action</td>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id}>
              <td>
                <div className={styles.user}>
                  {/* <Image
                src={user.img || "/noavatar.png"}
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              /> */}
                  {msg.name}
                </div>
              </td>
              <td>{msg.email}</td>
              <td>{msg.phone}</td>
              <td>{msg.content}</td>
              <td>{msg.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  {/* <Link href={`/dashboard/users/${user.id}`}> */}
                  <button
                    className={`${styles.button} ${styles.view}`}
                    onClick={() => handleClick(msg)}
                  >
                    View
                  </button>
                  {/* </Link> */}
                  <form
                    // action={deleteUser}
                    action={""}
                  >
                    <input type="hidden" name="id" value={msg.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {isComponentVisible && (
        <ModalMessage
          openModal={openModal}
          setOpenModal={setOpenModal}
          message={dynamicProps.message}
        />
      )} */}

{openModal && (
        <ModalMessage
          openModal={openModal}
          setOpenModal={setOpenModal}
          message={dynamicProps.message}
        />
      )}
    </>
  );
};

export default TableMessages;
