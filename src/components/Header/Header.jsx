import React, { useState } from "react";
import st from "./Header.module.scss";
import { FiMenu, FiImage } from "react-icons/fi";
import { AiOutlineHome, AiOutlineFileDone } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BiBriefcaseAlt2, BiMessageSquareDetail } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

export default function Header() {
    //show menu
    const [isToggleMenu, setIsToggleMenu] = useState(false);

    return (
        <>
            <header className={st.header}>
                <nav className={`${st.nav} container`}>
                    <a href="#" className={st.nav__logo}>
                        Kutleev
                    </a>

                    <div
                        className={
                            isToggleMenu
                                ? `${st.nav__menu} ${st["show-menu"]}`
                                : `${st.nav__menu}`
                        }
                    >
                        <ul className={`${st.nav__list} grid`}>
                            <li className="nav__item">
                                <a
                                    href="#main"
                                    className={`${st.nav__link} ${st["active-link"]}`}
                                >
                                    <AiOutlineHome className={st.nav__icon} />{" "}
                                    Главная
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#about"
                                    className={`${st.nav__link} ${st["active-link"]}`}
                                >
                                    <RxAvatar className={st.nav__icon} /> Обо
                                    мне
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#hard-skills"
                                    className={`${st.nav__link} ${st["active-link"]}`}
                                >
                                    <AiOutlineFileDone
                                        className={st.nav__icon}
                                    />
                                    Hard-skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#services"
                                    className={`${st.nav__link} ${st["active-link"]}`}
                                >
                                    <BiBriefcaseAlt2 className={st.nav__icon} />
                                    Услуги
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#portfolio"
                                    className={`${st.nav__link} ${st["active-link"]}`}
                                >
                                    <FiImage className={st.nav__icon} />
                                    Портфолио
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#contacts"
                                    className={`${st.nav__link} ${st["active-link"]}`}
                                >
                                    <BiMessageSquareDetail
                                        className={st.nav__icon}
                                    />
                                    Контакты
                                </a>
                            </li>
                        </ul>
                        <GrFormClose
                            className={st.nav__close}
                            onClick={() => setIsToggleMenu(!isToggleMenu)}
                        />
                    </div>

                    <div
                        className={
                            isToggleMenu
                                ? `${st.nav__toggle} ${st["nav__toggle-close"]}`
                                : `${st.nav__toggle}`
                        }
                        onClick={() => setIsToggleMenu(!isToggleMenu)}
                    >
                        <FiMenu className="nav__icn-menu" />
                    </div>
                </nav>
            </header>
        </>
    );
}