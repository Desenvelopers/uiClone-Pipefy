import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  //flex-grow: 0; estica pra oucpar todo espaço possivel se for "=1"
  //flex-shrink: 0; se será diminuir
  //flex-basis: 320px; tamanho base

  & + div {
    border-left: 1px solid rbga(0, 0, 0, 0.05)
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2{
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      height: 42px;
      width: 42px;
      border-radius: 18px;
      border: 0;
      cursor: pointer;
   }
  }

  ul {
    margin-top: 30px;
  }
`;
