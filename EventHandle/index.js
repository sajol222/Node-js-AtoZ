//Event Emitter
const School = require('./school')
const school = new School;
//register a event for Bellring 
school.on('BellRing',({cause,classEnd})=>{
    console.log(`we need to run ${cause} ${classEnd}`)
});
school.on('BellRing',()=>{
    console.log('Fuck me!')
})
//raise a emit
school.startPeriod();
//give a array.that contain a list of registerd events
console.log(school.eventNames());
//gives us a count number of a specific emmited listener 
console.log(school.listenerCount('BellRing'));
console.log(school.listeners('BellRing'));
