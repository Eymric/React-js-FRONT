import React, {Component} from 'react';
import User from '../components/User';
import UserService from '../services/user.service';

class ListUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "BrasBrasCar",
            users: []
        }
    }

    componentWillMount(){
        console.log("Je suis la");
      }
    
      async componentDidMount(){
        let response = await UserService.list();
        if(response.ok){
            // La réponse est de type 200
            let data = await response.json();
            console.log(data);
            this.setState({
                title: "Liste des utilisateurs",
                users : data.users
            });
        }
      }


    render(){
        return(
            <div className="container">
                <h1 style={{fontSize: 40, backgroundColor: "#037696", fontFamily: 'Palatino' }}>{this.state.title} </h1>
                {
                        this.state.users.map((item, index )=> {
                            return (
                                <User key={index} data={item}/>
                            )
                        })
                    }
            </div>
        )
    }
}

export default ListUsers;