import React, {Component} from 'react';
import Trajet from './Trajet';
import logo from '../logo-brascar.png';
import UserService from '../services/user.service';
import AdminUsersList from '../components/AdminUsersList';


class AdminUsersComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            edit:false
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
            console.log(data)
            this.setState({
                users : data.users,
                idUser:null
            });
      }
    }

    // onDemand = (id) => {
    //     this.setState({
    //         edit:true,
    //         idUser: id
    //     })
    //     console.log(this.stateidUser)
    // }


    render(){
        return(
            <div className="container">
                <div className="table-responsive">
                                <table className="table">
                    <thead className="thead-white">
                        <tr>
                            <th scope="col"> Nom </th>
                            <th scope="col"> Prenom </th>
                            <th scope="col"> Email </th>
                            <th scope="col"> Rang </th>
                        </tr>
                    </thead>
                    <tbody>
                { this.state.users != null ? this.state.users.map((item, index )=> {
                            return (
                                <AdminUsersList key={index} data={item} clck={this.onDemand}/>
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

export default AdminUsersComponent;