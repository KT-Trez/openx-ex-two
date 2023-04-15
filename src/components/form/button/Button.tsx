import React, {ButtonHTMLAttributes} from 'react';
import './button.css';


export interface ButtonProps {
	description: string;
	onClick?: () => void;
	testID?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

function Button({onClick, description, testID, type}: ButtonProps) {

	return (
		<button className={'button'} data-testid={testID} onClick={onClick} type={type}>{description}</button>
	);
}

export default Button;
