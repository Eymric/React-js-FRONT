import React, { Component } from 'react';
import '../css/Login.css';
import Logo from '../img/logo-brascar.png';
import Trajet from '../services/trajet.service';
import '../css/AddTrajet.css';


class AddTrajet extends Component{
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
                nbMeubles: this.state.nbMeubles,
                poids: this.state.poids,
                prix: this.state.prix,
                dateReservation: this.state.dateReservation,
                adresseDepart: this.state.adresseDepart,
                adresseArrivee: this.state.adresseArrivee,
                description: this.state.description,
                idClient: localStorage.getItem('uid')
            };
            let response = await Trajet.create(body);
            if(response.ok){
                this.setState({
                    success: true,
                    msgSuccess: "Votre trajet a bien été émis."
                })
            }
        }

        

    render(){
        return(
                <div className="wrapper fadeInDown">
                   <div id="formContent">


                        <div className="fadeIn first">
                            <img src={Logo} id="icon" alt="User Icon" />
                            <h3> Demande d'enlèvement</h3>
                        </div>

                        

                         <form onSubmit={(e) => this.submit(e)}>
                            <input type="number" id="nbMeubles" className="fadeIn second" required id="nbMeubles" name="nbMeubles" placeholder="Nombre de meubles" onChange={(e) => this.handleChange(e)}/>
                            <input type="number" id="poids" className="fadeIn second" required id="poids" name="poids" placeholder="Poids" onChange={(e) => this.handleChange(e)}/>
                            <input type="number" id="prix" className="fadeIn second" required id="prix" name="prix" placeholder="Prix" onChange={(e) => this.handleChange(e)}/>
                           {/* <div className='form-group'> */}
                            <input type="date" id="dateReservation" className="form-control" required id="dateReservation" name="Date de réservation" placeholder="date de reservation" onChange={(e) => this.handleChange(e)}/>
                            {/* </div> */}
                            <input type="text" id="adresseDepart" className="fadeIn second" required id="adresseDepart" name="Adresse de depart" placeholder="adresse de depart" onChange={(e) => this.handleChange(e)}/>
                            <input type="text" id="adresseArrivee" className="fadeIn third" name="adresseArrivee" placeholder="Adresse d'arrivée" onChange={(e) => this.handleChange(e)}/>
                            <input type="text" id="description" className="fadeIn third" name="description" placeholder="Commentaires" onChange={(e) => this.handleChange(e)}/>
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

export default AddTrajet;

