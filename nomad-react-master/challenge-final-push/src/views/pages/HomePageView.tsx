import {Outlet, useLocation} from "react-router-dom";
import MovieHeaderView from "../components/MovieHeaderView";
import CategorySelectorView from "../components/CategorySelectorView";

function HomePageView() {
  const {pathname} = useLocation();

  return (
    <>
      <MovieHeaderView/>
      {pathname === "/search" ? undefined : <CategorySelectorView/>}
      <Outlet/>
    </>
  );
}

export default HomePageView;
