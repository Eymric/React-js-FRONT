import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserService from '../services/user.service';
class Header extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
      console.log(this.props)
    }

  async submit(e){
    e.preventDefault();
    localStorage.clear();
    window.location.replace('/');
    };

    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'}><span style={{color: "#7874f2", fontWeight:'bold'}} className="">Bras</span><span style={{color: "#99e265", fontWeight:'bold'}} className="">Bras</span><span style={{color: "#7874f2", fontWeight:'bold'}} className="">Car</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to={'/'}>Accueil <span className="sr-only">(current)</span></Link>
              </li>
              {
                localStorage.getItem('rang') == 'Utilisateur' ? <li className="nav-item active">
                <Link className="nav-link" to={'/add-trajet'}>Demande d'enlèvement</Link>
              </li> : <li className="nav-item active">  <Link className="nav-link" to={'/vos-trajets'}>Vos trajets en cours/effectué <span className="sr-only">(current)</span></Link> </li>
              }
              
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>   
          </div>
          { this.props.user != null ? <Link to={'/userpage'}><span style={{color: "#7874f2"}}>    {this.props.user.nom} {this.props.user.prenom} </span></Link> : null }
          {this.props.user.typeUtilisateur.designation != null ? this.props.user.typeUtilisateur.designation == "Admin" ? <Link className="nav-link" to={'/adminpage'}>Espace admin</Link> : null : null }
          {
            ('email' in localStorage) ? <ul className="navbar-nav"><li className="nav-item active"> <Link id='deconnexion' className="nav-link" onClick={(e) => this.submit(e)} to ={'/'}>Déconnexion</Link> </li></ul> : <ul className="navbar-nav"><li className="nav-item active"> <Link className="nav-link" to ={'/login'}>Connexion </Link> </li> </ul>
          }


                        
        </nav>
            )
    }
}

export default Header;
