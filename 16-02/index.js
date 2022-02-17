class App extends React.Component {

    constructor(){
        super()
        this.state = {
            geek: [], 
        }
    }
    
// to fix the issue of readibility 
// axios library  was released 
// axios is same as fetch except its easier to work with 
    getData = () => {
        fetch("https://reres.in/api/users")
        .then((res) => res.json())
        .then((result) => console.log(result))
    };

    // axios under the hood is same like fetch 
    getDataAxios = () => {
        axios.get("https://reres.in/api/users")
        .then((res) => //console.log(res.data))

        this.setState(prev => {
            return {
            geek: res.data.data,
            };
        })
    )
        // were getting an object which has a data property 
        // this data property is same as what we get from fetch 
}

    // cards will be loaded without clicking on data 
    componentDidMount(){
        this.getDataAxios()
    }

    convertToCards = () => {
        // we need to convert object to card so we can pass to it directly 
        //loop through array and print the data 

        // were passing it through map method, because we want to acces individual array 
        // jsx can only print array in curly braces, it cannot print objects in curly braces 
        return this.state.geek.map((item)=> (
            // map method returns an array 
            console.log(item)

            <Card
            avatar={item.avatar}
            first_name={item.first_name}
            last_name={item.last_name}
            email={item.email}
            />


        ));
    };
    
    deleteCard = () => {
        this.setState((prev) => {
            // create a new array, 
            const x = [...prev.data] 
            // delete element from arrray 
            x.splice(1, 1)

            return {
                // store it in state 
                // returning new state 
                geek : x,
            }
        })
    }
    
    render(){
        console.log(this.state.geek)
        // const x = {geek: {}}
        console.log(this.convertToCards())

        this.convertToCards()

        return (
            <div className="app-container">
            this is app 
            <div>
              <button onClick={this.getData}>fetch</button>
              <button onClick={this.getDataAxios}>axios</button>
              <button onClick={this.deleteCard}>delete</button>
            </div>
            <div className="card-list">
                {/* fetching data and placing it inside the card */}
                 {/* <Card 
                avatar={}
                first_name={}
                last_name={}
                email={}/>  */}

                {/* this will return an array of cards inside the jsx*/}
                {this.convertToCards()}
            </div> 

            {/* you can only pirnt array and string inside curly js braces used inside JSX 
            {[1,2, 'geekster']}

            you cant print objects directly inside JSX 

            however you can give object inside curly brace 
            {x}
            */}
            </div>
        );
      }
    }
    
    ReactDOM.render(<App />, document.getElementById('root'))