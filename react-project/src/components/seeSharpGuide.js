import React from "react";
//현재 이 컴포넌트는 jsx가 사용되는 컴포넌트이기 때문에 react를 import시켜줘야한다. 

function seeSharpGuide() {
  return (
    <div>
        <h1>강좌리스트</h1>
        <ul>
            <li>리액트 소개</li>
            <li>리액트 개발환경 구축</li>
            <li>React HelloWorld</li>
        </ul>
    </div>
  );
}

//이 컴포넌트를 쓰기 위해서는 당연히 루트(index.js)에 연결이 필요하다.
export default seeSharpGuide;