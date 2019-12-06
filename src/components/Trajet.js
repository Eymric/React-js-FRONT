import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { tsTypeQuery } from '@babel/types';
import TrajetService from '../services/trajet.service';


class Trajet extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props)
    }

    async onDemand(e, id){
        e.preventDefault();
        console.log(id)
        let body = {
            demande: true,
            idBras: localStorage.getItem('uid')
        }
        let response = await TrajetService.update(id, body);
        if(response.ok){
window.location.replace('/')
        }
    }

    render(){
        return(
            <tr>

                            <td>{this.props.data.idClient.nom} {this.props.data.idClient.prenom} 
                            {
                                localStorage.getItem('rang') == 'Gros Bras' ? <button name="btn-reserver" onClick={(e)=> this.onDemand(e, this.props.data._id)}> Reserver </button> : null
                            } </td>  
                            <td>{this.props.data.nbMeubles}</td>
                            <td> {this.props.data.poids} kg </td>
                            <td> {this.props.data.prix} €</td>
                            <td> {this.props.data.dateReservation} </td>
                            <td> {this.props.data.adresseDepart} </td>
                            <td> {this.props.data.adresseArrivee} </td>
                            <td> {this.props.data.description} </td>
                    </tr>
        )
    }
}

export default Trajet;

