import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import Login from '../Login';


describe('<Login/>', () => {
	let form: HTMLFormElement;
	let passwordInput: HTMLInputElement;
	let signInButton: HTMLButtonElement;
	let usernameInput: HTMLInputElement;

	const setup = () => {
		render(<Login/>);

		form = screen.getByRole('form');
		passwordInput = screen.getByPlaceholderText(/\*+/i);
		signInButton = screen.getByTestId('sign-in-button');
		usernameInput = screen.getByPlaceholderText(/john doe/i);
	};

	let correctUser: { username: string, password: string };

	beforeEach(() => {
		correctUser = {
			username: 'admin',
			password: 'pwd'
		};
	});

	it('should render without crashing', () => {
		setup();
		expect(screen).toBeDefined();
	});

	it('should load data into form', () => {
		setup();

		fireEvent.change(passwordInput, {
			target: {
				value: correctUser.password
			}
		});
		fireEvent.change(usernameInput, {
			target: {
				value: correctUser.username
			}
		});

		expect(form).toHaveFormValues({
			username: correctUser.username,
			password: correctUser.password
		});
	});
});