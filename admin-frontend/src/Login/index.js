import React, {Component} from 'react';
import './login.css';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            bgStyle : "body{background: white}"
        }
    }

    handleSubmit(e){
        e.preventDefault();
    }

    componentDidMount(){
        this.setState({bgStyle: "body{background: url('/images/bg-login.jpg') no-repeat center/cover;}"});
    }

    render(){
        return (
            <div class="container login h-100 d-flex align-content-center">
                <div class="login-box">
                    <form onSubmit = {this.handleSubmit}>
                        <h2 class="mb-5">Login</h2>
                        <div class="form-group w-100">
                            <input type="name"  class="form-control" placeholder="Username" />
                        </div>
                        <div class="form-group w-100">
                            <input type="password"  class="form-control"  placeholder="Password" />
                        </div>
                        <div class="form-group w-100">
                            <a href="" class="d-block mb-3"> Login another way</a>
                        </div>
                        <div class="form-group justify-content-center">
                            <button class="btn btn-success mr-3">Login</button>
                            <button class="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <style>{this.state.bgStyle}</style>
            </div>
        );
    }
}


export default Login;