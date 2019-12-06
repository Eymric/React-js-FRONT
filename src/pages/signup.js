import React, { Component } from 'react';
import '../css/Login.css';
import Logo from '../img/logo-brascar.png';
import UserService from '../services/user.service';


class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:{},
            Success: false,
            msgSuccess: '',
            selected: false
        }
    }
    // change state

        handleChange(e){
            this.setState({
                [e.target.id] : e.target.value,
                success: false,
            })
            console.log(this.Success)
        }

        async submit(e){
            e.preventDefault();
            let body = {
                prenom: this.state.prenom,
                nom: this.state.nom,
                email: this.state.email,
                password: this.state.password,
                typeUtilisateur: this.state.typeutilisateur
            };
            let response = await UserService.create(body);
            let data = await response.json();
            if(data){
                console.log(data);
                console.log(data.user)
                this.setState({
                    success: true,
                    msgSuccess: "Inscription effectué avec succès",
                    user: data.user
                })
                this.props.history.push('/');
            }else{
                console.log('Mot de passe incorrect?');
                this.setState({
                    pw: true,
                    msgFalse: "Mot de passe incorrect"
                })
            }
        }

        setTypeUser(event) {
            console.log(event.target.value);
          }

    render(){
        return(
                <div className="wrapper fadeInDown">
                    <div id="formContent">


                        <div className="fadeIn first">
                            <img src={Logo} id="icon" alt="User Icon" />
                        </div>

                        <form onSubmit={(e) => this.submit(e)}>
                            <input type="text" className="fadeIn second" required id="prenom" name="prenom" placeholder="Prenom" onChange={(e) => this.handleChange(e)}/>
                            <input type="text" required id="nom" className="fadeIn third" name="nom" placeholder="nom" onChange={(e) => this.handleChange(e)}/>
                            <input type="text" required id="email" className="fadeIn third" name="email" placeholder="email" onChange={(e) => this.handleChange(e)}/>
                            <input type="text" required id="password" className="fadeIn third" name="password" placeholder="password" onChange={(e) => this.handleChange(e)}/>
                            <div onChange={this.setTypeUser.bind(this)}>
                            <label style={{marginTop:30}}>
            <input type="radio" name="typeUtilisateur" value="5de962f5b0d062f1123ce211" required id="typeutilisateur" onChange={(e) => this.handleChange(e)}/>
            Professionnel
          </label><label style={{marginTop:30}}>
            <input type="radio" name="typeUtilisateur" required id="typeutilisateur" value="5de962dab0d062f1123ce1f7" onChange={(e) => this.handleChange(e)}/> Client
          </label><br></br>
          </div>
                            <input type="submit" className="fadeIn fourth" value="Inscription"/>
                        </form>

                        <div id="formFooter">
                        <a className="underlineHover" href=''>Vous avez un compte ? Connectez-vous</a>
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

export default Signup;

