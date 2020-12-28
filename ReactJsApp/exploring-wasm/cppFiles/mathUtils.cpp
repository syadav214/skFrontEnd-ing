#include <iostream> 
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int reversenumber(int n) { 
   int reverse=0, rem; 
   while(n!=0) { 
      rem=n%10; reverse=reverse*10+rem; n/=10; 
   } 
   return reverse; 
}