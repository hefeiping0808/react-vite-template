import React, {ComponentType} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 为动态导入的模块声明类型
const modules = import.meta.glob('../pages/*/index.tsx', { eager: false }) as Record<
	string,
	() => Promise<{ default: ComponentType<unknown> }>
>;

console.log('modules',modules)
const routes = Object.keys(modules).map((path) => {
	// 提取路由路径，例如 ./pages/home/index.tsx -> /home
	const routePath = path
		.replace('./pages', '') // 移除 pages 前缀
		.replace('/index.tsx', '') // 移除 index.tsx 后缀
		.replace(/\.\/$/, '') // 处理根路径
		.replace('./', '/'); // 处理根路径
	
	// 使用 React.lazy 包裹动态导入的模块
	const Component = React.lazy(() => modules[path]());
	
	return { path: routePath || '/', Component };
});
console.log(routes)
function AppRoutes() {
	return (
		<Router>
			<React.Suspense fallback={<div>Loading...</div>}>
				<Routes>
					{routes.map(({ path, Component }) => (
						<Route key={path} path={path} element={<Component />} />
					))}
				</Routes>
			</React.Suspense>
		</Router>
	);
}

export default AppRoutes;
