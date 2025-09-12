const timeFormat = (minutes) => {
    const hours=Math.floor(minutes/60);
    const minutesReaminder=minutes%60;
    return `${hours}h ${minutesReaminder}m`
}

export default timeFormat;