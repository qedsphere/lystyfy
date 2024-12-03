function hashString(str){
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
		hash = hash & hash; 
	}
	return hash;
}

function compare(sliderValue) {
    return (a, b) => {
        const modA = hashString(a.id) % (50+sliderValue);
        const modB = hashString(b.id) % (50+sliderValue);

        if (modA > modB) {
            return -1;
        } else {
            return 1;
        }
    };
}

const Sort = (songs, sliderValues) => {
    var newSongs = [...songs];
    newSongs.sort(compare(sliderValues[0]+sliderValues[1]+sliderValues[2]+sliderValues[3]+sliderValues[4])); 
    return newSongs;
};

export default Sort;