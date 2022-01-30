import styled from 'styled-components';

export const ContactsListBtn = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
    transition: 300ms;
    background-color: blue;
  }
`;

export const ContactsList = styled.ul`
  padding: 0px;
`;

export const ContactsListItem = styled.li`
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  padding: 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: #00bfff;
  }
`;
