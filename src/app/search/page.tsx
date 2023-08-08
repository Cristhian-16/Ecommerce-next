'use client';
import { MainContent, Select } from './components';
import { useSelect } from './hooks/useSelect';

export default function SearchPage() {
	const { handleSelect, select } = useSelect();

	return (
		<>
			{/* Select */}
			<Select onSelect={handleSelect} />
			<MainContent select={select} onSelect={handleSelect} />
		</>
	);
}
