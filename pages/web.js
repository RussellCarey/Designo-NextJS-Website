import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { MyTheme } from "../styles/theme/theme";

import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import SmallCatagorySection from "../components/SmallCatagorySection";
import Catagory from "../components/Catagory";

import webImage from "../public/assets/home/desktop/image-web-design-large.jpg";
import appImage from "../public/assets/home/desktop/image-app-design.jpg";

import OtherMain from "../components/Other-Main";

import expressImage from "../public/assets/web-design/desktop/image-express.jpg";
import transferImage from "../public/assets/web-design/desktop/image-transfer.jpg";
import photonImage from "../public/assets/web-design/desktop/image-photon.jpg";
import builderImage from "../public/assets/web-design/desktop/image-builder.jpg";
import blogrImage from "../public/assets/web-design/desktop/image-blogr.jpg";
import campImage from "../public/assets/web-design/desktop/image-camp.jpg";

export default function Web() {
  return (
    <Container>
      <OtherMain
        title={"WEB DESIGN"}
        text={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <CardContainer>
        <Card
          img={expressImage}
          title={"EXPRESS"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={transferImage}
          title={"TRANSFER"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={photonImage}
          title={"PHOTON"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={builderImage}
          title={"BUILDER"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={blogrImage}
          title={"BLOGR"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
        <Card
          img={campImage}
          title={"CAMP"}
          text={"A multi-carrier shipping website for ecommerce businesses."}
        />
      </CardContainer>
      <SmallCatagorySection>
        <Catagory
          image={webImage.src}
          col={"1/2"}
          row={"1/2"}
          title={"GRAPHIC DESIGN"}
          link={"/graphics"}
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
