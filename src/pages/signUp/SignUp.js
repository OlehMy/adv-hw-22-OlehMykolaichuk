import { Link } from 'react-router-dom';
import React, {Component} from 'react';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        disabled: true,
        checked: false,
    }

    changeFirstName = e => {
        this.setState({firstName: e.target.value})
    };
    changeLastName = e => {
        this.setState({lastName: e.target.value})
    };
    changeEmail = e => {
        this.setState({email: e.target.value})
    };
    changePassword = e => {
        this.setState({password: e.target.value})
    };

    addData = () => {
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        };
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.password !== '') {
            this.props.addDataUsers(data);
            this.setState({firstName:'', lastName:'', email:'', password:'', disabled: true, checked: false});
        };
    };

    changeChecked = () => {
        this.setState({checked: !this.state.checked});
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.password !== '' && this.state.checked === false) {
            this.setState({disabled: false})
        }else {
            this.setState({disabled: true})
        };
    };

    render() {
        return (
            <section className = "sign flex">
                <div className = "sign__header flex">
                    <div className = "sign__img"></div>
                    <h3>Sing up</h3>
                </div>
                <div className = "sign__inputs-block flex">
                    <input type = "text" value = {this.state.firstName} onChange = {this.changeFirstName} placeholder = "First Name*" className = "sign__input-name"/>
                    <input type = "text" value = {this.state.lastName} onChange = {this.changeLastName} placeholder = "Last Name*" className = "sign__input-name"/>
                    <input type = "text" value = {this.state.email} onChange = {this.changeEmail} placeholder = "Email Adres*"/>
                    <input type = "password" value = {this.state.password} onChange = {this.changePassword} placeholder = "Password*"/>
                </div>
                <div className = "sign__checkbox-block flex">
                    <input type = "checkbox" checked={this.state.checked} onChange={this.changeChecked} id = "custom-checkbox" className = "sign__checkbox"/>
                    <label for = "custom-checkbox">I want to receive inspiration, markting promotions and updates via email</label>
                </div>
                <div className = "sign__button-block flex">
                    <button className = "sign__button" onClick = {this.addData} disabled = {this.state.disabled}>Sign up</button>                
                </div>
                <div className = "sign__links-block flex">
                    <p></p>
                    <Link to = "/adv-hw-22-OlehMykolaichuk/sign-in">
                        <p>Already have an account? Sing In</p>
                    </Link>
                </div>
                <div className = "sign__copyright flex">Copyright &#169; Your Website 2021</div>
            </section>
        )
    }
}

export default SignUp;