'use client';

interface Props {
	onCart: () => void;
}

export const AddCart = ({ onCart }: Props) => {
	return (
		<div className='w-full flex items-center justify-center my-3 sm:py-3'>
			<div
				onClick={onCart}
				className='cursor-pointer bg-blue-700 w-full flex items-center justify-center py-3 rounded-lg text-white transition-all durantion-300 ease-in-out active:scale-90'
			>
				Add To Cart
			</div>
		</div>
	);
};
