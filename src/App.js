import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>

        </div>
      )}
    </Authenticator>
    );
  }
}

export default App;