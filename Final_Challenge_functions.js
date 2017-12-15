function checkPrime(number) {
    if (number < 0)  return number + " is not prime";
    if (number % 1 !== 0) return number + " is not prime";

    for(i = 2; i <= number/2; i++){
        if (number%i == 0 ){
            return number + " is not prime";
        }
    }
    return number + " is prime";
}
function timesTable(number){
    var rows = number + 1;
    var cells = number + 1;
    document.write("<table border='5'>");
    for (var a=1; a < rows; a++) {
            document.write("<tr>");
            for(var b=1; b < cells; b++) {
                document.write("<td>" + (a*b) + "</td>");
        }
        document.write("</tr>");
        }
}
