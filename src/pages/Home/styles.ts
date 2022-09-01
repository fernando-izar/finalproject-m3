import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;

    margin-top: 2rem;
  }

  main {
    width: 100%;
  }

  aside {
    width: 20%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 815px) {
    main {
      width: 80%;
    }

    .main-container {
      flex-direction: row;
      align-items: flex-start;
    }

    aside {
      width: 20%;
    }
  }
`;
