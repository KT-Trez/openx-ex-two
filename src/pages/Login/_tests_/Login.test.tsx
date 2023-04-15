import {render, screen} from '@testing-library/react';
import React from 'react';
import Login from '../Login';


test('renders learn react link', () => {
	render(<Login/>);
	const linkElement = screen.getByText(/login/i);
	expect(linkElement).toBeInTheDocument();
});