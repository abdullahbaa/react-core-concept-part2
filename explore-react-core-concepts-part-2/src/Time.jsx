import { useState } from "react";

export default function Team(){
    const [players1,players2] =useState(11)

const teamStyle={
    border:'2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
}
const handleAdd = () =>{
        const newPlayers = players1 + 1;
        players2(newPlayers);
}

const handleRemove = () =>{
        const newPlayers = players1 - 1;
        players2(newPlayers);
}

    return(
        <div style={teamStyle}>
            <h1>Players: {players1}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}