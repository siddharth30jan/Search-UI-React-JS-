import React, {Component}from 'react'
import Cardlist from './Cardlist'
import {robots} from './robots'
import Searchbox from './Searchbox'


class App extends Component{

    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

    onchange=(event)=>{
       // console.log(event.target.value)
       this.setState({searchfield : event.target.value})
      
    }

    render(){
        let filtered_search=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().startsWith(this.state.searchfield.toLowerCase())
        })
        return(
        <div className='tc'>
        <h1 >Robofriends</h1>
         <Searchbox onchange={this.onchange}/>
        <Cardlist robots={filtered_search}/>
         </div>
        )
    }
}

export default App