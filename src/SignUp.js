import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [fullname,setfullName] =useState("");
  const [email,setemail] =useState("");
  const [password,setpassword] =useState("");
  const [confirmpassword,setconfirmpassword] =useState("");
  const navigate = useNavigate();

  const handleReg = (e) => {
    e.preventDefault();
    console.log("FullName",fullname)
    console.log("email",email)
    console.log("password",password)
    console.log("ConfirmPassword",confirmpassword)
    if (password !== confirmpassword) {
      alert('Passwords do not match!');
      return;
  };
  


  };
  const go=(e)=>{
    e.preventDefault();
    const register ={fullname,email,password,confirmpassword}
    fetch("http://localhost:8080/group/reg",{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(register),
    }).then(()=>{
      alert("Registarion Sucessfull")
    })
    
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleReg}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={fullname}
          onChange={(e)=> setfullName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=> setemail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setpassword(e.target.value)}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e)=> setconfirmpassword(e.target.value)}
          required
        />
        <button onClick= {go} type="submit">Sign Up</button>
      </form>
      <button onClick={() => navigate('/')}>Back to Login</button>
    </div>
  );
}

export default SignUpPage;
