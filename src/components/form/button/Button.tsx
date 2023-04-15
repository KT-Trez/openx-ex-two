import React, {ButtonHTMLAttributes} from 'react';
import './button.css';


export interface ButtonProps {
	clickHandler?: () => void;
	description: string;
	testID?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

function Button({clickHandler, description, testID, type}: ButtonProps) {

	return (
		<button className={'button'} data-testid={testID} onClick={clickHandler} type={type}>{description}</button>
	);
}

export default Button;