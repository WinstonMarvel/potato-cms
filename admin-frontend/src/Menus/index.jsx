import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './Menu.css';

const SortableItem = SortableElement(({value})=> <li className="list-group-item">{value}</li>);
const SortableList = SortableContainer( ({items})=> {
    return(
        <ul className="list-group">
            {items.map((value, index)=>
            (
                 <SortableItem key={`item=${index}`} index={index} value={value} />
             )
            )}
        </ul>
    )
});
 

class Menus extends Component{
    constructor(props){
        super(props); 
        this.state = {
            pages : ['Home', 'About', 'Contact', 'DUI']
        }

        this.onSortEnd = this.onSortEnd.bind(this);
    }   
    onSortEnd = ({oldIndex, newIndex})=>{
        this.setState({
            pages: arrayMove(this.state.pages, oldIndex, newIndex)
            }   
        )
    }

    render(){
        return(
            <article className="container">
                <div className="row">
                    <div className="col-md-7">
                        <SortableList onSortEnd={this.onSortEnd} items={this.state.pages}/>
                        <button className="btn btn-primary float-right mt-3">Save</button>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="form-group">
                            <label>Create a new menu:</label>
                            <div className="d-flex">
                                <input className="form-control w-75 mr-1" type="text" />
                                <button className="btn btn-primary w-25">Create</button> 
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Edit existing menu:</label>   
                            <select name="edit-menu" className="form-control">
                                <option value="1">Primary menu</option>
                                <option value="1">Footer menu</option>
                            </select>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Menus;