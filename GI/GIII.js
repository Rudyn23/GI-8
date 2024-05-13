function createPatient(name, ssn) {
    return {
        name: name,
        getName: function() {
            return this.name;
        },
        getSSN: function() {
            return undefined;
        }
    };
}

const patient2 = createPatient("John", "123-45-6789");

console.log(patient2.name); // Undefined
console.log(patient2.ssn); // Undefined
console.log(patient2.getName()); // John
console.log(patient2.getSSN()); // Undefined