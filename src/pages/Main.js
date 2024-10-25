// import styled from "styled-components";

// const ConWrap = styled.div`
//   width: 200px;
//   height: 100px;
//   background-color: lightblue;
// `;
// const Con = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: lightpink;

//   h3 {
//     font-size: 20px;
//     font-weight: 600;
//     margin-bottom: 10px;
//   }

//   h4 {
//     font-size: 18px;
//     font-weight: 500;
//     margin-bottom: 30px;
//   }
// `;

// const ConImg = styled.div`
//   width: 291.7px;
//   height: 414.27px;
//   background-color: lightgray;
//   margin-bottom: 21.71px;
// `;

// const Event = styled.div`
//   width: 68.61px;
//   height: 23.45px;
//   border-radius: 50px;
//   border: 1px solid #ff6262;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 13px;
//   font-weight: 500;
//   color: #ff6262;
// `;

// const Main = () => {
//   return (
//     <div>
//       <img src="src/imgs/v904-nunny-012 1.png" alt="bgimg" />
//       <h2>실시간 랭킹</h2>
//       <ConWrap>
//         <Con>
//           <ConImg />
//           <h3>무적코털 보보보</h3>
//           <h4>박태준</h4>
//           <Event>EVENT</Event>
//         </Con>
//       </ConWrap>
//     </div>
//   );
// };

// export default Main;

import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const contentData = [
    {id: '0', img: 'src/imgs/v904-nunny-012 1.png', mainTitle: '무적코털 보보보', subTitle: '박태준'},
    {id: '1', img: 'src/imgs/v904-nunny-013 1.png', mainTitle: '콘텐츠 제목 1', subTitle: '작가 1'},
    {id: '2', img: 'src/imgs/v904-nunny-014 1.png', mainTitle: '콘텐츠 제목 2', subTitle: '작가 2'},
    // 필요한 만큼 추가
];

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
      {contentData.map(content => (
        <ConWrap key={content.id}>
          <Link to={`/sub/${content.id}`}>
            <Con>
              <ConImg style={{backgroundImage: `url(${content.img})`, backgroundSize: 'cover'}} />
              <h3>{content.mainTitle}</h3>
              <h4>{content.subTitle}</h4>
              <Event>EVENT</Event>
            </Con>
          </Link>
        </ConWrap>
      ))}
    </div>
  );
};

export default Main;