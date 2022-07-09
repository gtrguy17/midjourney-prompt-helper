import React, { useMemo, useState } from 'react'
import popular1 from "../wordCollections/popular/popular1.json";


const wordCollections = [
	{ name: 'popular', items: popular1 },
]

export default function Shelf({ customCollections = [], addDeskItem }) {
	const collections = useMemo(() => wordCollections.concat(customCollections), [customCollections])
	const [activeIdx, setActiveIdx] = useState(0)
	return (
		<div className='w-full max-w-6xl flex flex-wrap content-start'>
			<ul className='w-full m-2'>
				{collections.map((collection, idx) => (
					<li
						className='
							text-white p-2 border border-white rounded w-fit cursor-pointer
							hover:bg-white hover:text-black
						'
						key={idx}
						onMouseEnter={() => setActiveIdx(idx)}
					> {collection.name} </li>
				))}
			</ul>
			<ul className='w-full p-2 flex flex-wrap max-h-96 overflow-auto'>
				{collections[activeIdx].items.map((item, idx) => (
					<li
						className='
							text-neutral-400 text-sm
							p-2 py-0 m-1 w-fit cursor-pointer
							border border-neutral-400 rounded
							hover:bg-neutral-400 hover:text-white
							active:bg-neutral-400 active:text-white
						'
						key={idx}
						onClick={() => addDeskItem(item)}
					> {item} </li>
				))}
			</ul>
		</div>
	)
}