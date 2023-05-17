import React, { useEffect, useRef } from "react";
import { SayHiLayout, SayHiSection } from "./SayHi.styles";
import { useLocation } from "react-router-dom";
import FontLoaders from "../font/FontLoaders";

function SayHi(props) {
  const location = useLocation();
  const lang = location.pathname.split("/")[2];

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
    <SayHiLayout>
      <SayHiSection>
        <FontLoaders lang={lang}>{props.greeting}</FontLoaders>
      </SayHiSection>
    </SayHiLayout>
  );
}

export default SayHi;
