import React, { Component } from 'react';
import axios from 'axios';
//import Dashboard from "./components/DashboardComponent";

export default class SignUpPage extends Component {
    constructor(){
        super()
        //Create Properties
        this.state = {
            fullname:'',
            username:'',
            email:'',
            password:''
        }
        //binds 'this' to connect with the methods and the constructor
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //Set State when full name is changed  
    changeFullName(event){
        this.setState({
            fullname:event.target.value
        })
    }
    //Set State when username is changed  
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    //Set State when email is changed      
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    //Set State when password is changed    
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
   //When user clicks submit, this function will be called 
    onSubmit(event){
        event.preventDefault()
        //Declare new data from the form 
        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password:this.state.password
        }
        //Send data to the Mongo Database
        axios.post('https://murmuring-sands-45502.herokuapp.com/users/signup', registered)
            .then(response => console.log(response.data))
        //Direct user back to the dashboard        
        window.location ="/dashboard";
    }

    //Render form
    render() {
        return(

                <div>
                    <h3>Welcome to the profile builder!</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Fullname: </label>
                            <input type = "text" 
                            required
                            onChange={this.changeFullName}
                            value={this.state.fullname}
                            className='form-control'
                            />
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input type='text'
                            required
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control'
                        />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input type='text'
                            required
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control'
                            />
                        </div>
                        <div className="form-group">
                            <label>Password </label>
                            <input type='password'
                            required
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control'
                            />
                        </div>
                        
                        <input type='submit' className= 'btn btn-success btn-black' value='Submit'
                        />
                    </form>
                </div>      



        )
    }
}