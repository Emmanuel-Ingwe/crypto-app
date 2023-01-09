import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

function getItem(label, key, icon, children, theme) {
	return {
		key,
		icon,
		children,
		label,
		theme,
	};
}

const Navbar = () => {
	// const [activeMenu, setActiveMenu] = useState(true);
	// const [screenSize, setScreenSize] = useState(undefined);
	const items = [
		getItem("Navigation One", "sub1", <HomeOutlined />, [
			getItem("Option 1", "1"),
			getItem("Option 2", "2"),
			getItem("Option 3", "3"),
		]),
		getItem("Option 5", "5"),
		getItem("Option 6", "6"),
	];

	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={icon} size='large' />
				<Typography.Title level={2} className='logo'>
					<Link to='/'>Cryptoverse</Link>
				</Typography.Title>
			</div>
			{/* {activeMenu && ( */}
			{/* <Menu theme='dark'>
				<Menu.Item icon={<HomeOutlined />}>
					<Link to='/'>Home</Link>
				</Menu.Item>
				<Menu.Item icon={<FundOutlined />}>
					<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
				</Menu.Item>
				<Menu.Item icon={<MoneyCollectOutlined />}>
				<Link to='/exchanges'>Exchanges</Link>
				</Menu.Item>
				<Menu.Item icon={<BulbOutlined />}>
				<Link to='/news'>News</Link>
				</Menu.Item>
				</Menu>
			)} */}
		</div>
	);
};

export default Navbar;
