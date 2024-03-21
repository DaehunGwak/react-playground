import {Outlet} from "react-router-dom";
import MovieHeaderView from "../components/MovieHeaderView";
import CategorySelectorView from "../components/CategorySelectorView";

function HomePageView() {
  return (
    <>
      <MovieHeaderView/>
      <CategorySelectorView/>
      <Outlet/>
    </>
  );
}

export default HomePageView;
