import Feelings from "../components/Feelings";
import styled from "styled-components";
import Image from "next/image";
import { MyTheme } from "../styles/theme/theme";

import canadaImage from "../public/assets/shared/desktop/illustration-canada.svg";
import ukImage from "../public/assets/shared/desktop/illustration-united-kingdom.svg";
import ausImage from "../public/assets/shared/desktop/illustration-australia.svg";

import LocationCard from "./LocationCard";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: ${MyTheme.space.large};

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 5%;
  }
`;

export default function LocationCardContainer() {
  return (
    <Container>
      <LocationCard image={canadaImage.src} title={"CANADA"} rot={"30deg"} />
      <LocationCard image={ukImage.src} title={"UK"} rot={"88deg"} />
      <LocationCard image={ausImage.src} title={"AUSTRALIA"} rot={"200deg"} />
    </Container>
  );
}
