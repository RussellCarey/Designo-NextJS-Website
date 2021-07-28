import Link from "next/link";
import styled from "styled-components";
import { MyTheme } from "../styles/theme/theme";

import bg from "../public/assets/shared/desktop/bg-pattern-call-to-action.svg";

const Container = styled.div`
  position: relative;
  z-index: 10;
  width: calc(100%);
  height: min-content;
  min-height: 600px;

  border-radius: 15px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${(props) => (props.isBottom ? 0 : MyTheme.space.xxlarge)};

  display: flex;
  justify-content: space-between;
  background-color: ${MyTheme.colors.bg.lightPrimary};

  @media (max-width: 1000px) {
    border-radius: 15px;
    padding: 0;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding: 0;
    flex-direction: column;
  }

  &:before {
    z-index: 5;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-image: url(${bg.src});
    background-size: cover;
    background-position: ${(props) => (props.isLeft ? "left" : "right")};
    background-repeat: no-repeat;
  }
`;

const TextArea = styled.div`
  z-index: 10;
  text-align: left;
  padding: ${MyTheme.space.xlarge};
  order: ${(props) => (props.isLeft ? 2 : 1)};
  width: 60%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: ${MyTheme.space.xlarge};
    order: 2;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const ImageDiv = styled.div`
  z-index: 10;
  order: ${(props) => (props.isLeft ? 1 : 2)};
  width: 40%;
  height: 600px;
  border-radius: ${(props) =>
    !props.isLeft ? `0 15px 15px 0` : `15px 0 0 15px`};

  background-image: url("assets/about/desktop/image-real-deal.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1000px) {
    border-radius: 15px 15px 0 0;
    height: 400px;
    width: 100%;
    order: 1;
  }
`;

const Title = styled.div`
  font-size: ${MyTheme.fontSizes.h2};
  color: ${MyTheme.colors.ui.primary};
  line-height: ${MyTheme.lineHeights.smallTitle};
  margin-bottom: ${MyTheme.space.large};

  @media (max-width: 1000px) {
    margin-bottom: ${MyTheme.space.large};
  }

  @media (max-width: 1000px) {
    font-size: ${MyTheme.fontSizes.h3};
  }
`;

const Text = styled.p`
  color: ${MyTheme.colors.text.primary};
  font-size: ${MyTheme.fontSizes.body};
`;

export default function SplitInfo({ isLeft, title, text, isBottom }) {
  return (
    <Container isBottom={isBottom}>
      <ImageDiv isLeft={isLeft} />
      <TextArea isLeft={isLeft}>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextArea>
    </Container>
  );
}
