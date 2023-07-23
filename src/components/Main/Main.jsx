import React from "react";
import st from "./Main.module.scss";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

export default function Main() {
    return (
        <section className={`${st.home} section`} id="home">
            <div className={`${st.home__container} container grid`}>
                <div className={`${st.home__content} grid`}>
                    <Social />
                    <div className={`${st.home__img}`}></div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    );
}
