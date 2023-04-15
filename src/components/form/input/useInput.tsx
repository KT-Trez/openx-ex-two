import {useState} from 'react';


function useInput(defaultValue: string): [string, (event: { target: { value: string } }) => void] {
	const [value, setValue] = useState<string>(defaultValue);

	const onChange = (event: { target: { value: string } }) => {
		setValue(event.target.value);
	};

	return [value, onChange];
}

export default useInput;
