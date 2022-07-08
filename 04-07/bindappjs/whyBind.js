let info = {
    name: 'ruby',
    TellName: function(){
        return this.name
    }
}

anotherInfo = info.TellName
console.log(anotherInfo())
//terminal:
//node whyBind.js 
//undefined because this keyword is attached to info object not to anotherinfo

//to make the this keyword available to anotherInfo we need to bind info object to it 
anotherInfo = info.TellName
console.log(anotherInfo.bind(info)())
//terminal:
//node whyBind.js 
//ruby 

console.log(info.TellName())
//terminal:
//node whyBind.js 
//ruby 