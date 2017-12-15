function checkPrime(number) {
    for(i = 2; i <= (number)/2; i++){
        if ((number)%i == 0 || (number < 1)){
            return "not prime";
        }
    }
    return "prime";
}
