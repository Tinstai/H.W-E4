class OpenClose {
    constructor(socketCondition) {
        this.socketCondition = socketCondition
    }

    socketOn() {
        return this.socketCondition = true
    }

    socketOff() {
        return this.socketCondition = false
    }
}

class Technology extends OpenClose {
    constructor(name, serialNr, compute, socketCondition) {
        super(socketCondition);
        this.name = name;
        this.serialNr = serialNr;
        this.compute = compute;
    }

    calculation() {
        if (this.socketCondition) {
            return this.compute * (12 * 2) / 1000
        } else {
            return "Not plugged in!"
        }
    }
}


const computer = new Technology("SAMSUNG", "O28347T", 100)
computer.socketOff()
console.log(computer.name, computer.serialNr, computer.calculation())

const TV = new Technology("APPLE", "I8W34765TB", 4)
TV.socketOn()
console.log(TV.name, TV.serialNr, TV.calculation())