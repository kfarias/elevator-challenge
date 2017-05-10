 class Elevator {
  constructor() {
    this.currentFloor = 0;
    this.requests = [];
    this.riders = [];
    this.floorTotal = 0;
    this.state = 'idle'
    this.stops = 0;
  }

  moveUp() {
    this.countFloorTotal()
    this.setStatus('moving')
    return this.currentFloor++
  }

  moveDown() {
    this.countFloorTotal()
    this.setStatus('moving')
    return this.currentFloor--
  }

  // stop() {
  //   this.setStatus('broken')
  //   this.stopsCounter()
  // }

  setStatus(string) {
    switch(string) {
      case 'moving':
        return this.state = string;
      case 'broken':
        return this.state = string;
      default:
        return this.state = 'idle'
    }
  }

  addRider(person) {
    return this.riders.push(person.name)
  }

  addRequest(person) {
    return this.requests.push(person)
  }

  requestFloor(person) {
    this.addRequest(person);
  }

  countFloorTotal() {
    return this.floorTotal++
  }

  stopsCounter() {
    this.stops++
  }

  reset() {
    this.currentFloor = 0;
    this.requests = [];
    this.riders = [];
    this.floorTotal = 0;
    this.state = 'idle';
    this.stops = 0;
 }
}

class Person {
  constructor(name, currentFloor, requestedFloor) {
    this.name = name;
    this.request = {
      currentFloor: currentFloor,
      requestedFloor: requestedFloor
    }
  }
}

module.exports = {Elevator, Person};
