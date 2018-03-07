import React from "react";

function Title () {
    return <h1>Bitfolio</h1>;
}

function SubTitle () {
    return <div>Track your bitcoin net worth</div>;
}

export default function Header() {
    return (
      <div>
        <Title />
        <SubTitle />
      </div>
    );
}