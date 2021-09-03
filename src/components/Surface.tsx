import { raised, lowered, palette } from "../styles/soft";
import styled from "styled-components";

export type Props = {
  width?: number | string;
  height?: number | string;
  raised?: boolean;
  lowered?: boolean;
};

const Surface = styled.div<Pick<Props, "raised" | "lowered">>`
  background-color: ${palette.grey};
  padding: 15px;
  border-radius: 0.2em;
  ${(props) => props.raised && raised};
  ${(props) => props.lowered && lowered};
`;

export default Surface;
