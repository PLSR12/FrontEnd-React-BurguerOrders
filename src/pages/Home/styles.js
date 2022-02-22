import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  min-height: 100%;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 40px;
  text-align: center;
  color: #ffff;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.4px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;

  display: flex;
  align-items: center;
  color: #ffff;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding-left: 25px;

  border: none;
  outline: none;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #ffff;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 14px;
  margin-bottom:-30px;
  margin-top:-25px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 50px;
  border: none;
  outline: none;

  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  background: #D93856;
  color: #ffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-bottom:51px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
