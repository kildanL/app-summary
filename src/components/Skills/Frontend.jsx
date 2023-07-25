import React from "react";
import st from "./Skills.module.scss";
import { HiCheckBadge } from "react-icons/hi2";

export default function Frontend() {
    return (
        <div className={`${st.skills__content}`}>
            <h3 className={`${st.skills__title}`}>Фронтенд-разработчик</h3>

            <div className={`${st.skills__box}`}>
                <div className={`${st.skills__group}`}>
                    <div className={`${st.skills__data}`}>
                        <HiCheckBadge className="badge" />

                        <h3 className={`${st.skills__name}`}>HTML</h3>
                    </div>

                    <div className={`${st.skills__data}`}>
                        <HiCheckBadge className="badge" />

                        <h3 className={`${st.skills__name}`}>SCSS</h3>
                    </div>

                    <div className={`${st.skills__data}`}>
                        <HiCheckBadge className="badge" />

                        <h3 className={`${st.skills__name}`}>TypeScript</h3>
                    </div>

                    <div className={`${st.skills__data}`}>
                        <HiCheckBadge className="badge" />

                        <h3 className={`${st.skills__name}`}>AntDesign</h3>
                    </div>

                    <div className={`${st.skills__data}`}>
                        <HiCheckBadge className="badge" />

                        <h3 className={`${st.skills__name}`}>React</h3>
                    </div>

                    <div className={`${st.skills__data}`}>
                        <HiCheckBadge className="badge" />

                        <h3 className={`${st.skills__name}`}>Redux</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
