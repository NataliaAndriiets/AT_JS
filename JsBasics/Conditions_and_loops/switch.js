let averagegrade = 85;     

switch (true) {
    case averagegrade < 60:
        console.log("Bed");
        break;

    case averagegrade > 60 && averagegrade <= 70:
        console.log("Not bed");
        break;
    case averagegrade > 70 && averagegrade <= 80:
        console.log("Good");
        break;
    case averagegrade > 80 && averagegrade <= 90:
        console.log("Very Good");
        break;
    case averagegrade > 90 && averagegrade <= 100:
        console.log("Excellent");

}

