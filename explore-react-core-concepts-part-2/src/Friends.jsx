import { useEffect, useState } from 'react'
import './Friends.css'
export default function Friends(){
    const [friends,setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.jaon())
        .then(data => setFriends(data))
    },[])

    return(
        <div className='box'>
            {
                friends.map(friend => <Friend></Friend>)
            }
            <h3>Friends {friends}</h3>
        </div>
    )
} 