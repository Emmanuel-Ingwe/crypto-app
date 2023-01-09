import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
// import Cryptocurrencies from "./Cryptocurrencies";
// import News from "./News";
// import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching, isError, error } = useGetCryptosQuery(10);

	useEffect(() => {
		try {
			if (isError) console.log(error);
			console.log("data", data);
		} catch (error) {}
	}, [isError, error, data]);

	const globalStats = data?.data?.stats;

	if (isFetching) return "Loading...";

	return (
		<>
			<Title level={2} className='heading'>
				Global Crypto Stats
			</Title>
			<Row gutter={[32, 32]}>
				<Col span={12}>
					<Statistic
						title='Total Cryptocurrencies'
						value={globalStats?.total ?? 0}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Exchanges'
						value={millify(globalStats?.totalExchanges ?? 0)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Market Cap:'
						value={`$${millify(globalStats?.totalMarketCap ?? 0)}`}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total 24h Volume'
						value={`$${millify(globalStats?.total24hVolume ?? 0)}`}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Cryptocurrencies'
						value={globalStats?.total ?? 0}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Markets'
						value={millify(globalStats?.totalMarkets ?? 0)}
					/>
				</Col>
			</Row>
			{/* <div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Top 10 Cryptos In The World
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/cryptocurrencies'>Show more</Link>
				</Title>
			</div>
			<Cryptocurrencies simplified />
			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Latest Crypto News
				</Title>
				<Title level={3}>
					<Link to='/news'>Show more</Link>
				</Title>
			</div>
			<News simplified /> */}
		</>
	);
};

export default Homepage;
