import React, {Component} from 'react';
import Logo from '../img/logo-brascar.png';
import '../css/Login.css';

import '../css/UserPage.css';
import UserService from '../services/user.service';
import AdminPageComponent from '../components/AdminPage.component';
import AdminUsersComponent from '../components/AdminUsersComponent';
import TrajetComponent from '../components/TrajetsClient.component';
import TrajetsClient from './TrajetsClient';

class AdminPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            trj:false
        }
    }

    componentWillMount(){
        console.log("Je suis la");
      }
    
      async componentDidMount(){
}

    modify = () => {
        this.setState({
            edit:true
        })
    }

    trajets = () => {
        this.setState({
            trj:true
        })
    }

    render(){
        return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                   {
                   this.state.edit ? <AdminUsersComponent/> : this.state.trj ? <TrajetsClient/> : <AdminPageComponent trj={this.trajets} btn={this.modify}/>
                    
                   }
                </div>
            </div>
        )
    }
}

export default AdminPage;