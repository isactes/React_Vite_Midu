import "./App.css"

function TwitterFollowCard({ formattedUserName, userName, name, isFollowimg }) {

    //const srcImg = `https://unavatar.io/telegram/${userName}`
    //const addAt = (userName) => `@${userName}`
    //Componentes crean elementos y los elemntos son los que renderiza React
    //Componente funcion que devuelve un elemento y React redenriza el elemento
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-hedaer">
                <img
                className="tw-followCard-img" 
                src={`https://unavatar.io/telegram/${userName}`}  alt="Avatar"/>
                <div className="tw-followCard-infoUser">
                    <strong>{name}</strong>
                    <span className="tw-followCard-useName">
                        {formattedUserName}
                    </span>
                </div>
            </header>
            <aside className="tw-followCard-aside">
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard;