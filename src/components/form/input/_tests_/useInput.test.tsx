import {act, renderHook} from '@testing-library/react';
import {useInput} from '../index';


describe('useInput', () => {
	it('should return an input\'s value and handler', () => {
		const defaultValue = 'mock state';
		const {result} = renderHook(() => useInput(defaultValue));

		expect(result.current[0]).toEqual(defaultValue);
		expect(result.current[1]).toBeInstanceOf(Function);
	});

	it('should change input\'s value', () => {
		const defaultValue = 'mock state';
		const newValue = 'new mock state';
		const {result} = renderHook(() => useInput(defaultValue));
		const inputHandler = result.current[1];

		act(() => {
			inputHandler({ // @ts-ignore
				target: {
					value: newValue
				}
			});
		});

		expect(result.current[0]).toEqual(newValue);
	});
});