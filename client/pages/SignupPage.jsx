import React, { useState } from 'react';
import { redirect, Form } from 'react-router-dom';

const SignUpPage = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	////////////////////////////////////////////
	async function handleSubmit(e) {
	
	// make the fetch to the backend to authenticate the credentials
	try {
        e.preventDefault();
		const res = await fetch('/users', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
        // **checking to see if user is already in database
		if (res.status === 200) { 
			console.log('Signup successful!');
			return redirect(`/LoginPage`);  //where do you guys want to redirect this to
		  	
		} else {
			alert('Username already taken or server error');
		}
		} catch (error) {
		console.error(error);
		}
	}
	/////////////////////////////////////////////////


	return (
		<main className='signup-page'>
			<p className='signup-page-header'>All Aboard the AllPacka!</p>
			{/* <p id='name-label' className='simple-subhead'>
				What's your username?
  </p> */}
			<Form onSubmit ={handleSubmit}>
                <div className='username-box'>
                    <span>What will your username be?</span>
                    <input 
                        type='text'
                        placeholder='username'
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='password-box'>
                    <span>What will your password be?</span>
                    <input 
                        type='text'
                        placeholder="password" 
                        value = {password}     
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSubmit();
                        }}
                    />
                </div>
                <div id='sign-up-btn' className='signup-button'>
                    <button type='submit'>Create Your AllPacka Account!</button>
                </div>
			</Form>
		</main>
	);
  
  
  // return (
  //   <h1>Signup Page</h1>
  // )
};

export default SignUpPage;