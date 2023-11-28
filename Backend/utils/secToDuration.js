// as the timing of the video is in seconds is it must be converted into hr min and sec duration formate 
function convertSecToDuration(totalSeconds){
    const hours = Math.floor(totalSeconds/3600);
    const mins = Math.floor((totalSeconds % 3600)/ 60);
    const second = Math.floor((totalSeconds % 3600) % 60);

    if(hours > 0){
        return `${hours}hrs ${mins}min`
    }else if(mins > 0){
        return `${mins}min ${second}sec`
    }else{
        return `${second}sec`
    }
}

module.exports = { convertSecToDuration };