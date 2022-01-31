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

export const GetCircuits = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [circuits, setCircuits] = useState<TCircuit[] | []>([]);
	const maxResultsPerRequest = 100;
	let cancel: any;

	useEffect(() => {
		setLoading(true);
		setError(false);

		axios({
			method: 'GET',
			url: 'http://ergast.com/api/f1/circuits.json',
			params: { limit: maxResultsPerRequest },
			cancelToken: new axios.CancelToken((cancelToken => cancel = cancelToken))
		}).then(res => {
			setCircuits(prevCircuits => {
				return [...prevCircuits, ...res.data['MRData']['CircuitTable']['Circuits']]
			})
			setLoading(false);
		}).catch(err => {
			if(axios.isCancel(err)) {
				return;
			}
			setError(true);
		})
		return () => {
			//cancel request every time it recalls useEffect
			cancel();
		}
	}, [])
	return {loading, error, circuits};
}
