import React, { useState } from "react";
import st from "./Services.module.scss";
import { HiCodeBracket, HiOutlineCheckBadge } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { RiLayout4Line } from "react-icons/ri";

export default function Services() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className={`${st.services} section`} id="services">
            <h2 className={`section__title`}>Услуги</h2>
            <span className={`section__subtitle`}>Чем я занимаюсь</span>

            <div className={`${st.services__container} container grid`}>
                <div className={`${st.services__content}`}>
                    <div>
                        <HiCodeBracket className={`${st.services__icon}`} />
                        <h3 className={`${st.services__title}`}>
                            Фронтенд-разработчик
                        </h3>
                    </div>

                    <span
                        className={`${st.services__button}`}
                        onClick={() => toggleTab(1)}
                    >
                        Подробнее
                        <BsArrowRight
                            className={`${st["services__button-icon"]}`}
                        />
                    </span>

                    <div
                        className={
                            toggleState === 1
                                ? `${st.services__modal} ${st["active-modal"]}`
                                : `${st.services__modal}`
                        }
                    >
                        <div className={`${st["services__modal-content"]}`}>
                            <GrFormClose
                                className={`${st["services__modal-close"]}`}
                                onClick={() => toggleTab(0)}
                            />

                            <h3 className={`${st["services__modal-title"]}`}>
                                Фронтенд-разработчик
                            </h3>
                            <p
                                className={`${st["services__modal-description"]}`}
                            >
                                1 год опыта разработки 2 приложений с командой
                                из трёх человек
                            </p>

                            <ul
                                className={`${st["services__modal-services"]} grid`}
                            >
                                <li
                                    className={`${st["services__modal-service"]}`}
                                >
                                    <HiOutlineCheckBadge
                                        className={`${st["services__modal-icon"]}`}
                                    />
                                    <p
                                        className={`${st["services__modal-info"]}`}
                                    >
                                        Разработка компонентов (React)
                                    </p>
                                </li>

                                <li
                                    className={`${st["services__modal-service"]}`}
                                >
                                    <HiOutlineCheckBadge
                                        className={`${st["services__modal-icon"]}`}
                                    />
                                    <p
                                        className={`${st["services__modal-info"]}`}
                                    >
                                        Интеграция с API
                                    </p>
                                </li>

                                <li
                                    className={`${st["services__modal-service"]}`}
                                >
                                    <HiOutlineCheckBadge
                                        className={`${st["services__modal-icon"]}`}
                                    />
                                    <p
                                        className={`${st["services__modal-info"]}`}
                                    >
                                        Создание адаптивной вёрстки
                                    </p>
                                </li>

                                <li
                                    className={`${st["services__modal-service"]}`}
                                >
                                    <HiOutlineCheckBadge
                                        className={`${st["services__modal-icon"]}`}
                                    />
                                    <p
                                        className={`${st["services__modal-info"]}`}
                                    >
                                        Валидация
                                    </p>
                                </li>

                                <li
                                    className={`${st["services__modal-service"]}`}
                                >
                                    <HiOutlineCheckBadge
                                        className={`${st["services__modal-icon"]}`}
                                    />
                                    <p
                                        className={`${st["services__modal-info"]}`}
                                    >
                                        Создание анимаций
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`${st.services__content}`}>
                    <div>
                        <RiLayout4Line className={`${st.services__icon}`} />
                        <h3 className={`${st.services__title}`}>
                            UI/UX Дизайнер
                        </h3>
                    </div>

                    <span
                        className={`${st.services__button}`}
                        onClick={() => toggleTab(2)}
                    >
                        Подробнее
                        <BsArrowRight
                            className={`${st["services__button-icon"]}`}
                        />
                    </span>

                    <div
                        className={
                            toggleState === 2
                                ? `${st.services__modal} ${st["active-modal"]}`
                                : `${st.services__modal}`
                        }
                    >
                        <div className={`${st["services__modal-content"]}`}>
                            <GrFormClose
                                className={`${st["services__modal-close"]}`}
                                onClick={() => toggleTab(0)}
                            />

                            <h3 className={`${st["services__modal-title"]}`}>
                                UI/UX Дизайнер
                            </h3>
                            <p
                                className={`${st["services__modal-description"]}`}
                            >
                                1 год опыта создания дизайна и макетов для
                                приложений
                            </p>

                            <ul
                                className={`${st["services__modal-services"]} grid`}
                            >
                                <li
                                    className={`${st["services__modal-service"]}`}
                                >
                                    <HiOutlineCheckBadge
                                        className={`${st["services__modal-icon"]}`}
                                    />
                                    <p
                                        className={`${st["services__modal-info"]}`}
                                    >
                                        Создание уникального и современного
                                        дизайна
                                    </p>
                                </li>

                                <li
                                    className={`${st["services__modal-service"]}`}
                                >
                                    <HiOutlineCheckBadge
                                        className={`${st["services__modal-icon"]}`}
                                    />
                                    <p
                                        className={`${st["services__modal-info"]}`}
                                    >
                                        Создание макетов (Figma)
                                    </p>
                                </li>

                                <li
                                    className={`${st["services__modal-service"]}`}
                                >
                                    <HiOutlineCheckBadge
                                        className={`${st["services__modal-icon"]}`}
                                    />
                                    <p
                                        className={`${st["services__modal-info"]}`}
                                    >
                                        Создание дизайна мобильной и десктопной
                                        версии приложения
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
