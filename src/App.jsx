import TwitterFollowCard  from "./TwitterFollowCard"

function App() {

    //const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@isactes</span>
    return(
        <div className="App">

        <TwitterFollowCard 
        isFollowimg 
        userName="isactes"
        name="isac" />

        <TwitterFollowCard  
        isFollowimg={false} 
        userName="adasd" 
        name="isac" />

        <TwitterFollowCard  
        isFollowimg 
        userName="salazar" 
        name="isac" />
        <TwitterFollowCard  
        isFollowimg={false} 
        userName="noelly" 
        name="isac" />
        </div>
    )
}

export  default App;