import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class pageContentInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value)=>{
        this.setState({
            data: value
        });
    }


    render(){
        return(
            <ReactQuill value={this.state.data} onChange={this.handleChange} />
        )
    }
}

export default pageContentInput;