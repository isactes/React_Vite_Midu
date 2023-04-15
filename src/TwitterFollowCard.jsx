import { useState } from "react"

import "./App.css"


function TwitterFollowCard({ children, userName }) {

    //const srcImg = `https://unavatar.io/telegram/${userName}`
    //const addAt = (userName) => `@${userName}`
    //Componentes crean elementos y los elemntos son los que renderiza React
    //Componente funcion que devuelve un elemento y React redenriza el elemento
    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing 
    ? "Siguiendo" 
    : "Seguir"
    const buttonClassName = isFollowing 
    ? "tw-followCard-button is-folowing" 
    : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


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
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard;