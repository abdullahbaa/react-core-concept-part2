import { useEffect, useState } from "react"

export default function onlyFriend(friend){
    const [myFriend,setMyFriend] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setMyFriend(data))
    })
    return(
        <div>
            <h3>Hello Friend{myFriend} </h3>
        </div>
    )
}

/**
 * 1- State to hold data
 * 2- use effects od dependency data
 * 3-use fetch to load data
 * 4-set loaded data to the state
 * 5- display data on the components
 */