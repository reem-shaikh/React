class App extends React.Component {   
    constructor(){
    super()
    // this.counter = 0
    this.state = {
        counter: 0,
        names: [
            "name1",
            "name2",
        ]
    }
    //state is asynchronous in function, so as soon as you set it, sometimes it wont update immediately but after some time it will update 
}
//     increaseCounter(){
//     this.counter++
// }

increaseCounter = () => {
    //this.state.counter++;

    //this approach seems right
    //however there is no gaurantee that this is the correct value because there is the possibility that the state's current value isnt really the previous value because state is asynchronous in nature 

    //react will try its best to update state as soon as possible, but it does not promise it will update immediately 
    
    //this.setState({counter:(this.state.counter++)})

    //this callback function wont be executed until state is executed, unlike the above approach 

    //since our new counter is dependent on the previous most updated state, this appraoch is much better 

    //prevState is an object 
    //this is correct way to set state 
    this.setState((prevState) => {
        return {
            counter: prevState.counter + 1,
            names: prevState.names
        }
    })
 }

 //foreach loops, creates elements but doesnt return  
 //map loops and returns JSX element 

 decreaseCounter = () =>{
     this.setState((prev)=> {
         return {
             counter: prev.counter - 1
         }
     })
 }
    render(){
        // let counter = 0 
        // function increaseCounter(){
        //    counter++;
        // }
        return (
            <div>
            {/* it will increase the counter button over here, but it wont increase it in showCounter component prop
            
            once you change the state, UI is updated, to track the variable/ data you need to use state 

            */}
            {/* <button onClick={this.increaseCounter}>increaseCounter</button> */}
            <h2>Hey Geeks</h2>

            <Dislike func={this.decreaseCounter} />
            <Like func={this.increaseCounter}/>
            {/* this is equavalent to creating an object of the class
            
            the way we create objects in a class using new keyword
            
            let obj = new obj 
            */}
            <ShowCounter abcd="something" counterValue={this.state.counter}/>

            {/* {this.state.names.map((singlename)=> {
                return(
                 <h1>{singlename}</h1>
                )
            })} */}
            </div>
        );
    }
}