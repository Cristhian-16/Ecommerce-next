'use client';
import { Logo } from '@/components';
import Link from 'next/link';

export const HeaderPages = () => {
	return (
		<div className=' w-full flex justify-center items-center gap-5 md:w-1/3 md:justify-start'>
			<Link href={'/'} className='text-white flex items-center  space-x-2 '>
				<div className='border border-gray-700 p-3 rounded-md bg-black'>
					<Logo />
				</div>
				<h2 className='md:hidden lg:block uppercase font-bold'>cr store</h2>
			</Link>
			<div className='hidden md:block'>
				<Link
					href={'/search'}
					className='text-gray-500 transition-all duration-250 ease-in-out hover:text-gray-200'
				>
					Productos
				</Link>
			</div>
		</div>
	);
};
