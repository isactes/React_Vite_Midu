import "./App.css"

function TwitterFollowCard({ formatUserName, userName, name, isFollowimg }) {

    //const srcImg = `https://unavatar.io/telegram/${userName}`
    //const addAt = (userName) => `@${userName}`
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-hedaer">
                <img
                className="tw-followCard-img" 
                src={`https://unavatar.io/telegram/${userName}`}  alt="Avatar"/>
                <div className="tw-followCard-infoUser">
                    <strong>{name}</strong>
                    <span className="tw-followCard-useName">{formatUserName(userName)}</span>
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