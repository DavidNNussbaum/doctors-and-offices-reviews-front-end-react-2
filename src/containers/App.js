import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Doctors from '../components/Doctors'
import Doctor from '../components/Doctor'
import Navbar from "../components/Navbar"
import Home from '../components/Home'
import ErrorPage from '../components/ErrorPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import ReviewsList from '../components/Reviews'
// import UsersList from '../components/Users'
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
   doctorsList: []
  };
  componentDidMount() {
    return (
      fetch('http://localhost:3000/doctors')
      .then(resp => resp.json())
      .then(json => {
        const doctors = json.data.map(doctor => doctor.attributes)
        // json.data.forEach(docObj => {
        //   doctors.push({name: docObj.attributes.name, firstName: docObj.attributes.first_name, lastName: docObj.attributes.last_name, address: docObj.attributes.address, id: docObj.id} ) 
        // })

        this.setState({
          doctorsList: doctors
        })
      })
      .catch(err => console.error(err))
    )}
       
    
  
  render() {
  return (
    <>
     
    <div className="navbar">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/doctors" render={(props) => <Doctors doctorsList={this.state.doctorsList} reviewsList={this.state.reviewsList} routeProps={props} /> }/>
        <Route path="/doctors/:doctorId" render={(props) => {
               const doctor = this.state.doctorsList.find((doc) => String(doc.id) === props.match.params.doctorId)
        return !!doctor ? <Doctor {...doctor} /> : <ErrorPage /> } }/>
      
        {/* <Route path="/logon" component={Logon}/> 
        <Route path="/signup" component={Signup}/>
        <Route path="/logoff" component={Logoff}/> */}
      </Switch>
    </Router>
  </div>
  </>
  );
}
}

export default App;
