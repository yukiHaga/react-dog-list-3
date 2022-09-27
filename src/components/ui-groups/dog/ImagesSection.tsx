import {
  ImagesSection as StyledImagesSection,
  NoHitMessage,
  GridContainer,
  GridItem,
  DogImg,
} from "../../../components/ui-groups/dog/styledDog";
import { RESPONSE_STATE } from "../../../constants/index";
import { DogState } from "../../../reducers/dogReducer";

const ImagesSection = ({ dogState }: { dogState: DogState }) => {
  return (
    <StyledImagesSection>
      {dogState.responseState === RESPONSE_STATE.FAILURE && (
        <NoHitMessage>画像が見つかりませんでした</NoHitMessage>
      )}
      <GridContainer>
        {dogState.responseState === RESPONSE_STATE.OK &&
          dogState.images?.map((dogImageUrl, i) => {
            return (
              <GridItem key={i}>
                <DogImg src={dogImageUrl} />
              </GridItem>
            );
          })}
      </GridContainer>
    </StyledImagesSection>
  );
};

export default ImagesSection;
