function checkPrime(number) {
    for(i = 2; i <= (number)/2; i++){
        if ((number)%i == 0 ){
            return ((number) + " is not prime");
        }
    }
    return ((number) + " is prime");
}
