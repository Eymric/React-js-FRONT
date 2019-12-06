import React, {Component} from 'react';
import Logo from '../img/logo-brascar.png';
import '../css/Login.css';
import '../css/UserPage.css';
import '../css/VosTrajets.css';
import TrajetService from '../services/trajet.service';

class VosTrajets extends Component{
    constructor(props){
        super(props);
        this.state = {
            trajetsAttente: [],
            trajets:[]
        }
    }

    async componentWillMount(){
        console.log("Je suis la");
        let response = await TrajetService.trajetsEnAttente('5dea6434f0db0c36e2626b61');
        if(response.ok){
            // La réponse est de type 200
            let data = await response.json();
            console.log(data.trajets)
            // console.log(data)
            this.setState({
                trajetsEnAttente : data.trajets
            });
      }
    }
    
      async componentDidMount(){

      }

    modify = () => {
        this.setState({
            edit:true
        });
    }


    render(){
        return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <div className="fadeIn first">
                    <img src={Logo} id="icon" alt="User Icon" />
                    <h4 className=""> Vos trajets en attente de validation</h4>
                </div>

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
                {/* { this.state.trajets != null ? this.state.trajets.map((item, index )=> {
                            return (
                                <Trajet key={index} data={item}/>
                            )
                        }): null  
                } */}
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        )
    }
}

export default VosTrajets;

// React.createClass({ 
//     getInitialState : function() {
//        return { showMe : false };
//     },
//     onClick : function() {
//        this.setState({ showMe : true} );
//     },
//     render : function() {
//         if(this.state.showMe) { 
//             return (<div> one div </div>);
//         } else { 
//             return (<a onClick={this.onClick}> press me </a>);
//         } 
//     }
// })