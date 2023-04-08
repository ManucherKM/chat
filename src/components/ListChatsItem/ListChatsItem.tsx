import { FC } from 'react'

interface IListChatsItem {
	img: string
	title: string
	subtitle: string
	time: string
	messages: number
}

const ListChatsItem: FC<IListChatsItem> = ({
	img,
	subtitle,
	time,
	title,
	messages,
}) => {
	const isMessages = messages > 0

	return (
		<div className='hover:bg-gray rounded-xl cursor-pointer'>
			<div className='p-3 flex gap-3 justify-between'>
				<div className='max-w-[20%]'>
					<img
						className='rounded-xl w-14 h-14 object-cover'
						src={img}
						alt='img'
					/>
				</div>
				<div className='max-w-[50%]'>
					<p className='text-sm mt-1 text-white opacity-90 whitespace-nowrap text-ellipsis'>
						{title}
					</p>
					<p className='text-sm mt-1 text-white opacity-60 text-ellipsis overflow-hidden whitespace-nowrap w-[20px]}'>
						{subtitle}
					</p>
				</div>
				<div className='max-w-[20%]'>
					<div className='flex gap-3 justify-end items-center mt-1'>
						<div>
							<svg
								width='14px'
								height='8px'
								viewBox='0 0 448 264'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M348.335 15L115.001 248.333L15 148.333'
									stroke='white'
									strokeWidth='30'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M432.335 15L199.001 248.333L99 148.333'
									stroke='white'
									strokeWidth='30'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<div className='text-sm text-white opacity-90'>{time}</div>
					</div>
					{isMessages && (
						<div className='flex justify-end items-center mt-1'>
							<div className='w-5 h-5 bg-blue text-xs text-white rounded-full flex justify-center items-center'>
								<span>{messages}</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ListChatsItem
