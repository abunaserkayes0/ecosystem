export default async function getCurrentLocation(latitude, longitude) {
    const res = await fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    const data = await res.json();
    return data;
}

