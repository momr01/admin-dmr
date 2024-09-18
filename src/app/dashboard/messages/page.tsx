import { fetchMessages } from "@/lib/data";
import styles from "../../ui/dashboard/messages/messages.module.css";
import React from "react";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import TableMessages from "@/app/ui/dashboard/messages/table/tableMessages";

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

 // console.log(messages)

  const plainMessages = messages.map(message => ({
    id: message.id,
    name: message.name,
    email: message.email,
    phone: message.phone,
    content: message.content,
   createdAt: message.createdAt
    // Agrega las propiedades necesarias y asegúrate de no pasar métodos
  }));

  //console.log(plainMessages)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* <Search placeholder="Search for a user..." /> */}
        {/* <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
          </Link> */}
      </div>
      <div className={styles.tableContainer}>
      <TableMessages messages={plainMessages} />
      </div>

      <Pagination count={count} />
    </div>
  );
};

export default MessagesPage;
