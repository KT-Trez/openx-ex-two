import React, {FormEvent} from 'react';
import {Button} from '../../components/form/button';
import {Input, useInput} from '../../components/form/input';
import './login.css';


function Login() {
	const [username, handleMail] = useInput();
	const [password, handlePassword] = useInput();

	const authenticate = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<main className={'login-form-wrapper'}>
			<h3 className={'login-title'}>Sample login page</h3>
			<p className={'login-description'}>Fill in and submit the form. For successfull login use any non-empty user name and `pwd` as password.</p>

			<form className={'login-form'} onSubmit={authenticate}>
				<Input
					changeHandler={handleMail}
					label={'Username'}
					placeholder={'John Doe'}
					value={username}/>
				<Input
					changeHandler={handlePassword}
					label={'Password'}
					placeholder={'********'}
					type={'password'}
					value={password}/>
				<Button name={'Sign in'} type={'submit'}/>
			</form>
		</main>

	);
}

export default Login;