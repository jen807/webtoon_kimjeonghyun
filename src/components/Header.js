import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 184px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(to right, #5356f6, #ee78a3);
  -webkit-background-clip: text;
  /* 이부분 왜 밑줄 쳐지는지 질문하기! 콘솔에는 뭐가 안뜸 */
  color: transparent;
`;

const Header = () => {
  return (
    <SHeader>
      <Logo to="/">READERS 웹툰</Logo>
    </SHeader>
  );
};

export default Header;
