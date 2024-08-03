import styled from "styled-components";

export const BoxLabel = styled.div`
  padding: 10px; 
  border: 1px solid var(--vintage); 
  border-radius: 5px;
  background-color: var(--dark-purple); 
  text-align: center;
  position: relative;
  max-width: 150px;
  overflow: hidden;
  word-wrap: break-word;
  font-family: var(--primary-font);
`;

export const Label = styled.div`
  margin-top: 30px;
  color: var(--orange);
  word-break: break-word;
  font-family: var(--primary-font);
`;

export const HeaderBox = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  background-color: var(--grey); 
  padding: 5px 0;
  border-radius: 5px 5px 0 0; 
  font-weight: var(--medium);
  color: var(--dark-purple);
`;

