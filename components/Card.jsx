import styled from "styled-components";
import Image from "next/image";
import { MyTheme } from "../styles/theme/theme";

const Container = styled.div`
  width: 100%;
  min-height: 500px;

  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 15px 15px 0 0;

  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

const TextBox = styled.div`
  background-color: ${MyTheme.colors.bg.lightPrimary};
  height: 40%;
  width: 100%;
  border-radius: 0 0 15px 15px;
  padding: ${MyTheme.space.large};
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: ${MyTheme.space.medium};
  color: ${MyTheme.colors.ui.primary};
  letter-spacing: ${MyTheme.letterSpacing.medium};
`;

const Text = styled.p`
  color: ${MyTheme.colors.text.primary};
`;

export default function Card({ img, title, text }) {
  console.log("refreshed");
  console.log(title);
  return (
    <Container>
      <ImgContainer image={img} />
      <TextBox>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextBox>
    </Container>
  );
}
