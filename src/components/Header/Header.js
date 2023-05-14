import React from "react";
import { TitleLayout, GreetingLayout } from "./Header.styles";

function Title() {
  return (
    <TitleLayout>
      <p>🎀 My cute little website 🎀 </p>
    </TitleLayout>
  );
}

function Greeting() {
  return (
    <GreetingLayout>
      <p>Hello world!</p>
    </GreetingLayout>
  );
}

function Header() {
  return (
    <>
      <Title />
      <Greeting />
    </>
  );
}

export default Header;
