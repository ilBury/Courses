const Lamp = function(capacityElec, priceElec) {
    let condition = false;
    let timeWorkLamp = 0;
    let timeStart = 0;
    let timeEnd = 0;
    let lumpBurning = 0;
    let fullPrice = 0;
    
    this.getInfo = function() {
        console.log(`
        capacityLamp: ${capacityElec } W
        priceElec: ${priceElec} r for 1 W/s
        condition: ${condition ? 'on' : 'off'}
        timeWorkLamp: ${timeWorkLamp  } s
        lumpBurning: ${lumpBurning} W/s
        fullPrice: ${fullPrice} r
        `)
    }

    let getTime = () => {
        timeEnd = Date.now();
        if(!timeStart || !timeEnd) return;

        timeWorkLamp = (timeEnd - timeStart) / 1000 ;
    }

    this.lampSwitch = () => {
        condition = !condition
        if(condition) {
            timeStart = Date.now();
        } else {
            getTime();
        }
    };


    this.consumption = function() {
        lumpBurning = capacityElec / timeWorkLamp;
        fullPrice = priceElec * lumpBurning;
    }

} 

let lamp = new Lamp(60, 0.2);
