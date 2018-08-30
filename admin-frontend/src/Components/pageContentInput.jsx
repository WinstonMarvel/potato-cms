import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class pageContentInput extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <ReactQuill 
            value={this.props.content} 
            onChange={
                (data)=>{
                    this.props.handleChange(this.props.stateVariable, data)
                }
            }
            />
        )
    }
}

export default pageContentInput;