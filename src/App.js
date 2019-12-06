import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/signup';
import AddTrajet from './pages/AddTrajet';
import UserPage from './pages/UserPage';
import UserService from './services/user.service';
import AdminPage from './pages/AdminPage';
import VosTrajets from './pages/VosTrajets';
import TrajetsClient from './pages/TrajetsClient';
import AdminUserModify from './pages/AdminUserModify';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      uid:'',
      userData: null, 
      isAdmin: false
    }
  }

  componentWillMount(){
    console.log("Component will mount");
  }

  async componentDidMount(){
    let response = await UserService.details(localStorage.getItem('uid'));
    if(response.ok){
        // La réponse est de type 200
        let data = await response.json();
        this.setState({
            userData : data.user
        });
        if(data.user.typeUtilisateur.designation == "Admin"){
          this.setState({
            isAdmin : true
          })
        }
        console.log(this.state)
    }
  }

  render() {
    return (
      <BrowserRouter>
      {
        this.state.userData != null ? <Header user={this.state.userData}/> : null
      }
      {
        this.state.userData != null ? <Route path="/" exact component={Home} /> : <Route path="/" exact component={Login} />
      }
        {/* <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} /> */}
        <Route path="/signup" exact component={Signup} />
        <Route path="/add-trajet" exact component={AddTrajet} />
        <Route path="/userpage" exact component={UserPage} />
        <Route path="/vos-trajets" exact component={VosTrajets} />
        <Route path="/trajets-client" exact component={TrajetsClient} />
        <Route path="/admin-user-modify/:id" exact component={AdminUserModify} />
        {
          this.state.isAdmin ? <Route path="/adminpage" exact component={AdminPage} /> : null
        }
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
