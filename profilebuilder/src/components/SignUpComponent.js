import React, { Component } from 'react';
import axios from 'axios';
//import Dashboard from "./components/DashboardComponent";

export default class SignUpPage extends Component {
    constructor(){
        super()
        this.state = {
            fullname:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullname:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:5000/users/signup', registered)
            .then(response => console.log(response.data))
        
        window.location ="/dashboard";
    }


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