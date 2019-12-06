import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo-brascar.png';
import '../css/UserPage.css';


class AdminPageComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            edit: false
        }
    }

    componentDidMount(){
    }


    modify = () => {
        this.setState({
            edit: true
        })
    }

    render(){
        return(
            <div>
                <div className="fadeIn first">
                    <img src={Logo} id="icon" alt="User Icon" />
                    <h4 className="margin"> Menu Admin</h4>
                </div>
                <div className="span" onClick={this.props.btn}><Link to={'#'}> <span className="span-title"> Liste des utilisateurs</span></Link></div>
                <div className="span"onClick={this.props.trj}><Link to={'#'}> <span className="span-title"> Liste des trajets</span></Link></div>
                <div className="span"><Link to={'#'}> <span className="span-title"> Liste des utilisateurs</span></Link></div>
             </div>
        )
    }
}

export default AdminPageComponent;

