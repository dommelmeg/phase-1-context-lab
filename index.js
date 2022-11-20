/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const createEmployeeRecord = (employeeInfo) => {
    let employeeRecord = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

const createEmployeeRecords = (arrayOfEmployeeInfo) => arrayOfEmployeeInfo.map(employee => createEmployeeRecord.call(this, employee))

function createTimeInEvent (dateStamp) {
    this.timeInEvents = [{
        type: 'TimeIn',
        hour: parseInt(dateStamp.substring(11), 10),
        date: dateStamp.substring(0, 10)
    }]
    return this
}

function createTimeOutEvent (dateStamp) {
    this.timeOutEvents = [{
        type: 'TimeOut',
        hour: parseInt(dateStamp.substring(11), 10),
        date: dateStamp.substring(0, 10)
    }]
    return this
}

function hoursWorkedOnDate (date) {
    const timeClockedIn = this.timeInEvents.find(event => event.date === date).hour
    const timeClockedOut = this.timeOutEvents.find(event => event.date === date).hour
    const hoursWorked = ((timeClockedOut - timeClockedIn) / 100)

    return parseInt(hoursWorked, 10)
}

function wagesEarnedOnDate (date) {
    const calculateWagesEarned = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseInt(calculateWagesEarned, 10)
}

function allWagesFor () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (srcEmployeeArray, employeeFirstName) {
    // console.log(srcEmployeeArray.firstName)
    // console.log(employeeFirstName)
    const filterEmployee = srcEmployeeArray.filter(employee => employee.firstName === employeeFirstName)
    return filterEmployee[0]
}

function calculatePayroll (employeeRecords) {
    console.log(employeeRecords)
    const mapEmployees = employeeRecords.map(employee => allWagesFor.call(employee))
    const reduceEmployees = mapEmployees.reduce((acc, cur) => acc + cur)
    console.log(reduceEmployees)
}
