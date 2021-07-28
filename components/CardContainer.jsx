import styled from "styled-components";
import Image from "next/image";
import { MyTheme } from "../styles/theme/theme";

import Card from "./Card";

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-gap: ${MyTheme.space.large};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 1fr;

  margin-bottom: ${MyTheme.space.xxlarge};

  @media (max-width: 500px) {
    padding: 0 5%;
  }
`;

export default function CardContainer({ children }) {
  return <Container>{children}</Container>;
}
