import styled from "styled-components";
import {motion} from "framer-motion";
import {createImageUrl} from "../../apis/tmdbApis";
import {toDollarFormatNoFraction, toSpecificFractionNumberString} from "../../utils/stringUtils";
import usePreventScrollBodyViewModel from "../../view-models/doms/usePreventScrollBodyViewModel";
import {useTmdbMovieDetailApiViewModel} from "../../view-models/tmdb/useTmdbApiViewModels";

const OVERVIEW_MAX_LENGTH = 128;

function MovieDetailModalView({
  movie: {id, title, overview},
  removeCallback
}: MovieDetailModalViewProps) {
  const {response, isSuccess} = useTmdbMovieDetailApiViewModel(id);
  usePreventScrollBodyViewModel();

  return (
    <ModalBackground
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <ModalCard layoutId={`movie-${id}`}>
        {isSuccess
          ? <ModalImg src={createImageUrl(response!!.backdrop_path, "original")}/>
          : undefined}
        <ModalCancelButton onClick={removeCallback}>X</ModalCancelButton>
        <ModalContents>
          <ContentEmpty/>
          <Title>{title}</Title>
          <SmallText>
            {isSuccess
              ? response?.release_date.toString()
              : <GrayBox/>
            }⎟
            {isSuccess
              ? `${response!!.runtime} 분⎟★ ${toSpecificFractionNumberString(response!!.vote_average, 1)}`
              : <GrayBox/>}
          </SmallText>
          <SmallText>
            {
              isSuccess
                ? response!!.genres.map(genre => genre.name).join(", ")
                : <GrayBox/>
            }
          </SmallText>
          <Overview>
            {overview.length > OVERVIEW_MAX_LENGTH
              ? `${overview.slice(0, OVERVIEW_MAX_LENGTH)}...`
              : overview}
          </Overview>
          <SmallText>제작비 :
            {
              isSuccess
                ? ` ${toDollarFormatNoFraction(response!!.budget)}`
                : <GrayBox/>
            }
          </SmallText>
          <SmallText>수익 :
            {
              isSuccess
                ? ` ${toDollarFormatNoFraction(response!!.revenue)}`
                : <GrayBox/>
            }
          </SmallText>

        </ModalContents>
      </ModalCard>
    </ModalBackground>
  );
}

export default MovieDetailModalView;

interface MovieDetailModalViewProps {
  movie: {
    id: number;
    title: string;
    overview: string;
  };
  removeCallback: () => void;
}

const ModalBackground = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalCard = styled(motion.div)`
  border-radius: 16px;
  overflow: clip;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 370px;
  max-height: 600px;
  height: 70vh;
  background-color: black;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ModalImg = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 370px;
  max-height: 600px;
  height: 70vh;
  object-fit: cover;
  filter: brightness(50%);
`

const ModalCancelButton = styled.div`
  position: absolute;
  z-index: 3;
  top: 12px;
  right: 12px;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalContents = styled.div`
  z-index: 2;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
`;

const ContentEmpty = styled.div`
  height: 300px;
  width: 200px;
`;

const Title = styled(motion.span)`
  font-size: 2rem;
  font-weight: 800;
`;

const Overview = styled(motion.span)`
  line-height: 1.3;
`;

const SmallText = styled(motion.span)`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
  display: flex;
  flex-direction: row;
`;

const GrayBox = styled(motion.div)`
  height: 0.85rem;
  width: 90px;
  border-radius: 0.2rem;
  background-color: rgba(255, 255, 255, 0.4);
`;
