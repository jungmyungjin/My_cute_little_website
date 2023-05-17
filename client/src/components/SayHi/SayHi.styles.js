import styled from "styled-components";

export const SayHiLayout = styled.div`
  width: 100%;
  height: 300px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SayHiSection = styled.div`
  width: 500px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SayHiSpan = styled.span`
  color: black;
  font-size: 100px;

  /* 웹 폰트가 로드되기 전에 텍스트를 숨깁니다. */
  visibility: hidden;

  /* 웹 폰트가 로드되면 텍스트를 표시합니다. */
  &.font-loaded {
    visibility: visible;
  }
  font-family: ${(props) => {
    if (props.lang === "CN") {
      return "ZCOOL KuaiLe, sans-serif";
    } else {
      return "Nanum Pen Script, cursive;";
    }
  }};
`;
