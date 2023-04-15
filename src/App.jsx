import { useState } from "react";
import TwitterFollowCard  from "./TwitterFollowCard"

function App() {

    //const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@isactes</span>

//    const isactes = { isFollowimg: false, userName: "isactes" };
//    const fidel = { isFollowimg: false, userName: "fidel" };
//    const wallas = { isFollowimg: false, userName: "wallas" };
//    const aurora = { isFollowimg: false, userName: "aurora" };
    const [isname, setIsNama] = useState("isactes");

    return(
        <div className="App">

        <TwitterFollowCard  userName={isname}>
            Isac 
        </TwitterFollowCard>

        <TwitterFollowCard  userName="fidel">
            Fidel 
        </TwitterFollowCard>

        <TwitterFollowCard  userName="wallas">
            wallas 
        </TwitterFollowCard>


        <TwitterFollowCard  userName="Auroramusic">
            Aurora 
        </TwitterFollowCard>

        <button onClick={() => setIsNama("fidelruedas")}>
            Change Name
        </button>

        </div>
    )
}

export  default App;