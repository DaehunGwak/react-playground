import {useState} from "react";
import styled from "styled-components";
import {useTmdbSearchApiViewModel} from "../../view-models/tmdb/useTmdbApiViewModels";
import MovieSearchItemView from "./MovieSearchItemView";

function MovieSearchView() {
  const [searchTarget, setSearchTarget] = useState("");
  const {response: movies, isFetching} = useTmdbSearchApiViewModel(searchTarget);

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        value={searchTarget}
        onChange={event => setSearchTarget(event.currentTarget.value)}
      />
      {
        isFetching
          ? <span>Loading...</span>
          : movies?.map(movie => <MovieSearchItemView movie={movie}/>)
      }
    </SearchWrapper>
  )
}

export default MovieSearchView;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const SearchInput = styled.input`
  border-radius: 0.4rem;
  padding: 1.4rem 1rem 1.2rem;
  min-width: 300px;
  max-width: 500px;
  width: 30vw;
  height: 1.6rem;
  font-size: 1.2rem;
  background-color: antiquewhite;
  border-color: rgb(161, 122, 96);
  border-style: solid;
  border-width: 1px;
`;
