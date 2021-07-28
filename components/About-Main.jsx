import styled from "styled-components";
import { MyTheme } from "../styles/theme/theme";
import Button from "./Button";
import Image from "next/image";

import bg from "../public/assets/shared/desktop/bg-pattern-call-to-action.svg";

const Container = styled.div`
  position: relative;
  z-index: 10;
  width: calc(100%);
  height: min-content;

  border-radius: 15px;
  text-align: center;

  background-color: ${MyTheme.colors.ui.primary};
  background-image: url(${bg.src});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${MyTheme.space.xxlarge};

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    margin: 0;
    border-radius: 0;
  }
`;

const TextArea = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  padding: ${MyTheme.space.xlarge};
  margin-left: ${MyTheme.space.medium};
  line-height: ${MyTheme.lineHeights.body};

  @media (max-width: 900px) {
    order: 2;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: ${MyTheme.fontSizes.h2};
  color: ${MyTheme.colors.ui.tertiary};
  line-height: ${MyTheme.lineHeights.smallTitle};
  margin-bottom: ${MyTheme.space.large};

  @media (max-width: 1000px) {
    margin-bottom: ${MyTheme.space.large};
  }

  @media (max-width: 500px) {
    font-size: ${MyTheme.fontSizes.h3};
  }
`;

const Text = styled.p`
  color: ${MyTheme.colors.ui.tertiary};
  font-size: ${MyTheme.fontSizes.body};
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 15px 15px 0 0;

  background-image: url("/assets/about/desktop/image-about-hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 0 15px 15px 0;

  @media (max-width: 900px) {
    border-radius: 15px 15px 0 0;
    background-image: url("/assets/about/mobile/image-about-hero.jpg");
    order: 1;
    height: 300px;
  }
`;

export default function AboutMain({ title, text }) {
  return (
    <Container>
      <TextArea>
        <Title>{title}</Title>
        <Text>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </Text>
      </TextArea>

      <ImageDiv></ImageDiv>
    </Container>
  );
}
