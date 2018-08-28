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
            <div className="container login mt-5 d-flex align-content-center">
                <div className="login-box">
                    <form onSubmit = {this.handleSubmit}>
                        <h2 className="mb-5">Login</h2>
                        <div className="form-group w-100">
                            <input type="name"  className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group w-100">
                            <input type="password"  className="form-control"  placeholder="Password" />
                        </div>
                        <div className="form-group w-100">
                            <a href="" className="d-block mb-3"> Login another way</a>
                        </div>
                        <div className="form-group justify-content-center">
                            <button className="btn btn-success mr-3">Login</button>
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <style>{this.state.bgStyle}</style>
            </div>
        );
    }
}


export default Login;