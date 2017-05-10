const assert = require('assert');
const {Elevator, Person} = require('../elevator');

require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

describe('Elevator', function() {
  const elevator = new Elevator();
  const sarah = new Person('Sarah', 3, 5);
  const kenia = new Person('Kenia', 6, 2)

  afterEach(function() {
  elevator.reset();
  });

  it('should be able to moveUp and change the currentFloor', function() {
    elevator.moveUp();
    assert.equal(elevator.currentFloor, 1);
  });

  it('should be able to moveUp and change the currentFloor', function() {
    elevator.currentFloor = 2;
    assert.equal(elevator.currentFloor, 2);
    elevator.moveDown();
    assert.equal(elevator.currentFloor, 1);
  });

  it('should be able to add a rider to its riders array', function() {
    elevator.addRider(sarah);
    assert.equal(elevator.riders[0], 'Sarah');
  });

  it('should be able to add a request to the requests array', function() {
    elevator.addRequest(kenia);
    assert.equal(elevator.requests[0].request.currentFloor, 6);
  });

  it('a person should be able to request a floor', function() {
  elevator.requestFloor(sarah);
  console.log(sarah);
  assert.equal(elevator.requests[0].request.currentFloor, 3);
  assert.equal(elevator.requests[0].request.requestedFloor, 5);
  assert.equal(elevator.requests.length, 1);
  });

  it('should be able to count the total number of floors traveled', function() {
  elevator.moveUp();
  elevator.moveUp();
  elevator.moveDown();
  assert.equal(elevator.floorTotal, 3);
});
});
