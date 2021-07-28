import { MyTheme } from "../styles/theme/theme";
import styled from "styled-components";

export const WhiteText = styled.p`
  margin: 0;
  color: ${MyTheme.colors.text.secondary};
  font-size: ${MyTheme.fontSizes.body};
  line-height: ${MyTheme.lineHeights.body};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

export const BlackText = styled.p`
  margin: 0;
  color: ${MyTheme.colors.text.primary};
  font-size: ${MyTheme.fontSizes.body};
  line-height: ${MyTheme.lineHeights.body};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;
