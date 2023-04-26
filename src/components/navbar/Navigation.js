import React from "react";
import { Link, useLocation } from "react-router-dom";
import { dataNav } from "../../data/datas";

export default function Navigation() {
	// const handleChangecolor = () => {
	// 	setColor("bg-red-600");
	// };

	let route = useLocation().pathname;
	console.log('route:', route);
	return (
		<ul
			className={` bg-blue-500 text-white flex justify-between px-24 py-6 items-center`}
		>
			<Link to='/'>
				<li className='font-black text-3xl'>Goat</li>
			</Link>
			<div className='flex items-center space-x-5'>
				{dataNav.map((item) => (
					<Link to={item.url} key={item.id}>
						<li className={route === item.url ? "text-red-500" : ""}>{item.name}</li>
					</Link>
				))}
				{/* <button
					onClick={handleChangecolor}
					className='bg-gray-50 p-2 rounded-lg text-black shadow-lg font-semibold'
				>
					Change color
				</button> */}
			</div>
		</ul>
	);
}
