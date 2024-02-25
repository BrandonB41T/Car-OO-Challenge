class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`
    }
}

class Car extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(car) {
        const vehicles = this.vehicles;
        const capacity = this.capacity;

        if (!(car instanceof Vehicle)) {
            return "Only vehicles are allowed in here!"
        }
        if (vehicles.length === capacity) {
            return "Sorry, we're full."
        }
        vehicles.push(car);
    }
}