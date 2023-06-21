"use client";

import * as React from "react";
// import NextLink from "next/link";
import styled from "styled-components";

// const StyledNextLink = styled(NextLink)`
//   &:active {
//   }
// `;

const StyledNextLink = styled.div`
  color: red;
`;

export const Test = ({ foo = "bar" }) => {
  return <StyledNextLink>{`Test ${foo}`}</StyledNextLink>;
};
