import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const Messages = dynamic(() => import("@/app/ui/dashboard/messages/messages"), {
  suspense: true,
});

const MessagesPage = () => {
  return (
    <Suspense fallback={<div>Cargandi pues</div>}>
      <Messages />
    </Suspense>
  );
};

export default MessagesPage;
