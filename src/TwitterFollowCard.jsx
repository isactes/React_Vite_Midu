import "./App.css"

function TwitterFollowCard({ userName, name, isFollowimg }) {

    console.log("isfollowing", isFollowimg)

    //const srcImg = `https://unavatar.io/telegram/${userName}`
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-hedaer">
                <img
                className="tw-followCard-img" 
                src={`https://unavatar.io/telegram/${userName}`}  alt="Avatar"/>
                <div className="tw-followCard-infoUser">
                    <strong>Isac Renovato</strong>
                    <span className="tw-followCard-useName">@{userName}</span>
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