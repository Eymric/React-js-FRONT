import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo-brascar.png';
import '../css/UserPage.css';


class UserPageComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            edit: false
        }
    }

    componentDidMount(){
        console.log('ok')
        console.log(this.props)
    }


    modify = () => {
        this.setState({
            edit: true
        })
    }

    render(){
        return(
            <div>
                <div className="fadeIn first">
                    <img src={Logo} id="icon" alt="User Icon" />
                    <h4 className="margin"> Page de profil</h4>
                </div>
                <div className="span"><span className="span-title"> Email :</span><span className="span-field"> {this.props.user.email}</span></div>
                <div className="span"><span className="span-title"> Nom :</span><span className="span-field"> {this.props.user.nom}</span></div>
                <div className="span"><span className="span-title"> Prenom :</span><span className="span-field"> {this.props.user.prenom}</span></div>
                <div className="span"><span className="span-title"> Password :</span><span className="span-field"> {this.props.user.password}</span></div>
                <div className="button"><button name="btn" onClick={this.props.btn}> Modifier </button> </div>
             </div>
        )
    }
}

export default UserPageComponent;

