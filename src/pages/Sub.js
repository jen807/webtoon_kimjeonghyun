import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bgImg from "./imgs/bgImg.jpg";

const contentData = [
  {
    id: 0,
    img: "https://image-comic.pstatic.net/webtoon/736744/thumbnail/thumbnail_IMAG21_3905519414961792355.jpg",
    mainTitle: "CASTLE",
    subTitle: "정연·글 / 그림",
    description: [
      "복수를 위해 칼을 갈아온 특급 킬러 '김신',",
      "뒷세계 '절대권력'과의 목숨 건 한판 승부!",
    ],
    hashtags: ["액션", "스릴러", "드라마"],
    likes: "3,970,219",
  },
  {
    id: 1,
    img: "https://image-comic.pstatic.net/webtoon/758150/thumbnail/thumbnail_IMAG21_4135492154714961716.jpg",
    mainTitle: "입학용병",
    subTitle: "YC·글 / 락현·그림",
    description: [
      "어린 시절 비행기 추락 사고의 유일한 생존자 유이진.",
      "살아남기 위해 용병으로 살아가던 유이진은 10년 후, 가족이 있는 고향으로 돌아왔다.",
    ],
    hashtags: ["액션", "학원물"],
    likes: "3,542,731",
  },
  {
    id: 2,
    img: "https://image-comic.pstatic.net/webtoon/833255/thumbnail/thumbnail_IMAG21_504f6152-8a60-42a0-a1c0-43cd77f9c430.jpg",
    mainTitle: "낢이 사는 이야기",
    subTitle: "서나래·글 / 그림",
    description: [
      "혼란의 도가니인 인생에 잘 모르겠는 것 투성이지만, 오늘도 그저 슬렁슬렁 살아가 본다.",
      "고양이들과 함께 창밖 구경, 꽃 구경을 하며 울고 웃고 먹고 마시는 방구석 인생.",
      "올해로 연재 20년차를 맞이하는, 낢의 미미하고 사소한 이야기.",
    ],
    hashtags: ["코미디", "일상"],
    likes: "2,915,128",
  },
  {
    id: 3,
    img: "https://image-comic.pstatic.net/webtoon/812560/thumbnail/thumbnail_IMAG21_72e2af78-cf9b-4a45-9e31-e9ccf1a3ee25.jpg",
    mainTitle: "돈내놔",
    subTitle: "은류·글 / 도늑·그림",
    description: [
      "특수부대에서 강제 전역을 당한 후 평범한 삶을 살아가던 주혁은",
      "안경을 통해 갑작스럽고 이상한 미션들을 받게 된다.",
      "될 대로 되라는 심정으로 해당 미션을 수행했더니...",
      "돈이 미친 듯이 복사되기 시작한다…?!!",
      "돈맛을 본 주혁은 본격적으로 게임에 참여해 압도적인 피지컬을 바탕으로",
      "돈과 목숨을 저울질하는 게임 속 참가자들을 압도하는 이레귤러가 되어간다!!",
    ],
    hashtags: ["액션", "스릴러"],
    likes: "2,430,980",
  },
  {
    id: 4,
    img: "https://image-comic.pstatic.net/webtoon/833413/thumbnail/thumbnail_IMAG21_4ccb473c-8a3b-4874-9ede-6feb321ccec5.jpg",
    mainTitle: "거룩한 밤",
    subTitle: "사이사·글 / 정한길·그림",
    description: [
      "평범한 보육원에서 형제로 자라난 강바우와 요셉.",
      "구마 사제로 성장한 요셉은 자신을 키워준 보육원 식구들을 잔혹하게 살해하고 대악마로 루키페르로 각성한다.",
      "남다른 신체능력을 가진 바우는 복수를 다짐하고, 맨주먹 하나로 요셉의 발자취를 쫓기 시작하지만",
      "상상을 초월한 요셉의 힘 앞에서 고전을 거듭한다.",
      "수많은 위협 속에서 고뇌하는 바우, 그는 과연 대악마 루키페르의 음모를 막고 세상을 구해낼 수 있을까?",
    ],
    hashtags: ["액션", "오컬트"],
    likes: "1,873,541",
  },
];

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

const SubContainer = styled.div`
  max-width: 1551.89px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 184px;
  height: 100vh;
`;

const Thumbnail = styled.div`
  width: 340px;
  height: 483px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  margin-right: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
  line-height: 25px;
  letter-spacing: 0.5;
`;

const HashtagWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const Hashtag = styled.span`
  font-size: 14px;
  color: #888;
  background-color: white;
  padding: 8px 10px;
  border-radius: 3px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.1);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
`;

const Slikebutton = styled.div`
  background: linear-gradient(to right, #5356f6, #ee78a3);
  padding: 20px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  color: white;
  box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;

  span {
    margin-right: 8px;
    font-weight: 300;
  }
`;

const Sbutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 100px;
  margin-right: 30px;
  color: black;
  box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;

  span {
    color: #444;
    font-weight: 400;
  }
`;

const Sshare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 40px;
  color: black;
  box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Sub = () => {
  const { id } = useParams();
  const content = contentData[id];

  return (
    <SubContainer>
      <SbgImg>
        <img src={bgImg} alt="bgimg" />
      </SbgImg>
      <Thumbnail img={content.img} />
      <ContentWrapper>
        <Title>{content.mainTitle}</Title>
        <SubTitle>{content.subTitle}</SubTitle>
        <Description>
          {content.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Description>
        <HashtagWrapper>
          {content.hashtags.map((tag, index) => (
            <Hashtag key={index}>#{tag}</Hashtag>
          ))}
        </HashtagWrapper>

        <ButtonWrapper>
          <Slikebutton>
            <span>+ 관심</span>
            {content.likes}
          </Slikebutton>
          <Sbutton>
            첫화보기<span>·1화</span>
          </Sbutton>
          <Sshare>공유</Sshare>
        </ButtonWrapper>
      </ContentWrapper>
    </SubContainer>
  );
};

export default Sub;
