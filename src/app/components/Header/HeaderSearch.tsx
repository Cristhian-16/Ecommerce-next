'use client';
import { Search } from '../Search/Search';

export const HeaderSearch = () => {
	return (
		<div className='hidden md:flex md:w-1/3 justify-center text-white'>
			<Search />
		</div>
	);
};
