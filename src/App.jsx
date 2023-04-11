import TwitterFollowCard  from "./TwitterFollowCard"

function App() {
    return(
        <div className="App">
        <TwitterFollowCard isFollowimg userName="isactes" name="isac" />
        <TwitterFollowCard isFollowimg={false} userName="adasd" name="isac" />
        <TwitterFollowCard isFollowimg userName="isactesdasdas" name="isac" />
        <TwitterFollowCard isFollowimg={false} userName="isactesdadsa" name="isac" />
        </div>
    )
}

export  default App;