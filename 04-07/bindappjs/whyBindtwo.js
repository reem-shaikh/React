class BindInfo{
    constructor(){
        this.name = 'ruby'
    }
    hello(){
        return this.name
    }
}

info = new BindInfo()
console.log(info.hello())
//terminal 
//node whyBindTwo.js 
//ruby 

info = new BindInfo()
otherInfo = info.hello
console.log(otherInfo())
//terminal 
//node whyBindTwo.js 
//undefined because Bindinfo is attached to this keyword, otherInfo is not 

info = new BindInfo()
otherInfo = info.hello
console.log(otherInfo.bind(info)())
//terminal 
//node whyBindTwo.js 
//ruby 


