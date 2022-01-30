import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid grey;
  padding: 20px;
`;

export const ContactsFormBtn = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
    transition: 300ms;
    background-color: blue;
  }
`;

export const Input = styled.input`
  margin-bottom: 20px;
  margin-left: 10px;
  &:hover,
  &:focus {
    transition: 250ms;
    background-color: #add8e6;
  }
`;
