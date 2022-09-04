import styled from "styled-components";

export const Container = styled.li`
  width: 260px;
  min-height: 69px;
  background: #e4e4e4;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  :hover .flip-card-inner {
    transform: rotateX(180deg);
  }
`;
