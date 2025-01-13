import React, {useEffect} from "react";
import {storeBase} from "../../store";

const PageHome: React.FC = () => {
	const { count, setCount } = storeBase()
	useEffect(() => {
	
	}, []);
	
	return <div className={'w-screen h-screen flex flex-col gap-y-4 justify-center items-center'}>
		<div className={' text-red-500'}>
			PageHome
		</div>
		
		<div className={'flex gap-x-4'}>
			<button className={'border-[1px] px-1 rounded-xl'} onClick={() => setCount(count-1)}>-</button>
			{ count }
			<button className={'border-[1px] px-1 rounded-xl'} onClick={() => setCount(count+1)}>+</button>
		</div>
	</div>
}

export default PageHome;