import React, { Component} from 'react'
import { CardContent, AppBar, TextField, RaisedButton } from '@material-ui/core'
// import login from '../login.json'

class Login extends Component {
    constructor(props){
      super(props);
      this.state={
      username:'',
      password:''
      }
     }
    render() {
        return (
          <div>
            <CardContent>
              <div>
              <AppBar
                 title="Login"
               />
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                 />
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   />
                 <br/>
                 <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             </div>
             </CardContent>
          </div>
        );
      }
    }
    const style = {
     margin: 15,
    };
    export default Login;