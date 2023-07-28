import React from "react";
import st from "./Footer.module.scss";
import { LiaTelegram } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className={`${st.footer}`}>
            <div className={`${st.footer__container} container`}>
                <h1 className={`${st.footer__title}`}>Kutleev</h1>

                <ul className={`${st.footer__list}`}>
                    <li>
                        <a href="#about" className={`${st.footer__link}`}>
                            Обо мне
                        </a>
                    </li>

                    <li>
                        <a href="#services" className={`${st.footer__link}`}>
                            Услуги
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className={`${st.footer__link}`}>
                            Контакты
                        </a>
                    </li>
                </ul>

                <div className={st.footer__social}>
                    <a
                        href="https://t.me/kildanL"
                        className={`${st["footer__social-icon"]}`}
                        target="_blank"
                    >
                        <LiaTelegram />
                    </a>

                    <a
                        href="https://github.com/kildanL"
                        className={`${st["footer__social-icon"]}`}
                        target="_blank"
                    >
                        <FiGithub />
                    </a>
                </div>

                <span className={st.footer__copyright}>
                    &#169; Kutleev. All rights reserved
                </span>
            </div>
        </footer>
    );
}
