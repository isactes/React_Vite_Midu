import TwitterFollowCard  from "./TwitterFollowCard"

function App() {

    //const format = (userName) => `@${userName}`
    const formattedUserName = <span>@isactes</span>
    return(
        <div className="App">

        <TwitterFollowCard 
        formattedUserName={formattedUserName}
        isFollowimg 
        userName="isactes"
        name="isac" />

        <TwitterFollowCard 
        formattedUserName={formattedUserName} 
        isFollowimg={false} 
        userName="adasd" 
        name="isac" />

        <TwitterFollowCard 
        formattedUserName={formattedUserName} 
        isFollowimg 
        userName="salazar" 
        name="isac" />
        <TwitterFollowCard 
        formattedUserName={formattedUserName} 
        isFollowimg={false} 
        userName="noelly" 
        name="isac" />
        </div>
    )
}

export  default App;