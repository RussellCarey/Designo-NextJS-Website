import styled from "styled-components";
import Image from "next/image";
import { MyTheme } from "../styles/theme/theme";

import bg from "../public/assets/home/desktop/bg-pattern-hero-home.svg";
import Button from "./Button";

const Container = styled.div`
  width: 30%;
  min-height: 370px;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  align-items: center;

  margin-bottom: ${MyTheme.space.xlarge};

  @media (max-width: 900px) {
    min-height: min-content;

    width: 100%;
    margin-bottom: ${MyTheme.space.xlarge};
  }

  @media (max-width: 650px) {
    min-height: min-content;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${MyTheme.space.xlarge};
  }
`;

const TextContainer = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
    margin-left: ${MyTheme.space.large};
  }

  @media (max-width: 650px) {
    margin-left: 0;
  }
`;

const Title = styled.h2`
  color: ${MyTheme.colors.text.primary};
  font-size: ${MyTheme.fontSizes.title};
  letter-spacing: ${MyTheme.letterSpacing.medium};
  margin-bottom: ${MyTheme.space.large};
  text-align: center;

  @media (max-width: 1000px) {
    text-align: left;
  }

  @media (max-width: 650px) {
    text-align: center;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;

  background-image: url(${bg.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: ${MyTheme.space.large};

  transform: rotate(${(props) => props.rotate});

  & .img {
    transform: rotate(-${(props) => props.rotate});
  }
`;

export default function LocationCard({ image, title, rot }) {
  return (
    <Container>
      <ImgDiv rotate={rot}>
        <Image
          className="img"
          src={image}
          width={200}
          height={200}
          alt={title}
        />
      </ImgDiv>
      <TextContainer>
        <Title>{title}</Title>
      </TextContainer>
      <Button
        backgroundColor={MyTheme.colors.ui.primary}
        textColor={MyTheme.colors.text.tertiary}
        text={"SEE LOCATION"}
      />
    </Container>
  );
}
