import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer>
                    <div className="container">
                        <div className="row text-center social">
                            <a href="https://github.com/WinstonMarvel/potato-cms" className="m-auto pt-3 pb-3">
                                Check out on GitHub
                                <br/><span className="fab fa-github-alt"></span>
                            </a>
                        </div>
                    </div>
            </footer>
        );
    }
}


export default Footer;


