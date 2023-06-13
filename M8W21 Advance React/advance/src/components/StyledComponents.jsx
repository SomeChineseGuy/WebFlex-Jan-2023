import React from "react";
import styled from 'styled-components';

const Header = styled.h2`
  color: purple;
  font-size: 30px;
`

const StyledComponent = (props) => {
  const Footer = styled.footer`
  color: ${props.green ? 'green' : 'blue'};
`
  return (
    <div>
      <h1>Hello Welcome to my styled Component</h1>
      <h2>How do I look?</h2>
      <Header>How do I look?</Header>
      <Footer>What color am i?</Footer>
    </div>
  )
};

export default StyledComponent;
