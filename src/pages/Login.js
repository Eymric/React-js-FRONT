import React, { Component } from 'react';
import '../css/Login.css';
import Logo from '../img/logo-brascar.png';
import UserService from '../services/user.service';
import {Link} from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            Success: false,
            msgSuccess: '',
            msgFalse: '',
            pw:''
        }
    }
    // change state

        handleChange(e){
            this.setState({
                [e.target.id] : e.target.value,
                success: false,
                pw: false
            })
            console.log(this.Success)
        }

        async submit(e){
            e.preventDefault();
            let body = {
                email: this.state.email,
                password: this.state.password
            };
            let response = await UserService.auth(body);
            let data = await response.json();
            if(data.user){
                this.setState({
                    success: true,
                    msgSuccess: "Connecté",
                    pw: false,
                    user: data.user
                })
                window.location.replace('/');
                localStorage.setItem('email', data.user.email);
                localStorage.setItem('uid', data.user._id );
                localStorage.setItem('nom', data.user.nom );
                localStorage.setItem('prenom', data.user.prenom);
                localStorage.setItem('password', data.user.password);
                localStorage.setItem('rang', data.user.typeUtilisateur.designation)
            }else{
                this.setState({
                    pw: true,
                    msgFalse: "Mot de passe incorrect"
                })
            }
        }

    render(){
        return(
                <div className="wrapper fadeInDown">
                    <div id="formContent">


                        <div className="fadeIn first">
                            <img src={Logo} id="icon" alt="User Icon" />
                        </div>

                        <form onSubmit={(e) => this.submit(e)}>
                            <input type="text" id="email" className="fadeIn second" required id="email" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)}/>
                            <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" onChange={(e) => this.handleChange(e)}/>
                            <input type="submit" className="fadeIn fourth" value="Log In"/>
                        </form>

                        <div id="formFooter">
                        <a className="underlineHover" href="#">Mot de passe oublié?</a>
                        <Link to={'/signup'}> <a className="underlineHover" href=''>Vous n'avez pas de compte? Inscrivez-vous</a></Link>
                        </div>
                        
                        {
                            this.state.success ? <p style={{color: 'green', fontWeight: 'bold'}}>{this.state.msgSuccess}</p> : null
                        }     
                        {
                            this.state.pw ?  <p style={{color: 'red', fontWeight: 'bold'}}>{this.state.msgFalse}</p> : null
                        }       
                    </div>
                </div>
        )
    }
}

export default Login;

