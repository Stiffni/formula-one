import React, { useEffect, useState } from 'react';
import { Card } from '../components/card';
import { Page } from '../components/page';

type TLocation = {
	country: string;
	lat: number;
	long: number;
	locality: string;
}
type TCircuitResponse = {
	Location: TLocation;
	circuitId: string;
	circuitName: string;
	url: string;
}

export const Circuits = () => {
	let [circuitData, setCircuitData] = useState<any>(null);
	const getCircuits = () => {
		const headers = {
			'Accept': 'application/json'
		}
		fetch('http://ergast.com/api/f1/circuits.json', { headers })
			.then((response) => response.json())
			.then((data) => {
				setCircuitData(data['MRData']['CircuitTable']['Circuits'])
			});

	}
	useEffect(() => {
		getCircuits();
	}, []);

	return (
		<Page>
			{
				circuitData && circuitData.map((circuit: any) => {
					return (
						<Card
							key={circuit.circuitId}
							name={circuit.circuitName}
							country={circuit.Location.country}
						/>
					)
				})
			}
		</Page>

	);
};
