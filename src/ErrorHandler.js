import React from 'react'
import ReactDom from 'react-dom'

class ErrorHandler extends React.Component{
    constructor(){
        super()
        this.state={
            isError: false
        }
    }

    componentDidCatch(err,info){
        this.setState({isError: true})
    }

    render(){
        if(this.state.isError){
            return(<div>
                <h1>Opssssss! Error</h1>
            </div>)
        }else{
            return(
                <div>
                    {this.props.children}
                </div>
            )
        }
    }
}

export default ErrorHandler