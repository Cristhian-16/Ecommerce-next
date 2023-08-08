'use client';
import Link from 'next/link';
import { FooterTitle } from '.';

interface Rutas {
	path: string;
	name: string;
}

export const rutas: Rutas[] = [
	{
		path: '/',
		name: 'Home',
	},
	{
		path: '/about',
		name: 'About',
	},
	{
		path: '/terms-conditions',
		name: 'Terms &amp; Conditions',
	},
	{
		path: '/shipping-return-policy',
		name: 'Shipping &amp; Return Policy',
	},
	{
		path: '/privacy-policy',
		name: 'Privacy Policy',
	},
	{
		path: '/frequently-asked-questions',
		name: 'FAQ',
	},
];

export const Footer = () => {
	return (
		<footer className='text-sm mt-5'>
			<div className='mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 xl:px-0'>
				<FooterTitle />
				<nav>
					<ul>
						{rutas.map((ruta) => (
							<li key={ruta.name}>
								<Link
									className='block p-2 text-lg underline-offset-4  hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm text-neutral-300'
									href={ruta.path}
								>
									{ruta.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className='border-t border-neutral-200 py-6 text-sm text-gray-400'>
				<div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 xl:px-0'>
					<p>© 2023 CR STORE, Inc All rights reserved.</p>
					<hr className='mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block' />
					<p>Designed in Perú</p>
					<div className='md:ml-auto flex gap-1'>
						Crafted by <p className='text-white '>▲ Crisfind</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
