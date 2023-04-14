import TwitterFollowCard  from "./TwitterFollowCard"

function App() {

    //const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@isactes</span>

    const isactes = { isFollowimg: false, userName: "isactes" };
    const fidel = { isFollowimg: false, userName: "fidel" };
    const wallas = { isFollowimg: false, userName: "wallas" };
    const aurora = { isFollowimg: false, userName: "aurora" };


    return(
        <div className="App">

        <TwitterFollowCard {...isactes}>
            Isac 
        </TwitterFollowCard>

        <TwitterFollowCard {...fidel}>
            Fidel 
        </TwitterFollowCard>

        <TwitterFollowCard {...wallas}>
            wallas 
        </TwitterFollowCard>


        <TwitterFollowCard {...aurora}>
            Aurora 
        </TwitterFollowCard>


        </div>
    )
}

export  default App;