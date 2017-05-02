import styled from 'styled-components';

export const AutoCompleteWrapper = styled.section`
  input {
    padding: 4px 5px;
    border-bottom: 2px solid #333;
    margin: 5px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 5px;
    outline: none;
  }
`;

export const ListItem = styled.li`
  background-color: lightseagreen;
  list-style: none;
  padding: 5px;
  margin: 2px;
  display: inline-block;
  border-radius: 5px;
`;

export const Ul = styled.ul`
  width: 50%;
  max-width: 500px;
  margin: 0;
  list-style: none;
`;
