import React from 'react';
import { Planet } from 'react-planet';
import "./planetmenu.css"

export default class SwipeView extends React.Component{
    render() {
	return (
        <div style={{
            position: 'absolute', left: '40%', top: '30%',
            transform: 'translate(-50%, -50%)'
        }}>
		<Planet
			centerContent={
				<div class="big-seagreen-circle">Tech Stack</div>
			}

            open
            orbitRadius={300}
            rotation={30}
            dragablePlanet
            dragRadiusPlanet={20}
            bounce
			autoClose
		>
			<div class="yellow-circle">Golang</div>
			<div class="violet-circle">Python</div>
			<div class="red-circle">Clojure</div>
			<div class="blue-circle">K8s</div>
			<div class="orange-circle">Azure</div>

		</Planet>
        </div>
	);
}
}