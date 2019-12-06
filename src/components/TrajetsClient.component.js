import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { tsTypeQuery } from '@babel/types';
import TrajetService from '../services/trajet.service';


class TrajetComponent extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props)
    }

    async onDemand(e, id){
    }

    render(){
        return(
            <tr>

                            <td>{this.props.data.idClient.nom} {this.props.data.idClient.prenom} 
                            </td>  
                            <td>{this.props.data.nbMeubles}</td>
                            <td> {this.props.data.poids} kg </td>
                            <td> {this.props.data.prix} €</td>
                            <td> {this.props.data.dateReservation} </td>
                            <td> {this.props.data.adresseDepart} </td>
                            <td> {this.props.data.adresseArrivee} </td>
                            <td> {this.props.data.description} </td>
                            <td> {this.props.data.demande ? 'Oui': 'Non'} </td>
                            <td> {this.props.data.valide ? 'Oui' : 'Non'} </td>
                    </tr>
        )
    }
}

export default TrajetComponent;

