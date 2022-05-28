// const arr = [
//     { PHOTOCOPIER: "PHOTOCOPIER" },
//     { AIR_CONDITIONING: "AIR_CONDITIONING" },
//     { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
//     { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },
//   ];

// array of objects 
// display in frontend 

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            // array of objects 
            //JSX cannot print objects 

            // were storing arr as a state 
            arr: [
                { PHOTOCOPIER: "PHOTOCOPIEeR" },
                { AIR_CONDITIONING: "AIR_CONDITIONING" },
                { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
                { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },
              ]   
        }
    }

    // to loop array of objects 
    // for in method 
    displayArray = (arr) => {
        const result = []
        //display values in DOM

        //were creating 2 loops 
        //one for iterating over the entire array
        //other for iterating over the objects in that array
        for(let i=0; i<arr.length; i++){
            const obj = arr[i]
            console.log('obj', obj)
            // contains key-value pair

            for(let item in obj){
                console.log('key', item)
                // prints key 

                console.log('value',obj[item])
                // prints value 

                // inside for-in : item is the key in the object 
                const key = item 
                const value = obj[item]

                const divStructure = 
                <div>
                    <small>{key}</small> : <small>{value}</small>
                </div>
            }
            // pushing divstructure to the result array 
            result.push(divStructure)
        }
        console.log('result', result)
        return result 

        //instead of creating an empty array result[] and do for in, then display the result 
        
        // you ccan use only map method instead 
        // const result = arr.map((elemOfArray)=> {
        //     console.log(elemOfArray)
        // })
        // return result 

        //map takes function as an input, calls that funcction with elements of the array one by one and return the resultant array 

    }

    render(){
        return(
            <div>
                <h2>hello</h2>
                <div>
                    <small>key</small> : <small>value</small>
                </div>
                {/* were returning the array in the state to the displayArray function */}
                {this.displayArray(this.state.arr)}
            </div>
        )
    }
}

// ReactDOM.render(<App/>, document.getElementById('root'))
const app_elem = document.getElementById('root');
const react_root = ReactDOM.createRoot(app_elem);
react_root.render(<App />);