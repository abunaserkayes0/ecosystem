export async function getLatLonList(lat, lon) {
    try {
        const res = await fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }

}

export async function getLocationLatLongList() {
    try {
        const res = await fetch(`http://localhost:3000/api/locations`)
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);

    }

}

export async function getLatLonByName(name) {
    try {
        const res = await fetch(`http://localhost:3000/api/locations/${name}`)
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);

    }

}
