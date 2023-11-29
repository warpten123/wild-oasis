import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h4" &&
    css`
      font-size: 30px;
      font-weight: 600;
      text-align: center;
    `}
  line-height: 1.4
`;

export default Heading;
