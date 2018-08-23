import React, {Component} from 'react';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                        <a href="/admin" class="navbar-brand logo">Potato CMS</a>
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="" class="nav-link mr-3">Pages</a></li>
                            <li class="nav-item"><a href="" class="nav-link mr-3">Posts</a></li>
                            <li class="nav-item"><a href="" class="nav-link">Settings</a></li>
                        </ul>
                    </nav>
                </header>
                
                <article class="container mt-5 pb-5">
                    <div class="row">
                        <h1 class="page-title pl-2 pb-3">Feel free to hack!</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="form-group">
                                <label for="pagecontent">Update page content:</label>
                                <textarea name="pagecontent" id="pageContent" class="form-control" ></textarea>
                                <button class="btn btn-primary mt-3">Update</button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="sel1">Select list:</label>
                                <select class="form-control" id="sel1">
                                    <option>Home</option>
                                    <option>About</option>
                                    <option>Contact</option>
                                    <option>Downloads</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </article>
            
                <footer>
                    <div class="container">
                        <div class="row text-center social">
                            <a href="https://github.com/WinstonMarvel/potato-cms" class="m-auto pt-3 pb-3">
                                Check out on GitHub
                                <br/><span class="fab fa-github-alt"></span>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Dashboard;