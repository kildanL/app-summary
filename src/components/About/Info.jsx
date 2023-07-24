import React from "react";
import st from "./About.module.scss";
import { FiAward } from "react-icons/fi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";

export default function Info() {
    return (
        <div className={`${st.about__info} grid`}>
            <div className={`${st.about__box}`}>
                <FiAward className={`${st.about__icon}`} />
                <h3 className={`${st.about__title}`}>Опыт</h3>
                <span className={`${st.about__subtitle}`}>1 год</span>
            </div>

            <div className={`${st.about__box}`}>
                <BiBriefcaseAlt2 className={`${st.about__icon}`} />
                <h3 className={`${st.about__title}`}>Портфолио</h3>
                <span className={`${st.about__subtitle}`}>2 проекта</span>
            </div>

            <div className={`${st.about__box}`}>
                <HiOutlineStatusOnline className={`${st.about__icon}`} />
                <h3 className={`${st.about__title}`}>Онлайн</h3>
                <span className={`${st.about__subtitle}`}>24/7</span>
            </div>
        </div>
    );
}
