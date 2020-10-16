import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Inscrever-se no hackathon</p>
      <img src="https://avatars3.githubusercontent.com/u/21091242?s=460" alt="foto"/>
    </Container>
  )
}

export default Card;