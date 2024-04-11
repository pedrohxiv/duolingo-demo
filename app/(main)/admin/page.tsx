import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { checkIsAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = async () => {
  const isAdmin = await checkIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return <App />;
};

export default AdminPage;
