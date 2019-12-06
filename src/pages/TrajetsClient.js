import React, {Component} from 'react';
import Trajet from '../components/Trajet';
import logo from '../logo-brascar.png';
import TrajetService from '../services/trajet.service';
import TrajetComponent from '../components/TrajetsClient.component';


class TrajetsClient extends Component{
    constructor(props){
        super(props);
        this.state = {
            trajets: [],
        }
    }

    componentWillMount(){
        console.log("Je suis la");
      }
    
      async componentDidMount(){
        let response = await TrajetService.getTrajets();
        if(response.ok){
            // La réponse est de type 200
            let data = await response.json();
            console.log(data.trajets)
            // console.log(data)
            this.setState({
                trajets : data.trajets
            });
        // console.log(this.state.trajets)
        // let response = await TrajetService.details();
        // if(response.ok){
        //     // La réponse est de type 200
        //     let data = await response.json();
        //     console.log(data)
        //     console.log('aeaz')
        //     this.setState({
        //         uid : data.trajet.idClient._id
        //     })
        //   }
    
      }
    }

    async onDemand(e, id) {
//         let response = await TrajetService.update(id, body);
//         if(response.ok){
// window.location.replace('/')
//         }
    }


    render(){
        return(
            <div className="container">
                <div className="table-responsive">
                                <table className="table">
                    <thead className="thead-white">
                        <tr>
                            <th scope="col"> Nom </th>
                            <th scope="col"> Nombre de meubles </th>
                            <th scope="col"> Poids </th>
                            <th scope="col"> Prix </th>
                            <th scope="col"> Date reservation </th>
                            <th scope="col"> Adresse de départ </th>
                            <th scope="col"> Adresse d'arrivée </th>
                            <th scope="col"> Description </th>
                            <th scope="col"> En attente de validation </th>
                            <th scope="col"> Reservée </th>
                        </tr>
                    </thead>
                    <tbody>
                { this.state.trajets != null ? this.state.trajets.map((item, index )=> {
                            return (
                                <TrajetComponent key={index} data={item} clck={this.onDemand}/>
                            )
                        }): null  
                }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default TrajetsClient;