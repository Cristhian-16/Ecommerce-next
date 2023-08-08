import { Carrusel, Links } from './components';

export default function JournalPage() {
	return (
		<main>
			<div className='grid max-w-2xl md:grid-cols-6 md:grid-rows-2 mx-auto gap-4 px-6 pb-4 md:max-w-screen-xl'>
				<Links />
			</div>
			{/* Carrusel */}
			<Carrusel />
		</main>
	);
}
