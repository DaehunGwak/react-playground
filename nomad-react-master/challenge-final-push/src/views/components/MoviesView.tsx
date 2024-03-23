import {useEffect} from "react";
import {getTmdbMovies} from "../../apis/tmdbApis";
import {isTmdbMoviesApiType, TmdbMoviesApiType} from "../../apis/TmdbResponse";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import styled from "styled-components";
import SimpleMovieCardView from "./SimpleMovieCardView";

function MoviesView() {
  const {type = "popular"} = useParams();
  const navigate = useNavigate();
  const isTmdbMoviesType = isTmdbMoviesApiType(type);
  const {data, isSuccess} = useQuery({
    queryKey: ["tmdb-movies-api", type],
    queryFn: async () => getTmdbMovies(type as TmdbMoviesApiType),
    enabled: isTmdbMoviesType,
  });

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
          ? data?.results.map(movie =>
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
