import styled from "styled-components";

export const Container = styled.div`
  background: #f4f4f4;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  max-height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style: none;
    overflow: auto;
    padding: 0;

    max-height: 250px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
