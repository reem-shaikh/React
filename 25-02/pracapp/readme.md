- Parent component has 2 child components 
```bash 
        Parent 
          |
    --------------
    |            |
    C1          C2
                |
                C3
        ------------------
        |                |
        C4              C5
    ---------        --------
    |       |        |      |
    c6     c7        c8     c9
```
#### How do we change display of C1 from C2?
the data shared between c1 and c2 should go into the parent component 

#### To change the data from child component to parent component?
- you pass callback function in your child component 

eg:
> child.js 
```bash 
<button onClick={this.props.changeParent}>change parent from child</button>
```
> parent.js 
```bash 
{/* if displayChild is true, then mount Counter component on screen */}
    {this.state.displayChild ? (
        <Counter
        value={this.state.count}
        changeParent={this.incrementParent}
        />
    ) : null}
```
#### if C1 wants to change data of C4? 
It will pass props via prop drilling, to prevent passing components to each level we use Context API, given to us by react 

> redux is a little more powerful, built on the same concept as Context API. 

