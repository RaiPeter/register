import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useState} from 'react'


function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [packagetaken, setPackage] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    // FORM SUBMISSION
    const handleSubmit = e => {
       
        e.preventDefault();
        
        console.log(name, email, packagetaken, mobile,password,confirmpassword);
        
        var user = {
          name: name,
          email :email,
          packagetaken :packagetaken,
          mobile : mobile
        }
        // 192.168.0.122
        axios.post("http://localhost:1337/register", user)
            .then(res => {
                console.log(res.data.message+"response");
                
          })
            .catch(error => {
            console.log(error);
          });       
          
        //   history.push("/");

        //   displayRazorpay();
      }


    return (
        <div className="token">
            <div className="about-bg-img about-container">
        <header>
            {/* <div className="about-front-text">
                <h1>Blueweb surfer</h1>
                <h1>specialized in</h1> 
                <h1>customize websites.</h1>
            </div> */}
        </header>
        
    </div>
    <form onSubmit={handleSubmit}>
            Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/> <br/>
            Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  /> <br/>
            Password: <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}  /> <br/>
            Confirm Password: <input type="password" name="confirmpassword" value={confirmpassword} onChange={e => setConfirmPassword(e.target.value)}  /> <br/>
            Package :  <select value={packagetaken} onChange={e => setPackage(e.target.value)}>
                            <option value="Basic Package">Basic Package</option>
                            <option value="Deluxe Package">Deluxe Package</option>
                            <option value="Dynamic Package">Dynamic Package</option>
                        </select> <br />
            Mobie No: <input type="number" name="mobileno" value={mobile} onChange={e => setMobile(e.target.value)}/> <br/>
            <input type="submit" value="Register"/>
            <span>Already a customer? <Link to="/login">Login</Link> here </span>
        </form>
        </div>
    )
}

export default Registration
