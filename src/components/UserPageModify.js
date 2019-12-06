import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo-brascar.png';
import '../css/Login.css';
import UserService from '../services/user.service';


class UserPageModifyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            success:false,
            msgSuccess:''
        }
    }

    //change state
    handleChange(e){
        this.setState({
            [e.target.id] : e.target.value,
            success: false
        })
    }

    async submit(e){
        e.preventDefault();
        let body = {
            email: this.state.email,
            nom: this.state.nom,
            prenom: this.state.prenom,
            password: this.state.password
        };
        let response = await UserService.update(this.props.user._id, body);
        if(response.ok){
            this.setState({
                success: true,
                msgSuccess: "Votre profil a été mis à jour."
            })
        }
        window.location.replace('/userpage');
    }


    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
<div>
                    <div className="fadeIn first">
                        <img src={Logo} id="icon" alt="User Icon" />
                        <h4 className="margin"> Modifier le profil</h4>
                    </div>
                    <form onSubmit={(e) => this.submit(e)}>
                        <input type="text" id="email" className="fadeIn second" name="email" placeholder={this.props.user.email} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" id="nom" className="fadeIn third" name="nom" placeholder={this.props.user.nom} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" id="prenom" className="fadeIn third" name="prenom" placeholder={this.props.user.prenom} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" id="password" className="form-control" name="password" placeholder={this.props.user.password} onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" className="fadeIn fourth" value="Valider"/>
                    </form> 

                    {
                        this.state.success ? <p style={{color: 'green', fontWeight: 'bold'}}>{this.state.msgSuccess}</p> : null
                    }
            </div>
        )
    }
}

export default UserPageModifyComponent;

