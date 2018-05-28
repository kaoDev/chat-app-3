import styled, { keyframes } from "react-emotion";
import * as React from "react";

const spin = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const Wrapper = styled("div")({
  fontSize: 40,
  animation: `${spin} 1s linear infinite`
});

export const Loader = () => (
  <Wrapper>
    <span role="img" aria-label="loading indicator, spinning cyclone">
      🌀
    </span>
  </Wrapper>
);
