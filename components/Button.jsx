import styled from "styled-components";
import { MyTheme } from "../styles/theme/theme";
import { BlackText, WhiteText } from "./Globals";

const Container = styled.div`
  min-width: 140px;
  width: min-content;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  padding: ${MyTheme.space.small} ${MyTheme.space.medium};

  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.textColor || "white"};
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(103%);
  }
`;

export default function Button({ backgroundColor, text, textColor }) {
  return (
    <Container bgColor={backgroundColor} textColor={textColor}>
      {text}
    </Container>
  );
}
