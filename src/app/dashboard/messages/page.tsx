import { fetchMessages } from "@/lib/data";
import styles from "../../ui/dashboard/messages/messages.module.css";
import React, { lazy, Suspense } from "react";
import { SearchParams } from "@/interfaces/searchParams";
const TableMessages = lazy(
  () => import("@/app/ui/dashboard/messages/table/tableMessages")
);

const MessagesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const q = searchParams?.q || "";
  const { count, messages } = await fetchMessages(q);

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

export default MessagesPage;
