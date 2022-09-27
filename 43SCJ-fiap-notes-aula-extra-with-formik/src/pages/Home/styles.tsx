import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  padding: 60px 30px 30px;
  flex: 1;

  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  .select-order{
    position: absolute;
    top: 2px;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    border-radius: 10px;
    background: transparent;
    color: #ffffff;
    border: 1px solid #ed145b;
    right: 50px;
    padding: 0px 30px;
    cursor: pointer;
  }
  .select-order option{
    color: #ed145b;
  }
`;
