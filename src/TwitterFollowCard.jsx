import { useState } from "react"

import "./App.css"


function TwitterFollowCard({ children, userName, isFollowimg }) {

    //const srcImg = `https://unavatar.io/telegram/${userName}`
    //const addAt = (userName) => `@${userName}`
    //Componentes crean elementos y los elemntos son los que renderiza React
    //Componente funcion que devuelve un elemento y React redenriza el elemento
    const text = isFollowimg ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowimg ? "tw-followCard-button is-folowing" : "tw-followCard-button"

    


    return (
        <article className="tw-followCard">
            <header className="tw-followCard-hedaer">
                <img
                className="tw-followCard-img" 
                src={`https://unavatar.io/telegram/${userName}`}  alt="Avatar"/>
                <div className="tw-followCard-infoUser">
                    <strong>{children}</strong>
                    <span className="tw-followCard-useName">
                        @{userName}
                    </span>
                </div>
            </header>
            <aside className="tw-followCard-aside">
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard;