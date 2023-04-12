import TwitterFollowCard  from "./TwitterFollowCard"

function App() {

    const format = (userName) => `@${userName}`

    return(
        <div className="App">

        <TwitterFollowCard 
        formatUserName={format}
        isFollowimg 
        userName="isactes"
        name="isac" />

        <TwitterFollowCard 
        formatUserName={format} 
        isFollowimg={false} 
        userName="adasd" 
        name="isac" />

        <TwitterFollowCard 
        formatUserName={format} 
        isFollowimg 
        userName="salazar" 
        name="isac" />
        <TwitterFollowCard 
        formatUserName={format} 
        isFollowimg={false} 
        userName="noelly" 
        name="isac" />
        </div>
    )
}

export  default App;