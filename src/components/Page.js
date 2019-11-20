import React from "react";
import styled from "styled-components";

import Content from "./Content";
import Counter from "./Counter";

const Page = () => (
  <Container className="page">
    <a href="#">Main</a>/<a href="#">Profile</a>
    <Content />
    <Counter />
  </Container>
);

export default Page;

const Container = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
`;
