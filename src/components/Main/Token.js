import React from 'react'
import './Token.css'
// import 'hi' from 'react'

import {useState} from 'react'
import axios from 'axios'
import 'dotenv'
import { useHistory } from "react-router-dom";


   // RAZORPAY METHODS
   function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

// to use if the app is in localhost or production
const __DEV__ = document.domain === 'localhost'

function Token() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [packagetaken, setPackage] = useState('');
    const [mobile, setMobile] = useState('');

    // Real action start here

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST'}).then((t) =>
			t.json()
		)

		console.log(data)

        const options = {
			key: __DEV__ ? process.env.KEY_ID : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
                alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			// prefill: {
			// 	name,
			// 	email: 'sdfdsjfh2@ndsfdf.com',
			// 	phone_number: '9899999999'
			// }
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
        // console.log(payment_id);
	}

    // FORM SUBMISSION
    const handleSubmit = e => {
       
        e.preventDefault();
        
        console.log(name, email, packagetaken, mobile);
        
        var user = {
          name: name,
          email :email,
          packagetaken :packagetaken,
          mobile : mobile
        }
        // 192.168.0.122
        axios.post("http://localhost:1337/token", user)
            .then(res => {
                console.log(res.data.message+"response");
                if(res.data.message === "ok"){
                    displayRazorpay();
                    // let moneypaid = "true";

                    // if(moneypaid == "true"){
                    //     history.push("/");
                    // }
                    // else{
                    //     history.push("/token")
                    // }
                }
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
            Package :  <select value={packagetaken} onChange={e => setPackage(e.target.value)}>
                            <option value="Basic Package">Basic Package</option>
                            <option value="Deluxe Package">Deluxe Package</option>
                            <option value="Dynamic Package">Dynamic Package</option>
                        </select> <br />
            Mobie No: <input type="number" name="mobileno" value={mobile} onChange={e => setMobile(e.target.value)}/> <br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default Token
