import React, {FormEvent, useRef, useState} from 'react';
import {Button} from '../../components/form/button';
import {Input, useInput} from '../../components/form/input';
import AuthService from '../../services/AuthService';
import './login.css';


function Login() {
	const statusBarRef = useRef<HTMLSpanElement>(null);

	const [username, changeUsername] = useInput('');
	const [password, changePassword] = useInput('');

	const [authenticated, setAuthenticated] = useState(false);
	const [status, setStatus] = useState('status');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		if (!authenticated)
			signIn();
		else
			signOut();
	};

	const signIn = () => {
		if (!username) {
			setStatus('Username is required');
			statusBarRef.current!.classList.remove('hidden');
			return statusBarRef.current!.classList.add('login-status--error');
		}

		const authenticated = AuthService.authenticate(username, password);
		statusBarRef.current!.classList.remove('hidden');

		if (authenticated) {
			setStatus(`Logged in as: ${username}`);
			statusBarRef.current!.classList.remove('login-status--error');
		} else {
			setStatus('Incorrect login or password');
			statusBarRef.current!.classList.add('login-status--error');

			changeUsername({target: {value: ''}});
			changePassword({target: {value: ''}});
		}

		setAuthenticated(authenticated);
	};

	const signOut = () => {
		setAuthenticated(prevState => !prevState);

		statusBarRef.current!.classList.add('hidden');
		statusBarRef.current!.classList.remove('login-status--error');

		changeUsername({target: {value: ''}});
		changePassword({target: {value: ''}});
	};

	return (
		<main className={'login-form-wrapper'}>
			<h3 className={'login-title'}>Sample login page</h3>
			<p className={'login-description'}>
				Fill in and submit the form. For successful login use any non-empty user
				name and `pwd` as password.
			</p>

			<form className={'login-form'} name={'signInForm'} onSubmit={handleSubmit}>
				<span className={'login-status hidden'} ref={statusBarRef}>{status}</span>
				<Input onChangeText={changeUsername}
				       id={'username-input'}
				       label={'Username'}
				       name={'username'}
				       placeholder={'John Doe'}
				       value={username}/>
				<Input onChangeText={changePassword}
				       id={'password-input'}
				       label={'Password'}
				       name={'password'}
				       placeholder={'********'}
				       type={'password'}
				       value={password}/>

				{authenticated ?
					<Button description={'Sign Out'} testID={'sign-out-button'} type={'submit'}/>
					:
					<Button description={'Sign In'} testID={'sign-in-button'} type={'submit'}/>
				}
			</form>
		</main>
	);
}

export default Login;
