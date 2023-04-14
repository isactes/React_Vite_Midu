import TwitterFollowCard  from "./TwitterFollowCard"

function App() {

    //const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@isactes</span>

//    const isactes = { isFollowimg: false, userName: "isactes" };
//    const fidel = { isFollowimg: false, userName: "fidel" };
//    const wallas = { isFollowimg: false, userName: "wallas" };
//    const aurora = { isFollowimg: false, userName: "aurora" };


    return(
        <div className="App">

        <TwitterFollowCard isFollowimg={false} userName="isactes">
            Isac 
        </TwitterFollowCard>

        <TwitterFollowCard isFollowimg userName="fidel">
            Fidel 
        </TwitterFollowCard>

        <TwitterFollowCard isFollowimg={false} userName="wallas">
            wallas 
        </TwitterFollowCard>


        <TwitterFollowCard isFollowimg userName="Auroramusic">
            Aurora 
        </TwitterFollowCard>


        </div>
    )
}

export  default App;