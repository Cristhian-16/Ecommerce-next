import { Lupa } from '@/components';

export const Search = () => {
	return (
		<form className='w-max-[550px] relative w-full lg:w-80 xl:w-full'>
			<input
				placeholder='Search for Products'
				name='search'
				type='search'
				className='w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder:text-neutral-500'
				autoComplete='off'
			/>
			<div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
				<Lupa />
			</div>
		</form>
	);
};
