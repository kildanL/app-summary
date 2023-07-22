import React from "react";
import st from "./Main.module.scss";

export default function Data() {
    return (
        <div className={`${st.home__data}`}>
            <h1 className={`${st.home__title}`}>Кутлеев Расим 🖐️</h1>
            <h3 className={`${st.home__subtitle}`}>Фронтенд-разработчик</h3>
            <p className={`${st.home__description}`}>
                Занимаюсь разработкой приложений на фреймворке React.
            </p>
        </div>
    );
}
