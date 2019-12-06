import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/Footer.css';
import Logo from '../img/logo-brascar.png';

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
<footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> A propos de l'entreprise </span> BrasBrasCar est née en 2018 à l’initiative de deux jeune étudiants, Lévy ZIRE et Eymric GATIBELZA. L’idée de monter cette organisation leur est venu dans le cadre d’un projet scolaire.
    </p>
    <div className="icons">
      <a href="#"><i className="fa fa-facebook"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
      <a href="#"><i className="fa fa-google-plus"></i></a>
      <a href="#"><i className="fa fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Rue de la madone</span> Paris, France</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+33) 1234567890</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#"> brasbrascar@mail.com</a></p>
    </div>
  </div>

</footer>

            )
    }
}

export default Footer;
