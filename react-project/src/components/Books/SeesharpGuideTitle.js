import React from "react";

function SeeSharpGuideTitle() {
    const date = new Date();
    const subject = (date.getSeconds() % 2 === 0) ? "React" : "C#교과서";
    const title = `${subject} 학습 가이드`;
    const tilteStyles = {color: "#C0FFEE" , textDecoration: "underline"};
    return (
        <header className="Seesharp-guide-title">
            <h2 style={tilteStyles}>{title}</h2>
        </header>
    //클래스는 클래스 네임으로 직접적인 style 은 객체 리터럴로 표현할 수 있다.        
    );
}

export default SeeSharpGuideTitle;