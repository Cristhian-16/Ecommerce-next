export default function AboutPage() {
	return (
		<div className='w-full'>
			<div className='mx-8 max-w-2xl py-20 sm:mx-auto'>
				<h1 className='mb-8 text-5xl font-bold text-white'>About</h1>
				<div className='mx-auto max-w-6xl text-base leading-7 text-white mb-8'>
					<p>Este sitio web está construido con Next.js.</p>
					<p>
						Incluye soporte para funciones de comercio del mundo real, tales
						como:
					</p>
					<ul className='list-disc my-2'>
						<li className='ml-6'>Contenido y Caracteristicas</li>
						<li className='ml-6'>Estado de pedidos</li>
						<li className='ml-6'>Y mucho más!</li>
					</ul>
					<p>
						Este proyecto también permite resaltar las características más
						recientes de Next.js, entre las que se incluyen:
					</p>
					<ul className='my-2 list-disc'>
						<li className='ml-6'>Enrutador de aplicaciones Next.js</li>
						<li className='ml-6'>
							Optimización para SEO mediante los metadatos de Next.js
						</li>
						<li className='ml-6'>
							Componentes de servidor React (RSCs) y Suspense
						</li>
						<li className='ml-6'>Estilización con Tailwind CSS</li>
						<li className='ml-6'>¡Y muchas otras características más!</li>
					</ul>
				</div>
				<p className='text-sm italic'>
					Este documento se actualizo por ultima vez el 25 Julio, 2023.
				</p>
			</div>
		</div>
	);
}
