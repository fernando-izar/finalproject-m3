import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 0.5rem;
    > div {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
    }
  }
`;
