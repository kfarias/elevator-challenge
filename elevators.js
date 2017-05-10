// class Elevator {
//  constructor() {
//    this.currentFloor = 0;
//    this.requests = [];
//    this.riders = [];
//    this.floorTotal = 0;
//    this.state = 'idle';
//    this.stops = 0;
//  }
//
//  moveUp() {
//    this.countFloorTotal()
//    this.setStatus('moving')
//    return this.currentFloor++
//  }
//
//  moveDown() {
//    this.countFloorTotal()
//    this.setStatus('moving')
//    return this.currentFloor--
//  }
//
//  stop() {
//    this.setStatus('stopped')
//    this.stopsCounter()
//  }
//
//  setStatus(string) {
//    switch(string) {
//      case 'moving':
//        return this.state = string;
//      case 'stopped':
//        return this.state = string;
//      default:
//        return this.state = 'idle'
//    }
//  }
//
//  addRider(person) {
//    return this.riders.push(person.name)
//  }
//
//  countFloorTotal() {
//    return this.floorTotal++
//  }
//
//  stopsCounter() {
//    this.stops++
//  }
//
//
//
//  fetchRider() {
//    let pickUpFloor = this.requests[0].request.currentFloor;
//    let riderName = this.requests[0].name
//    if (this.isBelow(pickUpFloor)) {
//      for (let i = this.currentFloor; i < pickUpFloor; i++) {
//        this.moveUp()
//      }
//      this.stop()
//      this.addRider(riderName)
//    } else if (this.isAbove(pickUpFloor)) {
//        for (let i = this.currentFloor; i > pickUpFloor; i--) {
//          this.moveDown()
//        }
//        this.stop()
//        this.addRider(riderName)
//    } else {
//      this.stop()
//      this.addRider(riderName)
//    }
//  }
//
//  reset() {
//    this.constructor()
//  }
// }
//
// class Person {
//  constructor(name, currentFloor, requestedFloor) {
//    this.name = name;
//    this.request = {
//      currentFloor: currentFloor,
//      requestedFloor: requestedFloor
//    };
//  }
// }
//
// module.exports = {Elevator, Person};








//test
// 
// const assert = require('assert');
// const Elevator = require('../elevator');
//
// require('babel-core/register')({
//   ignore: /node_modules\/(?!ProjectB)/
// });
//
// describe('Elevator', function() {
//   const elevator = new Elevator();
//   const sarah = new Person('Sarah', 3, 5);
//   const kenia = new Person('Kenia', 6, 2)
//
//
//   it('should be able to moveUp and change the currentFloor', function() {
//     elevator.moveUp();
//     assert.equal(elevator.currentFloor, 1);
//   });
//
//   it('should be able to moveUp and change the currentFloor', function() {
//     elevator.currentFloor = 2;
//     elevator.moveDown();
//     assert.equal(elevator.currentFloor, 1);
//   });
//
//   it('should be able to add a rider to its riders array', function() {
//     elevator.addRider(sarah);
//     assert.equal(elevator.riders[0], 'Alex');
//   });
//
// });










































// class Elevator {
//  constructor() {
//    this.currentFloor = 0;
//    this.requests = [];
//    this.riders = [];
//    this.floorTotal = 0;
//    this.state = 'idle';
//    this.stops = 0;
//  }
//
//  moveUp() {
//    this.countFloorTotal()
//    this.setStatus('moving')
//    return this.currentFloor++
//  }
//
//  moveDown() {
//    this.countFloorTotal()
//    this.setStatus('moving')
//    return this.currentFloor--
//  }
//
//  stop() {
//    this.setStatus('stopped')
//    this.stopsCounter()
//  }
//
//  setStatus(string) {
//    switch(string) {
//      case 'moving':
//        return this.state = string;
//      case 'stopped':
//        return this.state = string;
//      default:
//        return this.state = 'idle'
//    }
//  }
//
//  addRider(person) {
//    return this.riders.push(person.name)
//  }
//
//  addRequest(person) {
//    return this.requests.push(person)
//  }
//
//  countFloorTotal() {
//    return this.floorTotal++
//  }
//
//  stopsCounter() {
//    this.stops++
//  }
//
//  requestFloor(person) {
//    this.addRequest(person);
//  }
//
//  deleteRequest() {
//    this.requests.shift()
//    this.riders.shift()
//  }
//
//  arrivedAtRequestedFloor(requestedFloor) {
//    if(this.currentFloor === requestedFloor) return true
//  }
//
//  isBelow(requestedFloor) {
//    if (this.currentFloor < requestedFloor) return true
//  }
//
//  isAbove(requestedFloor) {
//    if (this.currentFloor > requestedFloor) return true
//  }
//
//  checkFloor(requestedFloor) {
//    if (this.arrivedAtRequestedFloor) {
//      this.stop()
//      this.addRider()
//    } else if (this.isAbove(requestedFloor)) {
//      for (let i = this.currentFloor; i < pickUpFloor; i++) {
//        this.moveUp();
//      }
//    }
//  }
//
//  fetchRider() {
//    let pickUpFloor = this.requests[0].request.currentFloor;
//    let riderName = this.requests[0].name
//    if (this.isBelow(pickUpFloor)) {
//      for (let i = this.currentFloor; i < pickUpFloor; i++) {
//        this.moveUp()
//      }
//      this.stop()
//      this.addRider(riderName)
//    } else if (this.isAbove(pickUpFloor)) {
//        for (let i = this.currentFloor; i > pickUpFloor; i--) {
//          this.moveDown()
//        }
//        this.stop()
//        this.addRider(riderName)
//    } else {
//      this.stop()
//      this.addRider(riderName)
//    }
//  }
//
//  dropOffRider() {
//    let dropOffFloor = this.requests[0].request.requestedFloor;
//    if (this.isBelow(dropOffFloor)) {
//      for (let i = this.currentFloor; i < dropOffFloor; i++) {
//        this.moveUp()
//      }
//      this.stop()
//      this.deleteRequest()
//    } else if (this.isAbove(dropOffFloor)) {
//      for (let i = this.currentFloor; i > dropOffFloor; i--) {
//        this.moveDown()
//      }
//      this.stop()
//      this.deleteRequest()
//    } else {
//      this.stop()
//    }
//  }
//
//  reset() {
//    this.constructor()
//  }
// }
//
//
// class Person {
//  constructor() {
//    this.name = ''
//  }
// }
//
// module.exports = {Elevator, Person};
