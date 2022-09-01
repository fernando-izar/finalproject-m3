import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  background-color: #bdf1ea;
  height: 80px;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    gap: 1rem;
  }

  .btn-header {
    display: none;
  }

  .menu-button {
    padding: 0;
  }

  @media (min-width: 550px) {
    .menu-button {
      display: none;
    }
    .btn-header {
      display: initial;
    }
  }
`;
