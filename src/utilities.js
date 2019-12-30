const text2TitleCase = (string) => {
    let text = string.toLowerCase().split(" ");
    for(var i = 0; i< text.length; i++){
       text[i] = text[i][0].toUpperCase() + text[i].slice(1)+" ";
    }
    
    return text;
 }

 const convertTimestampToTime = (timestamp) => {
    return new Date(timestamp * 1e3).toISOString().slice(-13, -5);
 }

 const convertTimestampToDay = (timezoneDiff) => {
    let now = new Date();
    let utc_timestamp = Math.floor(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
          now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds()));
    let d = new Date(utc_timestamp+timezoneDiff)
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return days[d.getDay()];
 }

 const convertTimestampToDate = (timezoneDiff) => {
    let now = new Date();
    let utc_timestamp = Math.floor(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
          now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds()));
    let d = new Date(utc_timestamp+timezoneDiff)
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    return d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear();
 }

const toCelsius = (k) => {
    return (k-273.15).toFixed(0);
}

export {text2TitleCase,convertTimestampToDay,convertTimestampToDate,convertTimestampToTime,toCelsius}