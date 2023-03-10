import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import Loader from "./Loader";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery();
	const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const filteredData = cryptosList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setTimeout(() => {
			setCryptos(filteredData); // count is 0 here
		}, 3000);
	}, [cryptosList, searchTerm]);

	console.log(cryptos);
	if (isFetching) return <Loader />;

	if (setCryptos)
		return (
			<>
				{!simplified && (
					<div className='search-crypto'>
						<input
							placeholder='Search Cryptocurrency'
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
				)}
				<Row gutters={[32, 32]} className='crypto-card-container'>
					SORRY Coins unavailable right now.. <br />
					Due to the Api rendering issues.
					{/* {cryptos.map((currency) => (
					<Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
						<Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={<img className='crypto-image' src={currency.iconUrl} />}
								hoverable>
								{" "}
								<p>Price: {millify(currency.price)}</p>
								<p>Market Cap: {millify(currency.marketCap)}</p>
								<p>Daily Change: {currency.change}%</p>
							</Card>
						</Link>
					</Col>
				))} */}
				</Row>
			</>
		);
};

export default Cryptocurrencies;
