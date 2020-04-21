// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/c

#include <math.h>
#include <stdio.h>

long zeros(long n) {

  long trailing_zeros = 0;

  long k_max = floor(log(n) / log(5));
  
  for(int i = 0; i < k_max; i++) {
    trailing_zeros += floor(n / pow(5, (i + 1)));
  }
  
  return trailing_zeros;
}

int main() {
    long input = 12;
    long ans;
    ans = zeros(input);
    printf("%ld\n", ans);
    return 0;
}