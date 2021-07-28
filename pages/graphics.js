import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";

import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import SmallCatagorySection from "../components/SmallCatagorySection";
import Catagory from "../components/Catagory";

import appImage from "../public/assets/home/desktop/image-app-design.jpg";
import webImage from "../public/assets/home/desktop/image-web-design-small.jpg";

import OtherMain from "../components/Other-Main";

import brownImage from "../public/assets/graphic-design/desktop/image-change.jpg";
import boxedImage from "../public/assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImage from "../public/assets/graphic-design/desktop/image-science.jpg";
import { MyTheme } from "../styles/theme/theme";

export default function Grahpics() {
  return (
    <Container>
      <OtherMain
        title={"GRAPHIC DESIGN"}
        text={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
        }
      />
      <CardContainer>
        <Card
          img={brownImage}
          title={"TIM BROWN"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={boxedImage}
          title={"BOXED"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={scienceImage}
          title={"KEEPING"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
      </CardContainer>
      <SmallCatagorySection>
        <Catagory
          image={webImage.src}
          col={"1/2"}
          row={"1/2"}
          title={"WEB DESIGN"}
          link={"/web"}
          marginRight={MyTheme.space.large}
        />
        <Catagory
          image={appImage.src}
          col={"2/3"}
          row={"1/2"}
          title={"APP DESIGN"}
          link={"/app"}
        />
      </SmallCatagorySection>
    </Container>
  );
}
