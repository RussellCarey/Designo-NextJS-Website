import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { MyTheme } from "../styles/theme/theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  background: linear-gradient(#00000099, #00000085),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 15px;

  grid-row: ${(props) => props.roww};
  grid-column: ${(props) => props.colu};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: all 0.3s;

  margin-right: ${(props) => props.marginRight};

  &:hover {
    background-position: top;
    cursor: pointer;
    letter-spacing: 2px;
  }

  @media (max-width: 1000px) {
    grid-column: 1/2;
    grid-row: auto;

    margin-bottom: ${(props) =>
      props.marginRight ? MyTheme.space.large : null};

    text-align: center;
  }
`;

const Title = styled.h1`
  color: ${MyTheme.colors.text.secondary};
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${MyTheme.colors.text.secondary};
  letter-spacing: 5px;
  margin: 0;
`;

export default function Catagory({
  image,
  row,
  col,
  title,
  link,
  marginRight,
}) {
  return (
    <Link href={link}>
      <Container img={image} colu={col} roww={row} marginRight={marginRight}>
        <Title>{title}</Title>
        <Subtitle>VIEW PROJECTS</Subtitle>
      </Container>
    </Link>
  );
}
