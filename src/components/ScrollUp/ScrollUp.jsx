import React, { useState } from "react";
import st from "./ScrollUp.module.scss";
import { BiUpArrowAlt } from "react-icons/bi";

export default function ScrollUp() {
    const [showScrollUp, setShowScrollUp] = useState(false);

    window.addEventListener("scroll", function () {
        // const scrollUp = this.document.querySelector(`.${st.scrollup}`);
        // console.log(this);
        if (this.scrollY >= 560) setShowScrollUp(true);
        else setShowScrollUp(false);
    });

    return (
        <a
            href="#main"
            className={
                showScrollUp
                    ? `${st.scrollup} ${st["show-scroll"]}`
                    : `${st.scrollup}`
            }
        >
            <BiUpArrowAlt className={st.scrollup__icon} />
        </a>
    );
}
