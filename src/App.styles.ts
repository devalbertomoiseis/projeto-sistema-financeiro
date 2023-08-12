import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  background-color: #37303c;
  height: 200px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  padding-top: 30px;
  &::after {
    content: "";
    display: block;
    height: 4px;
    width: 30px;
    background: #fff;
    margin: 10px auto 0 auto;
  }
`;

export const Body = styled.div`
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;
`;
