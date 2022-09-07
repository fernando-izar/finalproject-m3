import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  background-color: #bdf1ea;
  height: 80px;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 20px; */

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 20%;
  }

  .container-header {
    display: flex;
    align-items: center;
    /* gap: 2rem; */
  }

  nav {
    display: flex;
    height: fit-content;
    gap: 1rem;
    margin-right: 20px;
  }

  .btn-header {
    display: none;
  }

  .menu-button {
    padding: 0;
  }

  .menu {
    min-width: 200px;
  }

  .btn-chosen {
    background-color: #2b937f;
  }

  @media (min-width: 541px) {
    img {
      width: max-content;
      margin-left: 10px;
    }
  }

  @media (min-width: 820px) {
    .menu-button {
      display: none;
    }
    .btn-header {
      display: initial;
    }
  }
`;
