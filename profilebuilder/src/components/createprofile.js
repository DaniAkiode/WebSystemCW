import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProfile extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeHobbies = this.onChangeHobbies.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            name: "",
            age: 0,
            city: "",
            hobbies:"",
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e){
        this.setState({
            age: e.target.value
        });
    }
    onChangeCity(e){
        this.setState({
            city: e.target.value
        });
    }

    onChangeHobbies(e){
        this.setState({
            hobbies: e.target.value 
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const profile = {
            name: this.state.name,
            age: this.state.age,
            city: this.state.city,
            hobbies: this.state.hobbies
        }

        console.log(profile);

        axios.post('http://localhost:5000/api/add', profile)
        .then(res => console.log(res.data))

        window.location = "/";
    }


    render() {
        return (
            <div>
                <h3>Create Profile</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                            />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                            />
                    </div>
                    <div className="form-group">
                        <label>Hobbies: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.hobbies}
                            onChange={this.onChangeHobbies}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Profile" className="btn btn-primary" />
                    </div>

                </form>
                
            </div>
        )
    }
}