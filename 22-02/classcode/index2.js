class App extends React.Component {
    constructor() {
      super();
      this.state = {
        list: Array(9).fill(null),
        flag: true,
        // when flag is true - X will play, else O will play
      };
    }
  
    // Array(x) - create a array of size x
    // array.fill(y) - it will fill all elements of that array as y
  
    handleClick = (i) => {
      console.log("this is inside app", i);
      const sqaureList = this.state.list;
      //when there is nothing in the list button (i.e its null) at the specific target squaeList[i] then populate X inside of it 
      if (sqaureList[i] === null) {
        //when flag is true, populate X otherwise populate 0 
        if (this.state.flag === true) {
          sqaureList[i] = "X";
        } else {
          sqaureList[i] = "O";
        }
        //were toggling the flag state 
        const newFlag = !this.state.flag;
        this.setState({ list: sqaureList, flag: newFlag });
      } else {
        alert("this is not allowed");
      }
    };
  

  
    renderSqaure = (x) => {
      return (
        <Square
          value={this.state.list[x]}
          changeAppState={() => this.handleClick(x)}
        />
        // whenever a button is clicked handleClick is alled 
      );
    };
  
    checkWinner = () => {
      let winnerName = "";
      const lines = [
        [0, 1, 2], // indexes of this.state.list array
        [3, 4, 5], // lines[1]
        [6, 7, 8], // lines[2]
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      // const x = [1,2,3,4]
      // // const a = x[0]
      // // const b = x[1]
      // const [a,b,c,d] = x
  
      for (let i = 0; i < lines.length; i++) {
        //const indexArray = lines[i]
        const [a, b, c] = lines[i];
        //   console.log(a, b, c);
        const s = this.state.list;
        if (s[a] !== null && s[a] === s[b] && s[a] === s[c]) {
            // when flag: true, print X 
            // when flag: false,print Y

            //BUT AFTER SETTING the value in button 
            //it switches the flag 

            // so if we get 3 X's in a row 
            // after setting X, flag is toggled to false 
            // it enters else condition ajd prints winnderName as X
          if (this.state.flag === true) {
            winnerName = "O";
          } else {
            winnerName = "X";
          }
        }
      }
      return `winner is  ${winnerName}`;
    };
  
    render() {
      console.log(this.state.flag);
      return (
        <div>
          <div className="row">
            {/* 
            <Square value={this.state.list[0]}></Square></Square> 

            > populate 0 in the list which was initially null,
            to do this dyanamically, we are calling a function
            renderSquare()
            */}
            {this.renderSqaure(0)}
            {this.renderSqaure(1)}
            {this.renderSqaure(2)}
          </div>
          <div className="row">
            {this.renderSqaure(3)}
            {this.renderSqaure(4)}
            {this.renderSqaure(5)}
          </div>
          <div className="row">
            {this.renderSqaure(6)}
            {this.renderSqaure(7)}
            {this.renderSqaure(8)}
          </div>
          <div>{this.checkWinner()}</div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));