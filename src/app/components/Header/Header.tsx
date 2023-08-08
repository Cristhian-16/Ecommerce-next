'use client';

import { useState } from 'react';
import { HeaderButton } from './HeaderButton';
import { HeaderPages } from './HeaderPages';
import { HeaderSearch } from './HeaderSearch';
import { HeaderCart } from './HeaderCart';
import { HeaderCartModal } from './HeaderCartModal';

export const Header = () => {
	const [isModalCart, setIsModalCart] = useState(false);

	const openModalCart = () => {
		setIsModalCart(true);
	};
	const closeModalCart = () => {
		setIsModalCart(false);
	};

	return (
		<header className='relative z-10 flex items-center justify-between p-4 lg:px-6'>
			<HeaderButton />
			<div className='w-full flex items-center'>
				<HeaderPages />
				<HeaderSearch />
				<HeaderCart modal={isModalCart} open={openModalCart} />
			</div>

			{isModalCart && <HeaderCartModal close={closeModalCart} />}
		</header>
	);
};
