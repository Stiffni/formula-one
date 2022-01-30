import React, { useEffect, useState } from 'react';
import { Card } from '../components/card';
import { CircuitInfo } from '../components/circuitInfo';
import { Page } from '../components/page';

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

type TCircuitResponse = {
	MRData: {
		CircuitTable: {
			Circuits: TCircuit[];
		}
	}
}

export const Circuits = () => {
	let [circuitData, setCircuitData] = useState<TCircuit[] | null>(null);
	const getCircuits = () => {
		const headers = {
			'Accept': 'application/json'
		}
		fetch('http://ergast.com/api/f1/circuits.json', { headers })
			.then((response) => response.json())
			.then((data: TCircuitResponse) => {
				setCircuitData(data['MRData']['CircuitTable']['Circuits'])
			});

	}
	useEffect(() => {
		getCircuits();
	}, []);

	return (
		<>
			{
				circuitData && circuitData.map((circuit: TCircuit) => {
					return (
						<Card>
							<CircuitInfo
								key={circuit.circuitId}
								name={circuit.circuitName}
								country={circuit.Location.country}
							/>
						</Card>
					)
				})
			}
		</>
	);
};
