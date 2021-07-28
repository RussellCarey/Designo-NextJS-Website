import Feelings from "../components/Feelings";
import styled from "styled-components";
import Image from "next/image";
import { MyTheme } from "../styles/theme/theme";

import passionate from "../public/assets/home/desktop/illustration-passionate.svg";
import friendly from "../public/assets/home/desktop/illustration-friendly.svg";
import resourceful from "../public/assets/home/desktop/illustration-resourceful.svg";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: ${MyTheme.space.large};

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 5%;
  }
`;

export default function FeelingsSection() {
  return (
    <Container>
      <Feelings
        image={passionate.src}
        title={"PASSIONATE"}
        text={
          "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        }
        rot={"30deg"}
      />
      <Feelings
        image={friendly.src}
        title={"FRIENDLY"}
        text={
          " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        }
        rot={"88deg"}
      />
      <Feelings
        image={resourceful.src}
        title={"RESOURCEFUL"}
        text={
          "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        }
        rot={"124deg"}
      />
    </Container>
  );
}
