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
            msgSuccess:'',
            user:{}
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
        let response = await UserService.update(this.props.match.params.id, body);
        if(response.ok){
            this.setState({
                success: true,
                msgSuccess: "Le profil a été mis à jour."
            })
        }
        window.location.replace('/adminpage');
    }


    async componentDidMount(){
        let response = await UserService.details(this.props.match.params.id);
        if(response.ok){
            let data = await response.json();
            console.log(data.user)
            this.setState({
                user: data.user,
                rang: data.user.typeUtilisateur.designation
            })
        }
        console.log(this.state.rang )
    }

    render(){
        return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                   <div className="fadeIn first">
                        <img src={Logo} id="icon" alt="User Icon" />
                        <h4 className="margin"> Modifier le profil</h4>
                    </div>
                    <form onSubmit={(e) => this.submit(e)}>
                        <input type="text" id="email" className="fadeIn second" name="email" placeholder={this.state.user.email} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" id="nom" className="fadeIn third" name="nom" placeholder={this.state.user.nom} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" id="prenom" className="fadeIn third" name="prenom" placeholder={this.state.user.prenom} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" id="password" className="form-control" name="password" placeholder={this.state.user.password} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" id="designation" className="form-control" name="designation" placeholder={this.state.rang} onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" className="fadeIn fourth" value="Valider"/>
                    </form> 

                    {
                        this.state.success ? <p style={{color: 'green', fontWeight: 'bold'}}>{this.state.msgSuccess}</p> : null
                    }
            </div>
            </div>
        )
    }
}

export default UserPageModifyComponent;

