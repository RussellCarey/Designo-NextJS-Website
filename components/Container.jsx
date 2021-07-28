import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import LetsTalk from "./LetsTalk";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

const Con = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 10%;
  overflow-x: hidden;

  @media (max-width: 500px) {
    padding: 0%;
  }
`;

export default function Container({ children, noLetsTalk }) {
  const [screenSize, setScreenSize] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setScreenSize(window.innerWidth);

    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, []);

  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Con>
      <Header clickHandler={clickHandler} />
      {screenSize < 700 && showMenu ? <MobileMenu /> : null}
      {children}
      {!noLetsTalk ? <LetsTalk /> : null}
      <Footer />
    </Con>
  );
}
