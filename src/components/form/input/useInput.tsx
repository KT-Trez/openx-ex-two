import React, {ChangeEvent, useState} from 'react';


function useInput(defaultValue: string | number): [string | number, (event: ChangeEvent<HTMLInputElement>) => void] {
	const [value, setValue] = useState<string | number>(defaultValue);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return [value, onChange];
}

export default useInput;