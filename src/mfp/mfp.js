import React, { Component } from "react";
import GoogleLogin from 'react-google-login';


export default class MFP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }


  loginGoogle = async response => {
    if (response.error) {
      console.error(response.error);
      return;
    }
    this.setState({ isLoading: true });
    const accessToken = response.accessToken;
    const email = response.profileObj.email;


    fetch("https://muqd7picdk.execute-api.us-west-2.amazonaws.com/v1/mfp", {
      method: 'post',
      body: JSON.stringify({
        accessToken: accessToken,
        email: email
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }


  render() {
    return (
      <div>
        <h1>MFP to Sheets</h1>
        <GoogleLogin
          clientId="946367212688-t3nuuvhnho2q371tsocfn9qieu1fb3ge.apps.googleusercontent.com"
          buttonText="Login with Google"
          scope="https://www.googleapis.com/auth/spreadsheets"
          onSuccess={this.loginGoogle}
          onFailure={this.loginGoogle}
        />
      </div>
    );
  }
}

