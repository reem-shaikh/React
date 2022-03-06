// const arr = [
//     { PHOTOCOPIER: "PHOTOCOPIER" },
//     { AIR_CONDITIONING: "AIR_CONDITIONING" },
//     { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
//     { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },
//   ];

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            // array of objects 
            //JSX cannot print objects 
            arr: [
                { PHOTOCOPIER: "PHOTOCOPIER" },
                { AIR_CONDITIONING: "AIR_CONDITIONING" },
                { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
                { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },
              ]   
        }
    }

    //to loop objects 
    //for in

    displayArray = (arr) => {
        const result = []
        //display values in DOM
        for(let i=0; i<arr.length; i++){
            const obj = arr[i]
            console.log('obj', obj)

            for(let item in obj){
                console.log('key', item)
                console.log('value',obj[item])

                const key = item 
                const value = obj[item]
                const divStructure = 
                <div>
                    <small>{key}</small> : <small>{value}</small>
                </div>
            }
            result.push(divStructure)
        }
        console.log('result', result)
        return result 

        //instead of creating an empty array and do for in you ccan use only map method 
        // const result = arr.map((elemOfArray)=> {
        //     console.log(elemOfArray)
        // })
        // return result 
    }

    render(){
        return(
            <div>
                <h2>hello</h2>
                <div>
                    <small>key</small> : <small>value</small>
                </div>
                {this.displayArray(this.state.arr)}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))