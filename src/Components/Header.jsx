import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'yellow',padding: '15px'}}>
      <h1>Header</h1>
      <div style={{display:'flex',gap:'20px'}}>
      <Link to='/'>Home</Link>
      
      <Link to='/Login'>Login</Link>
      </div>
    </div>
  );
}
