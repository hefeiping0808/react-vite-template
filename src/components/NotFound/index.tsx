import React, { useEffect } from "react";
import './index.css'

const NotFound: React.FC = () => {
	useEffect(() => {
	
	}, []);
	
	return <div className="room">
		<div className="cuboid">
			<div className="side"></div>
			<div className="side"></div>
			<div className="side"></div>
		</div>
		<div className="oops">
			<h2>糟糕！</h2>
			<p>页面不存在！</p>
		</div>
		<div className="center-line">
			<div className="hole">
				<div className="ladder-shadow"></div>
				<div className="ladder"></div>
			</div>
			<div className="four">4</div>
			<div className="four">4</div>
			<div className="btn">
				<a href="/home">返回首页</a>
			</div>
		</div>
	</div>
}

export default NotFound;