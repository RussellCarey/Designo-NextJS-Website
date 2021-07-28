import styled from "styled-components";
import Image from "next/image";
import { MyTheme } from "../styles/theme/theme";

import bg from "../public/assets/shared/desktop/bg-pattern-call-to-action.svg";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 15px;

  background-color: ${MyTheme.colors.ui.primary};
  background-image: url(${bg.src});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  display: flex;

  & .last {
    margin-bottom: ${MyTheme.space.large};
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding: ${MyTheme.space.large} 0;
    border-radius: 0;
    justify-content: center;
  }
`;

const TextArea = styled.div`
  order: 1;
  z-index: 10;
  text-align: left;
  padding: ${MyTheme.space.xlarge};
  order: ${(props) => (props.isLeft ? 2 : 1)};
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    padding: ${MyTheme.space.xlarge};
    order: 2;
    padding-bottom: 0;
  }

  @media (max-width: 500px) {
    padding: ${MyTheme.space.medium};
    text-align: center;
  }
`;

const Form = styled.form`
  padding: ${MyTheme.space.xlarge};
  order: 2;
  width: 50%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    padding: ${MyTheme.space.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  color: white;
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: solid 1px white;
  padding: ${MyTheme.space.medium} ${MyTheme.space.small};

  &::placeholder {
    color: #ffffff8a;
  }
`;

const Title = styled.div`
  font-size: ${MyTheme.fontSizes.h2};
  color: ${MyTheme.colors.text.secondary};
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
  font-weight: 300;
`;

export default function ContactForm() {
  return (
    <Container>
      <TextArea>
        <Title>Contact Us</Title>
        <Text>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </Text>
      </TextArea>

      <Form>
        <Input placeholder="Enter name"></Input>
        <Input placeholder="Enter email"></Input>
        <Input className="last" placeholder="Your Message"></Input>
        <Button
          text={"SUBMIT"}
          textColor={"black"}
          bgColor={MyTheme.colors.ui.lightprimary}
          className="button"
        />
      </Form>
    </Container>
  );
}
