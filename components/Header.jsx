import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { MyTheme } from "../styles/theme/theme";

import logoDark from "../public/assets/shared/desktop/logo-dark.png";
import burger from "../public/assets/shared/mobile/icon-hamburger.svg";

const Head = styled.div`
  width: 100%;
  padding: ${MyTheme.space.xlarge} 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    padding: ${MyTheme.space.large} 5%;
  }
`;

const Links = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Linkies = styled.a`
  margin-right: ${MyTheme.space.large};
  color: ${MyTheme.colors.text.primary};
  &:hover {
    text-decoration: underline;
    color: ${MyTheme.colors.text.primaryHover};
    cursor: pointer;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const ImageHover = styled(Image)`
  cursor: pointer;
`;

export default function Header({ clickHandler }) {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });

    setWindowSize(window.innerWidth);
  }, []);

  return (
    <Head id="header">
      <Link href="/">
        <ImageHover
          src={logoDark}
          alt="Logo"
          width={180}
          height={25}
          quality={100}
        />
      </Link>
      <Links>
        {windowSize > 700 ? (
          <Fragment>
            <Link href="/">
              <Linkies>HOME</Linkies>
            </Link>

            <Link href="/about">
              <Linkies>OUR COMPANY</Linkies>
            </Link>

            <Link href="/contact">
              <Linkies>CONTACT</Linkies>
            </Link>
          </Fragment>
        ) : (
          <ImageHover src={burger} onClick={() => clickHandler()} />
        )}
      </Links>
    </Head>
  );
}
