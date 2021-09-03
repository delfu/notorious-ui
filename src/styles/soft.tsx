import { css } from "styled-components";

export const palette = {
  primary: "rgb(115, 83, 230)",
  grey: "rgb(242, 242, 242)",
  brightest: "rgba(255, 255, 255, 1)",
  brighter: "rgba(255, 255, 255, 0.8)",
  bright: "rgba(255, 255, 255, 0.6)",
  dark: "rgb(163, 177, 198, 0.2)",
  darkest: "rgb(163, 177, 198, 0.8)",
  black: "rgb(50, 50, 50)",
};

export const raised = css`
  background-color: ${palette.grey};
  box-shadow: ${`0.35em 0.35em 0.7em ${palette.darkest}, -0.35em -0.35em 0.8em ${palette.brightest}`};
`;

export const pressable = css`
  cursor: pointer;
  user-select: none;
  &:hover {
  }
  &:active {
    box-shadow: ${`0.3em 0.3em 0.5em ${palette.darkest}, -0.3em -0.3em 0.5em ${palette.brighter}, 0.3em 0.3em 0.3em  ${palette.dark} inset, -0.3em -0.3em 0.3em  ${palette.bright} inset`};
  }
  &:focus {
    outline: none;
  }
`;

export const lowered = css`
  background-color: ${palette.grey};
  box-shadow: ${`0.3em 0.3em 0.5em ${palette.darkest}, -0.3em -0.3em 0.5em ${palette.brighter}, 0.3em 0.3em 0.3em  ${palette.dark} inset, -0.3em -0.3em 0.3em  ${palette.bright} inset`};
`;

export default css`
  color: ${palette.primary};
  ${raised}
  ${pressable};
`;
