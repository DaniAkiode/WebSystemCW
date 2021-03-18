import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const Profiles = props => (
    <tr>
        <td>{props.profile.name}</td>
        <td>{props.profile.age}</td>
        <td>{props.profile.city}</td>
        <td>{props.profile.hobbies}</td>
        <td>
            <Link to={"/edit/"+props.profile._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProfile(props.profile._id) }}>delete</a>
        </td>
    </tr>
)


export default class ProfileList extends Component {
    constructor(props) {
        super(props);

        this.deleteProfile = this.deleteProfile.bind(this);

        this.state = {profiles: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/')
            .then(response => {
                this.setState({ profiles: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    deleteProfile(id) {
        axios.delete('http://localhost:5000/api/'+id)
            .then(res => console.log(res.data));

        this.setState({
            profiles: this.state.profiles.filter(el => el._id !== id)
        })
    }

    profileList() {
        return this.state.profiles.map(currentprofiles => {
            return <Profiles profile={currentprofiles} deleteProfile={this.deleteProfile} key={currentprofiles._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Profile List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Hobbies</th>
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