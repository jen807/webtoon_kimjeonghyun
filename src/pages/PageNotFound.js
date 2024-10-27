import styled from "styled-components";

import bgImg from "./imgs/bgImg.jpg";

const SbgImg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  filter: saturate(3);

  img {
    width: 100%;
    height: 100%;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 900;
  }
`;

const PageNotFound = () => {
  return (
    <SbgImg>
      <img src={bgImg} alt="bgimg" />
      <h1>404 NOT FOUND</h1>
    </SbgImg>
  );
};

export default PageNotFound;
