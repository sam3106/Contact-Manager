import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { branding } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                    <div className="container">
                        <a href="/" className='navbar-brand'>
                            {branding}
                        </a>
                        <div>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a href="" className='nav-link'>
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;