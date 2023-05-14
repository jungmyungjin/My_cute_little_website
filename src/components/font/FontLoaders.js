import { useEffect, useRef } from "react";
import styled from "styled-components";

const Text = styled.div`
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

function CustomText(props) {
  const ref = useRef();

  useEffect(() => {
    function onFontLoad() {
      if (ref.current) {
        ref.current.classList.add("font-loaded");
      }
    }

    if (document.fonts.check("100px Nanum Pen Script")) {
      onFontLoad();
    } else {
      document.fonts.ready.then(onFontLoad);
    }
  }, []);

  return (
    <Text ref={ref} lang={props.lang}>
      {props.children}
    </Text>
  );
}

export default CustomText;
