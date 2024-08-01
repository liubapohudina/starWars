import styled from "styled-components";

export const Span = styled.span`
  position: relative;
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;

  &:before,
  &:after {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
  }

  &:after {
    box-shadow: 0 2px 0 #F9E400 inset;
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
`;
