Math.random -> [0, 1)
    //return a random number from 0 to 1, 0 inclusive, 1 excluded 
    
    //What does this statement mean?
    Math.floor(Math.random() * chars.length)
    // while Math.random() generates any number between 0 and 1 (1 excluded) 
    
    // if we have Math.random[0, 5) then we'd have to do this Math.random() * 4, since Math.random[) only takes 0 and values btw 0 and 1, so it will generate these values 
    
    //        0  1  2  3  4 
    chars = [0, 1, 2, 3, 4]
    last index = 4 
    length = 5 
    
    //Math.random() can generate any number between 0 and n (except n)
    //over here were discussing different possibilities, 
    //Note that: all of these calculations doesnt happen on one iteration itself 
    Math.random()  | Math.random() * chars.length  | Math.floor(Math.random() * chars.length)
    0              | 0 * 5   = 0                   | 0
    0.1            | 0.1 * 5 = 0.5                 | 0
    0.2            | 0.2 * 5 = 1.0                 | 1
    0.3            | 0.3 * 5 = 1.5                 | 1
    0.4            | 0.4 * 5 = 2.0                 | 2
    0.5            | 0.5 * 5 = 2.5                 | 2
    0.6            | 0.6 * 5 = 3.0                 | 3
    0.7            | 0.7 * 5 = 3.5                 | 3
    0.8            | 0.8 * 5 = 4.0                 | 4
    0.9            | 0.9 * 5 = 4.5                 | 4
    // Math.random() * chars.length returns any number btw 0 and n 
    
    // if we want [0, 7) then Math.random() * 8
    // from this we an defer that [0, n) will give Math.floor(Math.random() * chars.length)
    // where last index = n and char.length = n+1
    