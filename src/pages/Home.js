import React, {Component} from 'react';
import Trajet from '../components/Trajet';
import logo from '../logo-brascar.png';
import TrajetService from '../services/trajet.service';


class Home extends Component{
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
        let response = await TrajetService.list();
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
        e.preventDefault();
        console.log(id);
        let body = {
            demande: true,
            idBras: localStorage.getItem('uid')
        }
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
                        </tr>
                    </thead>
                    <tbody>
                { this.state.trajets != null ? this.state.trajets.map((item, index )=> {
                            return (
                                <Trajet key={index} data={item} clck={this.onDemand}/>
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

export default Home;