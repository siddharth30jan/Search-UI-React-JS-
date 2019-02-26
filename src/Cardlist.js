import React from 'react';
import Card from './Card'


let Cardlist=({robots})=>{


    const nayi_cheez=robots.map((user,i)=>{
           return <Card key={i} data={robots[i]}/>
        })

    
    return(
        <div>
            {nayi_cheez}
        </div>
    )
}
    

export default Cardlist