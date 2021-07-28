import styled from "styled-components";
import Image from "next/image";
import { MyTheme } from "../styles/theme/theme";

import twitterIcon from "../public/assets/shared/desktop/icon-twitter.svg";
import facebookIcon from "../public/assets/shared/desktop/icon-facebook.svg";
import youtubeIcon from "../public/assets/shared/desktop/icon-youtube.svg";
import instaIcon from "../public/assets/shared/desktop/icon-instagram.svg";

const Container = styled.footer`
  position: relative;
  transform: translateX(-10%);
  width: 100vw;
  z-index: 5;
  height: min-content;
  min-height: 200px;
  background-color: black;

  padding: 0 12.5%;
  padding-top: ${MyTheme.space.xxxlarge};

  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    transform: translateX(0);
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: min-content;
  padding: ${MyTheme.space.medium};

  border-bottom: 1px solid #8080807d;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LogoDiv = styled.div`
  margin: 0;
  width: min-content;
  font-size: ${MyTheme.fontSizes.h3};
  color: white;
  letter-spacing: ${MyTheme.letterSpacing.small};

  @media (max-width: 900px) {
    width: min-content;
    align-self: center;
    text-align: center;
    margin-bottom: ${MyTheme.space.large};
  }
`;

const LinksDiv = styled.div`
  margin: 0;
  display: flex;
  width: 66%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const Links = styled.p`
  color: white;
  font-size: ${MyTheme.fontSizes.body};
  letter-spacing: ${MyTheme.letterSpacing.small};
  margin-left: ${MyTheme.space.large};

  @media (max-width: 900px) {
    margin-bottom: ${MyTheme.space.large};
    margin-left: 0;
  }
`;

const BottomSection = styled.div`
  padding-top: ${MyTheme.space.large};
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 200px;

  color: grey;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  width: 33%;
  min-height: min-content;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-bottom: ${MyTheme.space.large};
  }
`;

const IconDiv = styled.div`
  width: 33%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 900px) {
    width: 50%;
    text-align: center;
    justify-content: space-around;
    margin-top: ${MyTheme.space.medium};
    padding-bottom: ${MyTheme.space.large};
  }
`;

const Icon = styled(Image)``;

export default function Footer() {
  return (
    <Container>
      <TopSection>
        <LogoDiv>DESIGNO</LogoDiv>
        <LinksDiv>
          <Links>HOME</Links>
          <Links>OUR COMANY</Links>
          <Links>CONTACT</Links>
        </LinksDiv>
      </TopSection>

      <BottomSection>
        <ContactInfo>
          Designo Central Office <br />
          3886 Wellington StreetToronto, <br />
          Ontario M9C 3J5
        </ContactInfo>
        <ContactInfo>
          Contact Us <br />
          Central Office: +1 253-863-8967 <br />M : contact@designo.co
        </ContactInfo>
        <IconDiv>
          <Icon src={twitterIcon} width={25} height={25} />
          <Icon src={youtubeIcon} width={25} height={25} />
          <Icon src={facebookIcon} width={25} height={25} />
          <Icon src={instaIcon} width={25} height={25} />
        </IconDiv>
      </BottomSection>
    </Container>
  );
}
