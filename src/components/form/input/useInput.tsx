import React, {ChangeEvent, useState} from 'react';


function useInput(): [string | number | undefined, (event: ChangeEvent<HTMLInputElement>) => void] {
	const [value, setValue] = useState<string | number>();

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return [value, handleInput];
}

export default useInput;