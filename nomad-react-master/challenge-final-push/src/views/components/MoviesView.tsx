import {useEffect} from "react";
import {isTmdbMoviesApiType} from "../../models/responses/TmdbResponse";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import SimpleMovieCardView from "./SimpleMovieCardView";
import {useTmdbMoviesApiViewModel} from "../../view-models/tmdb/useTmdbApiViewModels";

const DEFAULT_PAGE_NUMBER = 1;

function MoviesView() {
  const {type = "popular"} = useParams();
  const navigate = useNavigate();
  const isTmdbMoviesType = isTmdbMoviesApiType(type);
  const {response, isSuccess} =
    useTmdbMoviesApiViewModel(type, DEFAULT_PAGE_NUMBER, isTmdbMoviesType);

  useEffect(() => {
    if (!isTmdbMoviesType) {
      navigate("/notfound");
      return;
    }
  });

  return (
    <Wrapper>
      {
        isSuccess
          ? response?.results.map(movie =>
              <SimpleMovieCardView
                key={`simple-movie-${movie.id}`}
                movie={movie}
              />
            )
          : null
      }
    </Wrapper>
  );
}

export default MoviesView;

const Wrapper = styled.div`
  width: 100vw;
  padding: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`;
