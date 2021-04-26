import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';

import HomePage from '../pages/home/Home';
import SignInPage from '../pages/signIn/SignIn';
import SignUpPage from '../pages/signUp/SignUp';

class Contents extends Component {
    state = { 
        users: [],
    }

    addDataUsers = data => {
        this.setState({users: this.state.users.concat(data)})
    }

    render() {
        console.log('users:', this.state.users);
        return ( 
            <main className = "main">
                <Switch>
                    <Route path = '/adv-hw-22-OlehMykolaichuk/' exact component = {HomePage}/>
                    <Route path = '/adv-hw-22-OlehMykolaichuk/sign-in'>
                        <SignInPage users={this.users}/>
                    </Route>
                    <Route path = '/adv-hw-22-OlehMykolaichuk/sign-up'>
                        <SignUpPage addDataUsers={this.addDataUsers}/>
                    </Route>
                    <Route path = '*'>
                        <p className = "error flex">404: page not found</p>
                    </Route>
                </Switch>
            </main>
        );
    }
}
 
export default Contents;