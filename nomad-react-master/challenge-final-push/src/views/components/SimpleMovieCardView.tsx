import {TmdbSimpleMovie} from "../../apis/TmdbResponse";
import {createImageUrl} from "../../apis/tmdbUtils";
import {AnimatePresence, motion} from "framer-motion";
import styled from "styled-components";
import {useState} from "react";
import MovieDetailModalView from "./MovieDetailModalView";

function SimpleMovieCardView({movie}: SimpleMovieCardProps) {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  return (
    <>
      <CardWrapper
        initial={{opacity: 0}}
        animate={isHovered ? {scale: 1.15, opacity: 1} : {opacity: 1}}
        transition={{duration: 0.6}}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setClicked(true)}
      >
        <CardImg
          layoutId={`movie-${movie.id}`}
          src={createImageUrl(movie.poster_path)}
          animate={isHovered ? {filter: "grayscale(0)"} : undefined}
        />
        <CardTitle>
          {movie.title}
        </CardTitle>
      </CardWrapper>
      <AnimatePresence>
        {
          isClicked
            ? <MovieDetailModalView
                movie={movie}
                removeCallback={() => setClicked(false)}
            />
            : undefined
        }
      </AnimatePresence>
    </>
  );
}

export default SimpleMovieCardView;

interface SimpleMovieCardProps {
  movie: TmdbSimpleMovie;
}

const CardWrapper = styled(motion.div)`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  cursor: pointer;
`;

const CardImg = styled(motion.img)`
  width: 180px;
  height: 270px;
  object-fit: cover;
  border-radius: 12px;
  filter: grayscale(0.8);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2)
`;

const CardTitle = styled(motion.span)`
  font-size: 0.85rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.3;
`;
