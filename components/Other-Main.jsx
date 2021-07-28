import styled from "styled-components";
import { MyTheme } from "../styles/theme/theme";

import bg from "../public/assets/shared/desktop/bg-pattern-call-to-action.svg";

const Container = styled.div`
  position: relative;
  z-index: 10;
  width: calc(100%);
  height: min-content;
  padding: ${MyTheme.space.xlarge} ${MyTheme.space.xxlarge};

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
  flex-direction: column;

  margin-bottom: ${MyTheme.space.xxlarge};

  box-shadow: 0 5px 15px #ce8f8f81;

  @media (max-width: 1000px) {
    padding: ${MyTheme.space.xlarge} ${MyTheme.space.xlarge};
  }

  @media (max-width: 500px) {
    padding: ${MyTheme.space.large} ${MyTheme.space.large};
    width: calc(100% - 10%);
    margin: 0 5%;
    margin-bottom: ${MyTheme.space.xlarge};
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

export default function OtherMain({ title, text }) {
  return (
    <Container>
      <TextArea>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextArea>
    </Container>
  );
}
