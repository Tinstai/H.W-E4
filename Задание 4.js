function OpenClose() {
    this.socketOn = function () {
        return true
    }
    this.socketOff = function () {
        return false
    }
}

function Teh(name, serialNr, socketCondition, compute) {
    this.name = name
    this.serialNr = serialNr
    this.socketCondition = socketCondition
    this.compute = function () {
        if (socketCondition) {
            return compute * (12 * 2) / 1000
        } else {
            return "Not plugged in!"
        }

    }
}

const action = new OpenClose()

const computer = new Teh("SAMSUNG", "O28347T", action.socketOn(), 100)
const TV = new Teh("APPLE", "I8W34765TB", action.socketOff(), 4)

console.log(computer.name, computer.serialNr, computer.compute())
console.log(TV.name, TV.serialNr, TV.compute())