import TwitterFollowCard  from "./TwitterFollowCard"

function App() {

    //const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@isactes</span>
    return(
        <div className="App">

        <TwitterFollowCard 
        isFollowimg 
        userName="isactes" >
            Isac 
        </TwitterFollowCard>

        <TwitterFollowCard  
        isFollowimg={false} 
        userName="adasd" >
            Fidel 
        </TwitterFollowCard>

        <TwitterFollowCard  
        isFollowimg 
        userName="salazar" 
        name="isac" >
            wallas 
        </TwitterFollowCard>


        <TwitterFollowCard  
        isFollowimg={false} 
        userName="noelly" 
        name="isac" >
            Aurora 
        </TwitterFollowCard>


        </div>
    )
}

export  default App;