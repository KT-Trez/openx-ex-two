import React, {ChangeEvent, HTMLInputTypeAttribute} from 'react';
import './input.css';


export interface InputProps {
	changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	id: string;
	label?: string;
	name: string;
	placeholder?: string;
	type?: HTMLInputTypeAttribute;
	value: number | string;
}

function Input({changeHandler, id, label, name, placeholder, type, value}: InputProps) {
	return (
		<div className={'input-wrapper'}>
			{label &&
				<label className={'input-label'}
				       data-testid={'input-label'}
				       htmlFor={id}
				       inputMode={'email'}>{label}</label>
			}
			<input className={'input'}
			       id={id}
			       name={name}
			       onChange={changeHandler}
			       placeholder={placeholder}
			       type={type}
			       value={value}
			/>
		</div>
	);
}

export default Input;