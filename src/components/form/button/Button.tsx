import React, {ButtonHTMLAttributes} from 'react';
import './button.css';


interface ButtonProps {
	clickHandler?: () => void;
	name: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

function Button({clickHandler, name, type}: ButtonProps) {

	return (
		<button className={'button'} onChange={clickHandler} type={type}>{name}</button>
	);
}

export default Button;