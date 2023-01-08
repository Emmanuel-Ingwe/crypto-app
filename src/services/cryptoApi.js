import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '6a0418eb10msh4a86e4f14293564p1cd7b6jsn986b0d36db97'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({ url, headers: CryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;