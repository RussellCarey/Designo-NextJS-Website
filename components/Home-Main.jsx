import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { MyTheme } from "../styles/theme/theme";
import { WhiteText } from "./Globals";
import Button from "./Button";

import phoneImage from "../public/assets/home/desktop/image-hero-phone.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 700px;
  padding: 0 8%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  margin-bottom: ${MyTheme.space.xxlarge};

  background-color: ${MyTheme.colors.ui.primary};
  background-image: url("assets/shared/desktop/bg-pattern-small-circle.svg");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  @media (max-width: 1400px) {
    margin-left: 4%;
  }

  @media (max-width: 1200px) {
    height: min-content;
    min-height: min-content;
    justify-content: flex-start;
    padding: ${MyTheme.space.xlarge} ${MyTheme.space.xlarge};
    margin-left: 0;
  }

  @media (max-width: 500px) {
    margin-bottom: ${MyTheme.space.xlarge};
    font-size: 60%;
    border-radius: 0;
    padding: ${MyTheme.space.xlarge} ${MyTheme.space.medium};
  }
`;

const TextBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 70px;

  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${MyTheme.space.large};
  font-size: ${MyTheme.fontSizes.h1};
  font-weight: ${MyTheme.fontWeights.regular};
  color: ${MyTheme.colors.text.secondary};
  line-height: ${MyTheme.lineHeights.large};

  @media (max-width: 1200px) {
    margin-top: 0;
    margin-bottom: ${MyTheme.space.large};
  }

  @media (max-width: 600px) {
    font-size: ${MyTheme.fontSizes.h2};
  }

  @media (max-width: 400px) {
    font-size: ${MyTheme.fontSizes.h3};
    line-height: ${MyTheme.lineHeights.smallTitle};
  }
`;

const StyledImageDiv = styled.div`
  position: absolute;
  width: 600px;
  height: min-content;
  right: 0vw;
  bottom: -190px;

  @media (max-width: 1400px) {
    right: -4vw;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export default function HomeMain() {
  return (
    <Container>
      <StyledImageDiv>
        <Image src={phoneImage} layout={"responsive"} alt="Phone" />
      </StyledImageDiv>
      <TextBox>
        <Title>
          Award-winning custom designs and digital branding solutions
        </Title>

        <WhiteText marginBottom={MyTheme.space.large}>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </WhiteText>
        <Button
          backgroundColor={MyTheme.colors.bg.tertiary}
          text={"LEARN MORE"}
          textColor={"black"}
        />
      </TextBox>
    </Container>
  );
}
