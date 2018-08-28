import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class QuickLinks extends Component{
    render(){
        return(
            <article className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" >
                            <i class="w-100 text-center far fa-edit pt-3 fa-3x"></i>
                            {/* <img className="card-img-top" src="img_avatar1.png" alt="Card"/> */}
                            <div className="card-body">
                            
                                <h4 className="card-title">Pages</h4>
                                <p className="card-text">Feel free to edit content here</p>

                                <Link to="/admin/pages" className="btn btn-primary">Edit Pages</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" >
                            <i class="w-100 text-center fas fa-bars pt-3 fa-3x"></i>
                            {/* <img className="card-img-top" src="img_avatar1.png" alt="Card"/> */}
                            <div className="card-body">
                            
                                <h4 className="card-title">Menus</h4>
                                <p className="card-text">Re-arrange menus here</p>

                                <Link to="/admin/pages" className="btn btn-primary">Edit Menus</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" >
                            <i class="w-100 text-center fas fa-sliders-h pt-3 fa-3x"></i>
                            {/* <img className="card-img-top" src="img_avatar1.png" alt="Card"/> */}
                            <div className="card-body">
                            
                                <h4 className="card-title">Settings</h4>
                                <p className="card-text">See what's inside</p>

                                <Link to="/admin/pages" className="btn btn-primary">Edit Settings</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default QuickLinks;