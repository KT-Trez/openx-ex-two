import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Button, {ButtonProps} from '../Button';


describe('<Button/>', () => {
	let button: HTMLButtonElement;
	let buttonProps: ButtonProps;
	let handleClick: jest.Mock<any, any>;

	const setup = () => {
		handleClick = jest.fn();
		buttonProps = {
			clickHandler: handleClick,
			description: 'Hello button',
			type: 'button'
		};

		render(
			<Button clickHandler={buttonProps.clickHandler}
			        description={buttonProps.description}
			        type={buttonProps.type}/>
		);

		button = screen.getByRole('button', {name: new RegExp(buttonProps.description, 'i')});
	};

	it('should render without crashing', () => {
		setup();
		expect(screen).toBeDefined();
		expect(button).toHaveTextContent(buttonProps.description);
		expect(button).toHaveAttribute('type', buttonProps.type);
	});

	it('should call click handler', () => {
		setup();
		userEvent.click(button);
		expect(handleClick).toBeCalledTimes(1);
	});
});