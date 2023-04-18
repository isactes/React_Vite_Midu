import { useState } from "react";
import TwitterFollowCard  from "./TwitterFollowCard"

function App() {

//const format = (userName) => `@${userName}`
//const formattedUserName = <span>@isactes</span>
//const isactes = { isFollowimg: false, userName: "isactes" };
//const fidel = { isFollowimg: false, userName: "fidel" };
//const wallas = { isFollowimg: false, userName: "wallas" };
//const aurora = { isFollowimg: false, userName: "aurora" };
//const [isname, setIsNama] = useState("isactes");
//const [isFolloeing, setIsFollowing] = useState(false)
  //error nunca inicializa un stado para que se puede cambiar desde el padre, si el hijo esta con un estado inical se quea fijo ya que no podemos cambiar el estado al padre si el hijo esta inicializado el estado

  const users = [
    {
        userName: "isactes",
        name:"isac",
        isFollowing: false
    },
    {
        userName: "fideless",
        name:"fidel",
        isFollowing: true
    },
    {
        userName: "esmemon",
        name:"esme",
        isFollowing: false
    },
    {
        userName: "chiossa",
        name:"chio",
        isFollowing: true
    },
    {
        userName: "wallas",
        name:"wallas",
        isFollowing: false
    },
    {
        userName: "auroramusic",
        name:"aurora",
        isFollowing: true
    },
  ]

    return(
        <div className="App">
        {/*poner comentarios */}
        {/*una manera de maperar y renderizar */}
        {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return(
                    <TwitterFollowCard
                    userName={userName}
                    initialIsItFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }

        </div>
    )
}

export  default App;