import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function NavbarLogin() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = event => {
      event.preventDefault();
      navigate('/products?q=' + event.currentTarget.elements.searchQuery.value);
    };

    return (
        <nav className="navigation">
            <input 
                className="checkbox" 
                type="checkbox" 
                id="menu_toggle"
                checked={isNavExpanded}
                onChange={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <a href="/" className="brand-logo">
                <img src="/assets/logo.png" />
            </a>
            <div
                className={
                    isNavExpanded ? "navigation-main expanded" : "navigation-main"
                }
            >
                <ul>
                    <li>
                        <a href="/products">Silk Product</a>
                    </li>
                    <li>
                        <a href="/silk-story">Silk Story</a>
                    </li>
                    <li>
                        <a href="/silk-community">Silk Community</a>
                    </li>
                </ul>
            </div>
            <div className="searchBox">
                <form onSubmit={handleSubmit}>
                <input id="searchQuery" type="search" placeholder="Enter search.." />
                </form>
                <div className="search-icon">
                    <img src="/assets/loupe.png" className="everShow-icon" />
                    Search
                </div>
            </div>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li id="account">
                        <a>
                            <center><img src="/assets/user.png" className="icon" /></center>
                            Account
                            <div className="dropdown-content">
                                <a href="/">Logout</a>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navigation-bag">
                <a href="/cart">
                    <center><img src="/assets/shopping-bag.png" className="everShow-icon" /></center>
                    Bag
                </a>
            </div>
        </nav>
    );
}
export default NavbarLogin;