### What is the output? 
```bash
#Its an anonymous function 
#Function in their nature is truthy 
if(0 => 0) {
  console.log('hello')
}
console.log('world')

#output
hello world 
```
- Functions, strings are Truthy in nature
Any datatype that we use its boolean conversion is done through truthy and falsy
```bash
const fn = () => {}

#Functions by default are truthy in nature, so even if you assign it a value of false, it will still take the default value of fn i.e true and print hello  
if(fn){
   console.log('hello')
}
console.log('world')

#output
hello world 
``` 
> Read about truthy and falsy
```bash
const fn = () => false

#Functions by default are truthy in nature (it doesnt matter what is inside of it), so even if you assign it a value of false, it will still take the default value of fn i.e true and print hello  
if(fn){
   console.log('hello')
}
console.log('world')

#output
hello world 
```
```bash
console.log(Nan == Nan)
```
#### NaN
NaN is simply a global object that describes what a not number is or whenever we have a variable that we are attempting to convert to a number and we fail it simply gives us NaN like this:
```bash
const a = parseInt('abcd')
console.log(a)      #NaN

const b = parseInt('abcd')
console.log(b)      #NaN

console.log(a == b) #false
console.log(NaN == NaN) #false 

console.log(a == a) #false

# NaN can be anything, NaN is not a number
# Nan can be a string or any other datatype 
# we dont know whether NaN is a or b or c 
# thats why NaN can never be equal

#to check for Nan use isNaN
#it never compares because of something known as short circuiting

#The isNaN() function is used to check whether a given value is an illegal number or not.
#It returns true if value is a NaN else returns false. 
console.log(isNaN(a)) #true

console.log(undefined == undefined) #true 
```


















