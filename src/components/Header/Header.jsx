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
    const [activeNav, setActiveNav] = useState("#main");

    return (
        <>
            <header className={st.header}>
                <nav className={`${st.nav} container`}>
                    <a href="#main" className={st.nav__logo}>
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
                                    onClick={() => setActiveNav("#main")}
                                    className={
                                        activeNav === "#main"
                                            ? `${st.nav__link} ${st["active-link"]}`
                                            : `${st.nav__link}`
                                    }
                                >
                                    <AiOutlineHome className={st.nav__icon} />{" "}
                                    Главная
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#about"
                                    onClick={() => setActiveNav("#about")}
                                    className={
                                        activeNav === "#about"
                                            ? `${st.nav__link} ${st["active-link"]}`
                                            : `${st.nav__link}`
                                    }
                                >
                                    <RxAvatar className={st.nav__icon} /> Обо
                                    мне
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#hard-skills"
                                    onClick={() => setActiveNav("#hard-skills")}
                                    className={
                                        activeNav === "#hard-skills"
                                            ? `${st.nav__link} ${st["active-link"]}`
                                            : `${st.nav__link}`
                                    }
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
                                    onClick={() => setActiveNav("#services")}
                                    className={
                                        activeNav === "#services"
                                            ? `${st.nav__link} ${st["active-link"]}`
                                            : `${st.nav__link}`
                                    }
                                >
                                    <BiBriefcaseAlt2 className={st.nav__icon} />
                                    Услуги
                                </a>
                            </li>
                            {/* <li className="nav__item">
                                <a
                                    href="#portfolio"
                                    onClick={() => setActiveNav("#porfolio")}
                                    className={
                                        activeNav === "#portfolio"
                                            ? `${st.nav__link} ${st["active-link"]}`
                                            : `${st.nav__link}`
                                    }
                                >
                                    <FiImage className={st.nav__icon} />
                                    Портфолио
                                </a>
                            </li> */}
                            <li className="nav__item">
                                <a
                                    href="#contact"
                                    onClick={() => setActiveNav("#contact")}
                                    className={
                                        activeNav === "#contact"
                                            ? `${st.nav__link} ${st["active-link"]}`
                                            : `${st.nav__link}`
                                    }
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
