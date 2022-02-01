import { useEffect, useState } from 'react';
import axios from 'axios';

type TLocation = {
	country: string;
	lat: number;
	long: number;
	locality: string;
}
type TCircuit = {
	Location: TLocation;
	circuitId: string;
	circuitName: string;
	url: string;
}

export const useCircuits = (pageNumber: number) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [circuits, setCircuits] = useState<TCircuit[] | []>([]);
	const [hasMore, setHasMore] = useState(true);
	const maxResultsPerRequest = 10;

	useEffect(() => {
		setLoading(true);
		setError(false);

		axios({
			method: 'GET',
			url: 'http://ergast.com/api/f1/circuits.json',
			params: { limit: maxResultsPerRequest, offset: maxResultsPerRequest * pageNumber },
		}).then(res => {
			const circuitData = res.data['MRData']['CircuitTable']['Circuits'];
			setCircuits(prevCircuits => {
				return [...prevCircuits, ...circuitData]
			});
			setHasMore(res.data['MRData'].total > (maxResultsPerRequest * pageNumber + circuitData.length))
			setLoading(false);
		}).catch(err => {
			setError(true);
		})
	}, [pageNumber])
	return {loading, hasMore, error, circuits};
}
