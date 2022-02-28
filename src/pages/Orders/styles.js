import styled from "styled-components";

export const Container = styled.div `
  background-color:black;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const H1 = styled.h1 `
    font-style:normal;
    font-weight:bold;
    font-size:34px;
    line-height:40px;
    margin-bottom:30px;
    text-align:center;
    color:white;
`; 

export const Order = styled.li`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 20px;

  width: 420px;
  max-height: 450px;
  min-height:200px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 15px;
  outline: none;
  border: none;

  div{
    display:flex;
    flex-flow: column wrap;
    align-items:center;
    justify-content: space-around;
  }

  p {
    display:flex;
    text-align:center;
    flex-wrap:wrap;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  button {
    position:flex;
    background: none;
    border: none;
    cursor: pointer;
  }
`;