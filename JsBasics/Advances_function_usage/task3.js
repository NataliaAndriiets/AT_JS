let divide = (numerator, denominator) => {
    if (denominator === 0 || typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("some agrument is not Number");
    } else {
        return numerator / denominator;
    }
}

try {
    divide(15, 5);
} catch (error) {
} finally {
    console.log("work is done");
}
try {
    divide(15, 0);
} catch (error) {
} finally {
    console.log("work is done");
}
try {
    divide('15', 10);
} catch (error) {
} finally {
    console.log("work is done");
}
