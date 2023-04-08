import { ChangeEvent, FC } from 'react'

interface IInput {
	value: string
	setValue: (value: string) => void
	placeholder: string
}

const Input: FC<IInput> = ({ placeholder, value, setValue, ...args }) => {
	function changeHandler(e: ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}

	return (
		<input
			onChange={changeHandler}
			value={value}
			placeholder={placeholder}
			className='outline-none text-white bg-inherit text-base opacity-60'
			type='text'
			{...args}
		/>
	)
}

export default Input
