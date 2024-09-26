import { fetchMessages } from "@/lib/data";
import React, { Suspense } from "react";
import styles from "./messages.module.css";
import dynamic from "next/dynamic";
const TableMessages = dynamic(
  () => import("@/app/ui/dashboard/messages/table/tableMessages"),
  {
    suspense: true,
  }
);

const Messages = async () => {
  const { count, messages } = await fetchMessages();

  const plainMessages = messages.map((message) => ({
    id: message.id,
    name: message.name,
    email: message.email,
    phone: message.phone,
    content: message.content,
    createdAt: message.createdAt,
  }));

  return (
    <div>
      <div className={styles.top}></div>
      <Suspense fallback={<div>Loading...</div>}>
        <TableMessages messages={plainMessages} count={count} />
      </Suspense>
    </div>
  );
};

export default Messages;
