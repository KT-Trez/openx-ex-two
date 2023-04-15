import React, {ChangeEvent, HTMLInputTypeAttribute} from 'react';
import './input.css';


interface InputProps {
	changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	placeholder?: string;
	type?: HTMLInputTypeAttribute;
	value: number | string | undefined;
}

function Input({changeHandler, label, placeholder, type, value}: InputProps) {

	return (
		<div className={'input-wrapper'}>
			{label &&
				<label className={'input-label'} inputMode={'email'}>{label}</label>
			}
			<input
				className={'input'}
				onChange={changeHandler}
				value={value}
				placeholder={placeholder}
				type={type}
			/>
		</div>
	);
}

export default Input;