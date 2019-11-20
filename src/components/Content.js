import React from "react";
import styled from "styled-components";

import Profile from "./Profile";
import ProfileImproved from "./ProfileImproved";

const Content = () => (
  <Container className="content">
    {/* <Profile /> */}
    <ProfileImproved />
  </Container>
);

export default Content;

const Container = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
