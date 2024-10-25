import styled from "styled-components";

const ConWrap = styled.div`
  width: 200px;
  height: 100px;
  background-color: lightblue;
`;
const Con = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightpink;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

const ConImg = styled.div`
  width: 291.7px;
  height: 414.27px;
  background-color: lightgray;
  margin-bottom: 21.71px;
`;

const Event = styled.div`
  width: 68.61px;
  height: 23.45px;
  border-radius: 50px;
  border: 1px solid #ff6262;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: #ff6262;
`;

const Main = () => {
  return (
    <div>
      <img src="src/imgs/v904-nunny-012 1.png" alt="bgimg" />
      <h2>실시간 랭킹</h2>
      <ConWrap>
        <Con>
          <ConImg />
          <h3>실시간 랭킹</h3>
          <h4>실시간 랭킹</h4>
          <Event>EVENT</Event>
        </Con>
      </ConWrap>
    </div>
  );
};

export default Main;
