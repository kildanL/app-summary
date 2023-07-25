import React from "react";
import st from "./Skills.module.scss";
import Frontend from "./Frontend";

export default function Skills() {
    return (
        <section className={`${st.skills} section`} id="hard-skills">
            <h2 className={`section__title`}>Hard-skills</h2>
            <span className={`section__subtitle`}>Стек технологий</span>

            <div className={`${st.skills__container} container`}>
                <Frontend />
            </div>
        </section>
    );
}
