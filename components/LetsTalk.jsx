import styled from "styled-components";
import { MyTheme } from "../styles/theme/theme";
import Button from "./Button";

import bg from "../public/assets/shared/desktop/bg-pattern-call-to-action.svg";

const Container = styled.div`
  position: relative;
  z-index: 10;
  width: calc(100%);
  height: min-content;
  padding: ${MyTheme.space.xlarge} ${MyTheme.space.xxlarge};

  border-radius: 15px;

  background-color: ${MyTheme.colors.ui.primary};
  background-image: url(${bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transform: translateY(${MyTheme.space.xxlarge});

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    padding: ${MyTheme.space.xlarge} ${MyTheme.space.xlarge};
  }

  @media (max-width: 500px) {
    padding: ${MyTheme.space.large} ${MyTheme.space.large};
    width: calc(100% - 10%);
    margin: 0 5%;
  }
`;

const TextArea = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: ${MyTheme.space.large};
  }
`;

const Title = styled.div`
  font-size: ${MyTheme.fontSizes.h2};
  color: ${MyTheme.colors.ui.tertiary};
  line-height: ${MyTheme.lineHeights.smallTitle};
  margin-bottom: ${MyTheme.space.medium};

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

export default function LetsTalk() {
  return (
    <Container>
      <TextArea>
        <Title>
          LETS TALK <br /> ABOUT YOUR <br /> PROJECT
        </Title>
        <Text>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </Text>
      </TextArea>
      <Button text={"GET IN TOUCH"} textColor={"black"} />
    </Container>
  );
}
