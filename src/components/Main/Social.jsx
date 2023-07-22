import React from "react";
import { LiaTelegram } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import st from "./Main.module.scss";

export default function () {
    return (
        <div className={`${st.home__social}`}>
            <a
                href="https://t.me/kildanL"
                className={`${st["home__social-icon"]}`}
                target="_blank"
            >
                <LiaTelegram />
            </a>

            <a
                href="https://github.com/kildanL"
                className={`${st["home__social-icon"]}`}
                target="_blank"
            >
                <FiGithub />
            </a>
        </div>
    );
}
