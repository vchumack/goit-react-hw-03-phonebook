import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: block;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const InputFilter = styled.input`
  display: block;
  width: 93%;
  margin: auto;
  margin-bottom: 20px;
  padding: 13px;

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  outline: none;
  border: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  background: #c3f1f1;
  color: #553c9a;
`;
