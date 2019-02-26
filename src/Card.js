import React from 'react';


let Card=({key,data})=>{
    console.log(data)
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
            <img alt="robots" src='https://robohash.org/+ ${X} +?200*200'/>
            <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            </div>

        </div>

    )
}
export default Card