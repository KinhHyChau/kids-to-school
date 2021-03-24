/***************************************************/ 
/*Use module.exports to separate setAlarm function*/ 
/*from main kids2school5.js                      */
/************************************************/ 

function setAlarm(minutes){
    console.log("Sleep for", minutes, "minutes more")
    }
module.exports = {
    setAlarm
}