import React from 'react';
import { Planet } from 'react-planet';

export default class SwipeView extends React.Component{
    render() {
	return (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
		<Planet
			centerContent={
				<div
					style={{
						height: 140,
						width: 140,
						borderRadius: '50%',
						backgroundColor: '#1da8a4',
					}}
				/>
			}
            open
            orbitRadius={200}
            rotation={30}
            dragablePlanet
            dragRadiusPlanet={20}
            bounce
			autoClose
		>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#FEA900',
				}}
			/>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#B3DC4A',
				}}
			/>
            			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>
                        			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#6AC0FF',
				}}
			/>
                        			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#FF0000',
				}}
			/>
		</Planet>
        </div>
	);
}
}