import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";

import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import SmallCatagorySection from "../components/SmallCatagorySection";
import Catagory from "../components/Catagory";

import webImage from "../public/assets/home/desktop/image-web-design-large.jpg";
import graphicsImage from "../public/assets/home/desktop/image-graphic-design.jpg";

import OtherMain from "../components/Other-Main";

import airfilterImage from "../public/assets/app-design/desktop/image-airfilter.jpg";
import eyecamImage from "../public/assets/app-design/desktop/image-eyecam.jpg";
import faceitImage from "../public/assets/app-design/desktop/image-faceit.jpg";
import todoImage from "../public/assets/app-design/desktop/image-todo.jpg";
import { MyTheme } from "../styles/theme/theme";

export default function Apps() {
  return (
    <Container>
      <OtherMain
        title={"APP DESIGN"}
        text={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />
      <CardContainer>
        <Card
          img={airfilterImage}
          title={"AIRFILTER"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={eyecamImage}
          title={"EYE CAM"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={faceitImage}
          title={"FACE IT"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={todoImage}
          title={"TO DOO"}
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
          image={graphicsImage.src}
          col={"2/3"}
          row={"1/2"}
          title={"GRAPHICS DESIGN"}
          link={"/graphics"}
        />
      </SmallCatagorySection>
    </Container>
  );
}
