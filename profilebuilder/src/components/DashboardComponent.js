import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

//Declare properties from database
const Profiles = props => (
    <tr>
        <td>{props.profile.name}</td>
        <td>{props.profile.createdAt.substring(0,16)}</td>
        <td>{props.profile.updatedAt.substring(0,16)}</td>
        <td>
            <Link to={"/edit/"+props.profile._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProfile(props.profile._id) }}>delete</a>
        </td>
    </tr>
)


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        //binds 'this' to connect with the methods and the constructor
        this.deleteProfile = this.deleteProfile.bind(this);

        this.state = {profiles: []};
    }
    //When the component is running, this function would be called first.
    //When called it would display the profiles from the database. 
    componentDidMount() {
        axios.get('http://localhost:5000/api/')
            .then(response => {
                this.setState({ profiles: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    //Function called to delete profile by id 
    deleteProfile(id) {
        axios.delete('http://localhost:5000/api/'+id)
            .then(res => console.log(res.data));

        this.setState({
            profiles: this.state.profiles.filter(el => el._id !== id)
        })
    }
    //Function displays a list of profiles 
    profileList() {
        return this.state.profiles.map(currentprofiles => {
            return <Profiles profile={currentprofiles} deleteProfile={this.deleteProfile} key={currentprofiles._id}/>;
        })
    }
    //Display Table 
    render() {
        return (
            <div className="container">
                <h3>Dashboard</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.profileList() }
                    </tbody>
                </table>
            </div>
        )
    }
}