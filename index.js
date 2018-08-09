
let store = {trips :[], drivers:[], passengers: []}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++ driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    })
  }

  passenger(){
    return this.trips().map(trip => {
      return trip.passenger();
    })
  }
}


class Passenger{
  constructor(name){
    this.id = passengerId++
    this.name = name
    stroe.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  }

  drivers(){
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;
    store.trips.push(this);
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}
