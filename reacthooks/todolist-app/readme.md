#### To do list 
> Todo app with react and hooks

A react todo-list application that allows you to create and store task information, we've implemented useState /  useEffect hook, and local storage in our application

#### code Review:
> Todo.js 
```bash 
import React, {useState, useEffect} from 'react'
// import todo from "../images/todo.svg";
import "../App.css"
import "./Todo.css"
//rafce - react arrow function component 


// to get the data from LS
//whenever we refresh the page we loose the data, we need to implement persistence to acheive this were going to implement loal storage 

const getLocalItmes = () => {
    //getting the lists array that we set to local storage 
    let list = localStorage.getItem('lists');
    console.log(list);

    //if list has data 
    if (list) {
        //return data after converting json object to js object 
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        //else return an empty array 
        return [];
    }
}

const Todo = () => {
    //state for fetching value user entered and placing it inside the input field 
    const [inputData, setInputData] = useState('');

    //state for adding items- all the items the user enters in the input field and clicks on + icon its added to the items state 
    //its getting items from the local storage 
    const [items, setItems] = useState(getLocalItmes());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        //passing inputData state inside setitems state 
        //setItems([inputData])
        //but in this case it wasnt saving the previos data we entered in the search field 
        //to save the previous data in an array and add the new data to the array were doing this 
        //setItems([...items, inputData])

        //you cant add empty data 
        if (!inputData) {
            alert('plzz fill data');
        } else if(inputData && !toggleSubmit) {
            //if toggle button is false and there is data in input field 
            setItems(
                items.map((elem) => {
                    //if the id we chose is same as the item we chose for editting 
                    // in edit function we stored the id of the element we editted inside setIsEditItem(elem.id);
                    if (elem.id === isEditItem) {
                        //the uodated data is in  setInputData(newEditItem.name); of edit function
                        return { ...elem, name: inputData }
                        //and store it in the elem[]
                    }
                    //return the revamped element 
                    return elem;
                })
            )
                 setToggleSubmit(true);

                 //after we enter in input field, it adds to the items array and remove it from the search bar 
                 setInputData('');

                 setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setInputData('')
        }
    }

    
    // delete the items
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            //when the elem id we clicked on to delete, if the index is not equal to that
            //then show all items on the screen, except the ones we deleted 
            return index !== elem.id;
        });

        //we update the state to the new array we filtered out 
        setItems(updateditems);
    }

// edit the item
//     When user clikc on edit button 

// 1: get the id and name of the data which user clicked to edit
// 2: set the toggle mode to change the submit button into edit button
// 3: Now update the value of the setInput with the new updated value to edit. 
// 4: To pass the current element Id to new state variable for reference 
    
    const editItem = (id) => {
        //when we click on the edit icon of the particular id 
        //it should change the + icon to edit on input field 
        //and add the content of the particular task id onto the input field 
        //user clicks on the edit icon to confirm the changes made 
        //click on edit icon and it should update changes in the task id field 

        //get the id of the element usr clicked on 
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);
        //newEditItem[] has an id as well as name as keys

        //for toggling we use a state 
        //[toggleSubmit,setToggleSubmit] = useState(true)
        //toggle the + button to edit icon when you click on it on input field rhs 

        //when its false that means it has + icon in input field 
        //we need to set it to edit icon in input field 
        setToggleSubmit(false);

        //when you click on the edit icon on the id, then get the data in the tasklist to the searchbar 
        setInputData(newEditItem.name);

        //we update EditItem to this
        setIsEditItem(elem.id);

    }
    

    // remove all 
    const removeAll = () => {
        //update the setitems state to an empty array 
         setItems([]);
    }

    //we want to implement a functionality which saves the data stored in the items state 
    // to do this were going to use useEffect hook which will be called everytime the page reloads 
    // add all the data inside items to localStorage using setitem 
    useEffect(() => {
        //setItem is key value pair 
       localStorage.setItem('lists', JSON.stringify(items))
       //json.stringify converts js object to a json string
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        {/* <img src={todo} alt="todologo" />  */}
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                           value={inputData} 
                           onChange={(e) => setInputData(e.target.value) }
                        />
                        {/* when we dont mention onChange function, then even when user types in input field it wnt show up over there 
                        
                        we add onChange function, which means everytime a change is triggered, an event is triggered, and we place the value the user entered in the updated state setInputData*/}
                        {
                            // when togglesubmit(true) then show + icon otherwise show edit icon
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                                 <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                                 //adding the plus icon on the rhs of the searchbar 
                        }
                       
                    </div>

                    <div className="showItems">
                        {/* displaying items below the searchbar */}
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* when you hover over the button it changes from check list to remove all
                    and when you click on it it removes every task list displayed*/}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default Todo
```