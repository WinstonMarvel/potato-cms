import React, {Component} from 'react';
import FormTextInput from '../Components/input';
import PageContentInput from '../Components/pageContentInput';
import './Pages.css';


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            x : true,
            placeholder : true,
            pageTitle: ""
        }
        // this.makeEditable.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    makeEditable(e){
        this.setState({
            x : false
        });
    }

    handleChange(stateVariable, data){
        this.setState({[stateVariable]:data}) 
    }

    render(){
        return(
                <article className="container mt-5 pb-5 mb-3">
                    <div className="row">
                        <h1 className="page-title pl-2 pb-3">Edit a page</h1>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <FormTextInput handleChange={this.handleChange} stateVariable="pageTitle" placeholderData="test"/>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" value="/page-slug/" disabled={this.state.x} />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Edit</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* <label for="pagecontent">Update page content:</label> */}
                                <PageContentInput ></PageContentInput>
                                {/* <textarea name="pagecontent" id="pageContent" className="form-control" placeholder="Update page content:"></textarea> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                {/* <label for="sel1">Page:</label> */}
                                <select className="form-control" id="sel1">
                                    <option>Home</option>
                                    <option>About</option>
                                    <option>Contact</option>
                                    <option>Downloads</option>
                                </select>
                                <button className="btn btn-primary mt-3">Update</button>
                            </div>
                        </div>
                    </div>
                
                </article>
        );
    }
}

export default Dashboard;