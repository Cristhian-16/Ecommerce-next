'use client';

import { CerrarModal } from '@/components';
import { Divider } from '@nextui-org/react';
import Link from 'next/link';
import { rutas } from '..';

interface Props {
	close: () => void;
}

export const HeaderRutas = ({ close }: Props) => {
	return (
		<div className='min-h-screen z-50 fixed top-0 left-0  w-full md:hidden bg-black'>
			<div className='mx-3'>
				<div
					onClick={close}
					className='my-5 mx-3 cursor-pointer max-w-[60px] flex items-center justify-center  border border-gray-500 px-4 py-3 rounded-lg'
				>
					<CerrarModal />
				</div>
				<Divider className='bg-gray-400  mt-2' />

				<div className='mt-5'>
					<h2 className='text-white my-5'>Paginas disponibles : </h2>
					<div className='flex flex-col gap-4 ml-5'>
						{rutas.map((ruta) => (
							<Link key={ruta.name} href={ruta.path} className='text-gray-300'>
								{ruta.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
