import React from 'react';


class FormTextInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showPlaceholder: true
        };
    }
    
    
    render(){
        return(
            <input type="text" className="form-control"  
                onFocus={
                    ()=>{this.setState({showPlaceholder:false})
                }} 
                onBlur={
                    ()=>{this.setState({showPlaceholder:true})
                }}
                onChange={
                    (e)=>{this.props.handleChange(this.props.stateVariable, e.target.value)}
                }   
                placeholder={this.state.showPlaceholder? this.props.placeholderData : ""} 
                value={this.props.value}
            />
        )
    }
}

export default FormTextInput;