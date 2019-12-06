import React, { Component } from 'react'

class User extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <div>

                    <p>{this.props.data.id}</p>
                    <p> {this.props.data.prenom} </p>
                    <p> {this.props.data.nom} </p>
                    <p> {this.props.data.email} </p>
                    </div>
        )
    }
}

export default User;

