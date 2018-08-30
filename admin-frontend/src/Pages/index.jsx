import React, {Component} from 'react';
import FormTextInput from '../Components/input';
import PageContentInput from '../Components/pageContentInput';
import './Pages.css';
import axios from 'axios';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            disableSlugEdit: true,
            placeholder: true,
            selectedPage: "",
            pageTitle: "",
            pageSlug: "",
            pageContent: "",
            listOfPages: []
        }
        // this.makeEditable.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.makeEditable = this.makeEditable.bind(this);
    }

    makeEditable(e){
        this.setState((prevState)=>{
               return {disableSlugEdit: !prevState.disableSlugEdit}
        });
    }

    componentDidMount(){
        axios.get('/api/pages').then((res)=>{
            console.log(res.data.pagelist);
            //Selects home page by default
            this.populateListOfPages(res.data.pagelist);
            this.setActivePage(res.data.pagelist[0]);
        });
    }

    setActivePage(page){
        this.setState({
            selectedPage: page.slug,
            pageTitle: page.pageTitle,
            pageSlug: page.slug,
            pageContent: page.contents
        });
    }
    
    populateListOfPages(list){
        var listOfPages= [];
        list.map((element, index)=>{
            listOfPages.push(element.pageTitle);
        });
        this.setState({
            listOfPages: listOfPages
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
                                <FormTextInput handleChange={this.handleChange} stateVariable="pageTitle" placeholderData="Edit Page title" value={this.state.pageTitle}/>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" value={this.state.pageSlug} disabled={this.state.disableSlugEdit} />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" onClick={this.makeEditable}>
                                        {
                                            this.state.disableSlugEdit?"Edit":"Save"
                                        }
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* <label for="pagecontent">Update page content:</label> */}
                                <PageContentInput stateVariable="pageContent" handleChange={this.handleChange} content={this.state.pageContent}></PageContentInput>
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