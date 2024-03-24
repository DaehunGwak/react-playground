import styled from "styled-components";
import {TMDB_MOVIES_API_TYPES} from "../../models/responses/TmdbResponse";
import {Link, useParams} from "react-router-dom";
import {motion} from "framer-motion";

function CategorySelectorView() {
  const {type = "popular"} = useParams();

  return (
    <Wrapper>
      {TMDB_MOVIES_API_TYPES.map((nowType: string) =>
        <Category key={`category-${nowType}`}>
          <CategoryLink to={`/${nowType}`}>
            {nowType.split("-").join(" ")}
          </CategoryLink>
          {
            type === nowType
              ? <CategoryPointer layoutId="category-pointer"/>
              : <CategoryEmptyPointer/>
          }
        </Category>
      )}
    </Wrapper>
  );
}

export default CategorySelectorView;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 24px;
`;

const Category = styled.div`
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryLink = styled(Link)`
  color: rgb(0, 24, 0);
  text-decoration-line: none;
  padding: 12px;
  font-size: 24px;
  font-weight: 300;
`;

const CategoryPointer = styled(motion.div)`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: darkolivegreen;
`;

const CategoryEmptyPointer = styled.div`
  width: 6px;
  height: 6px;
`;
