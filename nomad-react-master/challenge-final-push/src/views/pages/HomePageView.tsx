import {Outlet} from "react-router-dom";

function HomePageView() {
  return (
    <>
      <div>title</div>
      <div>search</div>
      <div>menu</div>
      <Outlet/>
    </>
  );
}

export default HomePageView;
