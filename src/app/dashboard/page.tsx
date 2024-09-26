import React from "react";
import { auth } from "../auth/auth";

const DashboardPage = async () => {
  const session = await auth();

  console.log(session);

  return <div>Bienvenido/a {session?.user.email} </div>;
};

export default DashboardPage;
