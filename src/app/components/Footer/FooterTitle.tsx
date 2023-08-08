import { LogoFooter } from '@/components';

export const FooterTitle = () => {
	return (
		<div>
			<div className='flex items-center gap-2 text-black dark:text-white md:pt-1'>
				<div className='flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[30px] w-[30px] rounded-lg'>
					<LogoFooter />
				</div>
				<span className='uppercase text-gray-200 font-semibold'>CR STORE</span>
			</div>
		</div>
	);
};
