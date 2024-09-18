import { fetchMessages } from "@/lib/data";
import styles from "../../ui/dashboard/messages/messages.module.css";
import React from "react";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

interface SearchParams {
  q?: string;
  page?: number;
}

const MessagesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, messages } = await fetchMessages(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* <Search placeholder="Search for a user..." /> */}
        {/* <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
          </Link> */}
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Email</td>
              <td>Teléfono</td>
              <td>Mensaje</td>
              <td>Fecha de creación</td>
              <td>Action</td>
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
                    <button className={`${styles.button} ${styles.view}`}>
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
      </div>

      <Pagination count={count} />
    </div>
  );
};

export default MessagesPage;
