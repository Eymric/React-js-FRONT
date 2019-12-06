import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom';

class AdminUsersList extends Component{
    constructor(props){
        super(props);
        this.state ={
            redirect:false,
            userId:null
        }
    }

    componentDidMount(){
        console.log(this.props.data._id)
    }


    render(){
        return(
            <tr>
                            <td>{this.props.data.nom}</td>
                            <td> {this.props.data.prenom} </td>
                            <td>  {this.props.data.email} </td>
                            <td>  {this.props.data.typeUtilisateur.designation}</td>
                            {
                                localStorage.getItem('rang') == 'Admin' ? <td><Link to={{pathname: `admin-user-modify/${this.props.data._id}`}}> Modifier</Link>  </td> : null
                            } 
                    </tr>
        )
    }
}

export default AdminUsersList;

