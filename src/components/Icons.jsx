
const Icons = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon = 'icons/tormenta.jpg'
            console.log("tormenta")
            break;
        case 'Drizzle':
            icon = 'icons/llovizna.jpg'
            console.log("llovizna")
            break;
        case 'rain':
            icon = 'icons/lluvia.jpg'
            console.log("lluvia")
            break;
        case 'Snow':
            icon = 'icons/nieve.jpg'
            console.log("nieve")
            break;
        case 'Clear':
            icon = 'icons/despejado.jpg'
            console.log("limpio")
            break;
        case 'Atmosphere':
            icon = 'icons/estrellado.jpg'
            console.log("atmosfera")
            break;
        case 'Clouds':
            icon = 'icons/nublado-tarde.jpg'
            console.log("nubes")
            break;
        case 'Fog':
            icon = 'icons/fog.jpg'
            console.log("brumas")
            break;
        case 'Smoke':
            icon = 'icons/smoke.jpg'
            console.log("humo");
            break;
        default:
            icon = 'icons/nublado-tarde.jpg'
            console.log("imagen base")
    }
    return icon
}

export default Icons