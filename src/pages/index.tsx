import Input from '@/components/Input/Input'
import ListChatsItem from '@/components/ListChatsItem/ListChatsItem'
import { useEffect, useState } from 'react'

interface IChat {
	id: string
	img: string
	title: string
	subtitle: string
	time: string
	messages: number
}

const Home = () => {
	const [search, setSearch] = useState('')

	const [chats, setChats] = useState<IChat[]>([])

	useEffect(() => {
		setChats([
			// {
			// 	id: `${Date.now()}`,
			// 	img: 'https://images.unsplash.com/photo-1680860021823-9e2a549f9891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
			// 	title: 'Office chat',
			// 	subtitle: 'I want to ask you to pick text text text',
			// 	time: '9:35',
			// 	messages: 5,
			// },
		])
	}, [])
	return (
		<div className='w-screen h-screen bg-[#202329]'>
			<div className='max-w-[25%]'>
				<div className='p-5'>
					<label className='bg-gray flex gap-[10px] p-[10px] rounded-xl cursor-text hover:opacity-80'>
						<span>
							<svg
								width='1.5rem'
								height='1.5rem'
								className='opacity-60'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z'
									stroke='#fff'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</span>
						<Input value={search} setValue={setSearch} placeholder='Search' />
					</label>
				</div>

				{chats.length !== 0 && (
					<div className='px-5'>
						{chats.map(chat => (
							<ListChatsItem
								key={chat.id}
								img={chat.img}
								messages={chat.messages}
								subtitle={chat.subtitle}
								time={chat.time}
								title={chat.title}
							/>
						))}
					</div>
				)}

				{chats.length === 0 && (
					<div className='text-base flex justify-center items-center opacity-90 text-white cursor-default'>
						Loading...
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
