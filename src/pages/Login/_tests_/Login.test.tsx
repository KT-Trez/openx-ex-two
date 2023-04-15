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

		// userEvent.type(passwordInput, correctUser.password);
		// userEvent.type(usernameInput, correctUser.username);

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

	it('should correctly sign in using form', () => {
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
		fireEvent.click(signInButton);

		expect(screen.getByText(/logged.*in/i)).toBeInTheDocument();
	});

	it('should display error about empty username', () => {
		setup();

		fireEvent.change(passwordInput, {
			target: {
				value: correctUser.password
			}
		});
		fireEvent.click(signInButton);

		expect(screen.getByText(/username.*required/i)).toBeInTheDocument();
	});

	it('should display error about incorrect password', () => {
		setup();

		fireEvent.change(usernameInput, {
			target: {
				value: correctUser.username
			}
		});
		fireEvent.change(passwordInput, {
			target: {
				value: 'WRONG_PASSWORD'
			}
		});
		fireEvent.click(signInButton);

		expect(screen.getByText(/incorrect.*password/i)).toBeInTheDocument();
	});
});
