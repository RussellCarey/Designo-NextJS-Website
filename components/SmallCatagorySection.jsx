import Link from "next/link";
import styled from "styled-components";

import Catagory from "./Catagory";

import webImage from "../public/assets/home/desktop/image-web-design-large.jpg";
import appImage from "../public/assets/home/desktop/image-app-design.jpg";
import graphicImage from "../public/assets/home/desktop/image-graphic-design.jpg";
import { MyTheme } from "../styles/theme/theme";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: min-content;
  min-height: 300px;
  border-radius: 15px;

  /* display: grid;
  grid-template-columns: 2;
  grid-template-rows: 1;
  grid-gap: ${MyTheme.space.large};
  overflow: hidden; */

  display: flex;

  margin-bottom: ${MyTheme.space.xxlarge};

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    height: 600px;
    min-height: 600px;
    padding: 0 5%;
  }
`;

// THE IMAGE URL IS USING .SRC
export default function SmallCatagorySection({ children }) {
  return <Container>{children}</Container>;
}
