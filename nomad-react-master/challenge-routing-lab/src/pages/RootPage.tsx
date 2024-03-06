import Header from "../components/Header";
import {Outlet} from "react-router-dom";

function RootPage() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default RootPage;
