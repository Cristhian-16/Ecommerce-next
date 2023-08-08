'use client';

import { useAppSelector } from '@/app/types';
import { CerrarModal } from '@/components';
import { CardProduct, NoProductCart } from '../Card';

interface Props {
	close: () => void;
}

export const HeaderCartModal = ({ close }: Props) => {
	const { cart } = useAppSelector((state) => state.storeShop);

	return (
		<div className='fixed top-0 right-0 bg-black min-h-screen w-[400px]'>
			<div className='px-8 py-5 flex justify-between items-center'>
				<div className='text-white'>
					<h1>CR STORE</h1>
				</div>
				<div
					onClick={close}
					className='flex items-center justify-end border border-gray-600 px-4 py-3 rounded-lg cursor-pointer'
				>
					<CerrarModal />
				</div>
			</div>

			{cart.length === 0 ? (
				<NoProductCart />
			) : (
				<CardProduct cart={cart} close={close} />
			)}
		</div>
	);
};
