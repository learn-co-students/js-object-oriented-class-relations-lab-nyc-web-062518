let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => trip.driverId == this.id)
  }

  passengers(){
   return this.trips().map(t => t.passenger())
  }
}

let passengerId = 0
class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => trip.passengerId == this.id)
  }

  drivers(){
    return this.trips().map(t => t.driver())
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger){
    this.passengerId = passenger.id
    this.driverId = driver.id
    store.trips.push(this)
    this.id = ++tripId
  }

  driver(){
    return store.drivers.filter(driver => driver.id == this.driverId)[0]
  }

  passenger(){
    return store.passengers.filter(p => p.id == this.passengerId)[0]
  }
}
