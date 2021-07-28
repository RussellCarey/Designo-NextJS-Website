import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { MyTheme } from "../styles/theme/theme";

const Container = styled.nav`
  z-index: 100;
  width: 100vw;
  height: 100%;

  position: absolute;
  left: 0;
  top: ${(props) => props.headerHeight};

  background-color: #0000009b;
`;

const Menu = styled.div`
  min-height: 100px;
  height: min-content;
  background-color: black;

  padding: ${MyTheme.space.large} ${MyTheme.space.medium};
`;

const Links = styled.p`
  padding: ${MyTheme.space.small};
  width: 100%;
  color: white;
  font-size: ${MyTheme.fontSizes.h3};
  font-weight: ${MyTheme.fontWeights.regular};

  display: flex;
  flex-direction: column;

  a {
    margin-bottom: ${MyTheme.space.medium};
  }
`;

export default function MobileMenu({ headerHeight }) {
  return (
    <Container headerHeight={headerHeight}>
      <Menu>
        <Links>
          <Link href="/about">
            <a>OUR COMPANY</a>
          </Link>
          <Link href="/contact">
            <a>CONTACT US</a>
          </Link>
        </Links>
      </Menu>
    </Container>
  );
}
