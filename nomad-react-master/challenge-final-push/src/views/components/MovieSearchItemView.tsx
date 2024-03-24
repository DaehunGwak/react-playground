import {TmdbSearchedMovie} from "../../models/responses/TmdbSearchResponse";
import styled from "styled-components";
import {useState} from "react";
import MovieDetailModalView from "./MovieDetailModalView";

const OVERVIEW_MAX_LENGTH = 64;

function MovieSearchItemView({
  movie: {movieId, title, originTitle, overview}
}: MovieSearchItemViewProps) {
  const [isClicked, setClicked] = useState(false);

  return (
    <>
      <ItemWrapper
        onClick={() => setClicked(true)}
      >
        <ItemTitle>{title}</ItemTitle>
        {(title !== originTitle && originTitle.length > 0)
          ? <ItemOriginTitle>{originTitle}</ItemOriginTitle>
          : undefined}
        {(overview.length > 0)
          ? <ItemOverview>
              {overview.length > OVERVIEW_MAX_LENGTH
                ? `${overview.slice(0, OVERVIEW_MAX_LENGTH)}...`
                : overview}
            </ItemOverview>
          : undefined}
      </ItemWrapper>
      {isClicked
        ? <MovieDetailModalView
            movie={{id: movieId, title, overview}}
            removeCallback={() => setClicked(false)}
          />
        : undefined}
    </>
  );
}

export default MovieSearchItemView;

interface MovieSearchItemViewProps {
  movie: TmdbSearchedMovie
}

const ItemWrapper = styled.div`
  min-width: 300px;
  max-width: 500px;
  width: 30vw;
  background-color: antiquewhite;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.1);
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

const ItemTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const ItemOriginTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: grey;
`;

const ItemOverview = styled.span`
  font-size: 0.8rem;
  line-height: 1.1;
`;
