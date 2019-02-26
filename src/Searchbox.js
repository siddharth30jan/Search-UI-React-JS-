import React from 'react'

const Searchbox=({onchange})=>{
    return(
        <div className="tc">
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
            <input type="search" placeholder="SEARCH!" onChange={onchange}/>
            </div>
        </div>
        
    )
}
export default Searchbox