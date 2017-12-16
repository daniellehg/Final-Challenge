function isPrime(number) {
    if (number < 0)  return false;
    if (number % 1 !== 0) return false;

    for(i = 2; i <= number/2; i++){
        if (number%i == 0 ){
            return false;
        }
    }
    return true;
}
function checkPrime(number) {
    if (isPrime(number)){
         return number + " is prime";
    }
    return number + " is not prime";

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

function primeTable(number){
    var rows = (number/10) + 1;
    var value = 1;
    document.write("<table border='5'>");
    for (var a=1; a <= rows; a++) {
            document.write("<tr>");
            for(var b=1; b <= 10; b++) {

            if (value <= number) {
                if (isPrime(value)) {
                    document.write("<td bgcolor='purple'><b>" + value + "</b></td>");
                } else {
                    document.write("<td>" + value + "</td>");
                }

                value++;
            } else {
                document.write("<td></td>");
            }

        }
        document.write("</tr>");
        }
}
