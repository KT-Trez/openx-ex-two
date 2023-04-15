import React, {FormEvent} from 'react';
import {Button} from '../../components/form/button';
import {Input, useInput} from '../../components/form/input';
import './login.css';


function Login() {
	const [username, handleMail] = useInput('');
	const [password, handlePassword] = useInput('');

	const authenticate = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<main className={'login-form-wrapper'}>
			<h3 className={'login-title'}>Sample login page</h3>
			<p className={'login-description'}>
				Fill in and submit the form. For successful login use any non-empty user
				name and `pwd` as password.
			</p>

			<form className={'login-form'} name={'signInForm'} onSubmit={authenticate}>
				{/* todo: add sign in status feedback */}
				<Input changeHandler={handleMail}
				       id={'username-input'}
				       label={'Username'}
				       name={'username'}
				       placeholder={'John Doe'}
				       value={username}/>
				<Input changeHandler={handlePassword}
				       id={'password-input'}
				       label={'Password'}
				       name={'password'}
				       placeholder={'********'}
				       type={'password'}
				       value={password}/>
				<Button description={'Sign In'} testID={'sign-in-button'} type={'submit'}/>
			</form>
		</main>
	);
}

export default Login;