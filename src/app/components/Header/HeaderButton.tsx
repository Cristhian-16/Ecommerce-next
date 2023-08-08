'use client';
import { TresLineas } from '@/components';

export const HeaderButton = () => {
	return (
		<div className='cursor-none block flex-none md:hidden'>
			{/* Menu Desplegable */}
			<button className='cursor-none flex h-11 w-11 items-center justify-center rounded-md  text-black transition-colors   md:hidden'>
				<TresLineas />
			</button>
		</div>
	);
};
