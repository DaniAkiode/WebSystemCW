import React, { Component } from 'react';
import axios from 'axios';

export default class EditProfile extends Component {
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

    componentDidMount(){
        axios.get('http://localhost:5000/api/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    age: response.data.age,
                    city: response.data.city,
                    hobbies: response.data.hobbies,
                })
            })
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

        axios.post('http://localhost:5000/api/update/'+this.props.match.params.id, profile)
        .then(res => console.log(res.data))

        window.location = "/";
    }


    render() {
        return (
            <div>
                <h3>Edit Profile</h3>
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
                        <input type="submit" value="Edit Profile" className="btn btn-success" />
                    </div>

                </form>
                
            </div>
        )
    }
}