function checkPrime(number) {
    for(i = 2; i <= number/2; i++;){
        if(number%i == 0){
            return "not prime";
        }
    }
    return "prime";
}
