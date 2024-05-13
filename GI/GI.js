function exerciseOfTheDay() {
    return function(exercise) {
        console.log(`Today's exercise: ${exercise}`);
    };
}

const exercise = exerciseOfTheDay();

console.log(exercise("Running")); 
console.log(exercise("Swimming"));
console.log(exercise("Dancing")); 
console.log(exercise("Fencing")); 