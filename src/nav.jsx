import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/images/logo-1.jfif';
const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'black'}}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src={logo} 
            alt="Fusion Media Elite" 
            width="50" 
            height="35" 
          />
          <span style={{ color: '#08b3ca' }}>Fusion</span> Media Elite
        </a>
        <p style={{color: 'white', textAlign: 'center'}}>'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |
            मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि'</p>
      </div>
    </nav>
    <h4>"All Power is within You, You can do everything"</h4>
    <p>'-Swami Vivakananda'</p>
    </>
  );
};

export default Navbar;
