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
  height: 75vh;
  max-height: 600px;
  border-radius: 15px;

  display: grid;
  grid-template-columns: 2;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: ${MyTheme.space.large};
  overflow: hidden;

  margin-bottom: ${MyTheme.space.xxlarge};

  @media (max-width: 1000px) {
    grid-template-columns: 1;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: ${MyTheme.space.medium};
  }

  @media (max-width: 500px) {
    height: 600px;
    min-height: 600px;
    padding: 0 5%;
  }
`;

// THE IMAGE URL IS USING .SRC
export default function CatagorySection() {
  return (
    <Container>
      <Catagory
        image={webImage.src}
        col={"1/2"}
        row={"1/3"}
        title={"WEB DESIGN"}
        link={"/web"}
      />
      <Catagory
        image={appImage.src}
        col={"2/3"}
        row={"1/2"}
        title={"APP DESIGN"}
        link={"/app"}
      />
      <Catagory
        image={graphicImage.src}
        col={"2/3"}
        row={"2/3"}
        title={"GRAPHIC DESIGN"}
        link={"/graphics"}
      />
    </Container>
  );
}
