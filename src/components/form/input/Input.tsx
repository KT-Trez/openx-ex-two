import React, {ChangeEvent, HTMLInputTypeAttribute} from 'react';
import './input.css';


export interface InputProps {
	id: string;
	label?: string;
	name: string;
	onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	type?: HTMLInputTypeAttribute;
	value: number | string;
}

function Input({id, label, name, onChangeText, placeholder, type, value}: InputProps) {
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
			       onChange={onChangeText}
			       placeholder={placeholder}
			       type={type}
			       value={value}/>
		</div>
	);
}

export default Input;
