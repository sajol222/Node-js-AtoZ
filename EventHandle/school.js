//Event Emitter

const EventEmitter = require('events');

class School extends EventEmitter{
     startPeriod() {
        console.log('class started');
      
        this.emit('BellRing',{
            cause : 'because',
            classEnd : 'our class has ended',
        });
        
    }
}
module.exports = School;