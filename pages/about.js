import Container from "../components/Container";

import AboutMain from "../components/About-Main";
import SplitInfo from "../components/SplitInfo";
import LocationCard from "../components/LocationCard";
import LocationCardContainer from "../components/LocationCardContainer";

export default function Apps() {
  return (
    <Container>
      <AboutMain title={"ABOUT US"} />
      <SplitInfo
        title={"The real deal"}
        text={
          "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        }
        isLeft={true}
      />

      <LocationCardContainer></LocationCardContainer>

      <SplitInfo
        title={"The real deal"}
        text={
          "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        }
        isLeft={false}
        isBottom={true}
      />
    </Container>
  );
}
