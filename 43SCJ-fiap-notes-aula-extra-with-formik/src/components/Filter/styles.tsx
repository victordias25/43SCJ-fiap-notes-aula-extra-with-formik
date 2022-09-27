import styled from 'styled-components';

export const FilterStyled = styled.input`
  color: var(--primary);
  background-color: var(--bgPrimary);
  flex-grow: 1;
  margin-right: 50px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  margin-right: 0px;
  overflow: auto;
  position: absolute;
  top: 2px;
  left: 40px;
  width: calc(100vw - 250px);

  :hover {
    background-color: #444;
  }

  ::placeholder {
  color: gray;
  opacity: 1;
}
`;
