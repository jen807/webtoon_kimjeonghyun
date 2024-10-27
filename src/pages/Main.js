import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImg from "./imgs/bgImg.jpg";

const contentData = [
  {
    id: "0",
    img: "https://image-comic.pstatic.net/webtoon/736744/thumbnail/thumbnail_IMAG21_3905519414961792355.jpg",
    mainTitle: "CASTLE",
    subTitle: "정연·글 / 그림",
  },
  {
    id: "1",
    img: "https://image-comic.pstatic.net/webtoon/758150/thumbnail/thumbnail_IMAG21_4135492154714961716.jpg",
    mainTitle: "입학용병",
    subTitle: "YC·글 / 락현·그림",
  },
  {
    id: "2",
    img: "https://image-comic.pstatic.net/webtoon/833255/thumbnail/thumbnail_IMAG21_504f6152-8a60-42a0-a1c0-43cd77f9c430.jpg",
    mainTitle: "낢이 사는 이야기",
    subTitle: "서나래·글 / 그림",
  },
  {
    id: "3",
    img: "https://image-comic.pstatic.net/webtoon/812560/thumbnail/thumbnail_IMAG21_72e2af78-cf9b-4a45-9e31-e9ccf1a3ee25.jpg",
    mainTitle: "돈내놔",
    subTitle: "은류·글 / 도늑·그림",
  },
  {
    id: "4",
    img: "https://image-comic.pstatic.net/webtoon/833413/thumbnail/thumbnail_IMAG21_4ccb473c-8a3b-4874-9ede-6feb321ccec5.jpg",
    mainTitle: "거룩한 밤",
    subTitle: "사이사·글 / 정한길·그림",
  },
];

const SMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SbgImg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  filter: saturate(1.5);

  img {
    width: 100%;
    height: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1551.89px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MoreButton = styled.div`
  font-size: 16px;
  color: #444;
  font-weight: 500;
  cursor: pointer;
`;

const ConWrap = styled.div`
  margin: 0 auto;
  width: 1551.89px;
  display: flex;
  justify-content: space-between;
`;
const TitleText = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-top: 12px;
  text-align: left;
`;

const SubTitleText = styled.h4`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-top: 10px;
  color: #666;
`;

const Con = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 291.7px;
  text-decoration: none;
  color: black;
  position: relative;

  &:hover ${SubTitleText} {
    text-decoration: underline;
  }
`;

const Rank = styled.div`
  position: absolute;
  top: 5px;
  left: 15px;
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
`;

const ConImg = styled.div`
  width: 291.7px;
  height: 414.27px;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent 70%),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

const Event = styled.div`
  width: 40px;
  height: 23.45px;
  border-radius: 50px;
  border: 1px solid #ff6262;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: #ff6262;
  margin-top: 20px;
  text-align: left;
`;

const Main = () => {
  return (
    <SMain>
      <SbgImg>
        <img src={bgImg} alt="bgimg" />
      </SbgImg>
      <TitleWrapper>
        <Title>실시간 랭킹</Title>
        <MoreButton>더보기</MoreButton>
      </TitleWrapper>
      <ConWrap>
        {contentData.map((content, index) => (
          <Con to={`/sub/${content.id}`} key={content.id}>
            <ConImg img={content.img}>
              <Rank>{index + 1}</Rank>
            </ConImg>
            <TitleText>{content.mainTitle}</TitleText>
            <SubTitleText>{content.subTitle}</SubTitleText>
            <Event>UP</Event>
          </Con>
        ))}
      </ConWrap>
    </SMain>
  );
};

export default Main;
