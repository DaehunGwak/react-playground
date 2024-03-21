import {TmdbSimpleMovie} from "../../../apis/TmdbResponse";
import {createImageUrl} from "../../../apis/tmdbUtils";
import {motion} from "framer-motion";
import styled from "styled-components";
import {useState} from "react";

function SimpleMovieCardView({
  movie: {id, title, poster_path}
}: SimpleMovieCardProps) {
  const [isHovered, setHovered] = useState(false);

  return (
    <CardWrapper
      layoutId={`movie-${id}`}
      animate={isHovered ? {scale: 1.1} : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardImg
        src={createImageUrl(poster_path)}
        animate={isHovered ? {filter: "grayscale(0)"} : undefined}
      />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
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
`;

const CardTitle = styled(motion.span)`
  font-size: 0.85rem;
  font-weight: 400;
  text-align: center;
`;
