import React from 'react'
import {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // FORM SUBMISSION
    const handleSubmit = e => {
       
        e.preventDefault();
        
        console.log(email,password);
        
        var user = {
          email :email,
          password:password
        }
        // 192.168.0.122
        axios.post("http://localhost:1337/login", user)
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
            Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  /> <br/>
            Password: <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}  /> <br/>
            <input type="submit" value="Login"/>
        </form>
        </div>
    )
}

export default Login
