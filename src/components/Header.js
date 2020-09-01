import React from "react"; 
import {Link} from 'react-router-dom'; 
 
 
function Header(){ 
    return( 
        <header style={headerStyle}> 
            <h1>Ajankohtaista Vantaalla</h1>
            <h1>SB-PBLOCK</h1> 
            <Link to="/" style={linkStyle}> duunit </Link> | <Link to="/weather" style={linkStyle}>Säätiedot </Link>
        </header> 
    ) 
} 
const linkStyle={ 
    color: '#FF0000', 
    textDecoration:'none' 
} 
 
 
 
const headerStyle ={ 
    background:'#333333', 
    color:'#FF0000', 
    padding:'10px', 
    align: 'middle' 
 
 
     
} 
export default Header 