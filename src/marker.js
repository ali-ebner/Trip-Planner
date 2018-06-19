const mapboxgl = require('mapbox-gl');

const buildMarker = (type, coordinates) => {
	const newMarker = document.createElement("div");
	newMarker.style.height = '39px';
	newMarker.style.width = '32px';

	if(type==='Hotel'){
		newMarker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
	}

	else if(type === 'Activity'){
		newMarker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
	}

	else if(type === 'Restaurant'){
		newMarker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
	}
	return new mapboxgl.Marker(newMarker).setLngLat(coordinates);
}

module.exports = buildMarker;