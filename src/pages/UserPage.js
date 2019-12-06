import React, {Component} from 'react';
import Logo from '../img/logo-brascar.png';
import '../css/Login.css';
import UserPageComponent from '../components/UserPage.component';
import UserPageModify from '../components/UserPageModify';
import '../css/UserPage.css';
import UserService from '../services/user.service';

class UserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            trajets: [],
            edit:false,
            user:null
        }
    }

    componentWillMount(){
        console.log("Je suis la");
      }
    
      async componentDidMount(){
        let response = await UserService.details(localStorage.getItem('uid'));
        if(response.ok){
            // La réponse est de type 200
            let data = await response.json();
            this.setState({
                 user : data.user
            });
            console.log(this.state.user)
    }
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
                    {
                        this.state.user != null ? this.state.edit ? <UserPageModify user={this.state.user}/> : <UserPageComponent user={this.state.user} btn={this.modify}/>  : null
                    }
                {/* {(this.state.edit) ? null  :   }
                {(!this.state.edit) ? <div className="button"><button onClick={this.modify}> Modifier </button> </div> : null } */}
                </div>
            </div>
        )
    }
}

export default UserPage;

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