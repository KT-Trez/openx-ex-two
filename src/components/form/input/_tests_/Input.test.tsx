import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {Input} from '../index';
import {InputProps} from '../Input';


describe('<Input/>', () => {
	let input: HTMLInputElement;
	let inputProps: InputProps;
	let handleInput: jest.Mock<any, any>;

	const setup = (noLabel?: boolean) => {
		handleInput = jest.fn();

		inputProps = {
			onChangeText: handleInput,
			id: 'custom-input',
			label: noLabel ? undefined : 'Mock input',
			name: 'customInput',
			placeholder: 'Hello input',
			type: 'text',
			value: ''
		};

		render(
			<Input onChangeText={handleInput}
			       id={inputProps.id}
			       label={inputProps.label}
			       name={inputProps.name}
			       placeholder={inputProps.placeholder}
			       type={inputProps.type}
			       value={inputProps.value}/>
		);

		input = screen.getByPlaceholderText(new RegExp(inputProps.placeholder!, 'i'));
	};

	it('should render without crashing', () => {
		setup();
		expect(screen).toBeDefined();
		expect(screen.getByTestId('input-label')).toBeInTheDocument();
		expect(input).toHaveAttribute('id', inputProps.id);
		expect(input).toHaveAttribute('name', inputProps.name);
		expect(input).toHaveAttribute('placeholder', inputProps.placeholder);
		expect(input).toHaveValue(inputProps.value);
	});

	it('should render without label', () => {
		setup(true);
		expect(screen).toBeDefined();
		expect(screen.queryByTestId('input-label')).not.toBeInTheDocument();
	});

	it('should call input handler', async () => {
		setup();
		const mockText = 'mock input data';
		userEvent.type(input, mockText);
		expect(handleInput).toBeCalledTimes(mockText.length);
	});
});
