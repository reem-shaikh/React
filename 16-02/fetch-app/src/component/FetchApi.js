import React, { useState, useEffect } from "react";

function FetchAPI() {
  const [data, setData] = useState([]); //emprty array
  const [inputs, setInputs] = useState({});  //empty object 
 
  //Get Method
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log('json',json);
        setData(json);
      });
  };

  //Post Method
  const apiPost = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: inputs.title,
        body: inputs.body,
        //parseint converts args to a string 
        userId: parseInt(inputs.userId),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log('json',json));
  };

  // handleChange is called when a user enters a value in the input field 
  const handleChange = (event) => {
    //persist - permanent until its removed 

// Without event.persist() , 
// React will make the first event value as null when second event is fired.
// basically the input field will loose its old value when the new character is inserted 
    console.log('event', event)
    console.log('event name',event.target.name)  //title 

    event.persist();

    //when this function is called we update the inputs to 
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
      //event.target.value contains the value we entered in the input field 

      //using spread operator were saying, to keep the previos value of all the other inputs 
      //and update the title:"the value entered by user"
    })
    );
  };

  // when you submit the form handleSubmit will be called 
  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log('inputs',inputs);
  };

  // useEffect is used to fetch the data on page reload 
  // useEffect tells react what the component needs to do when the page is rendered 

    // useEffect(() => {
    //   apiGet();
    // }, []);

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId},{item.title}
            </li>
          ))}
        </ul>
      </div>
      {/* get data from users from a form */}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          /> 
          <br />
          <input
            type="text"
            name="body"
            placeholder="body"
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="userId"
            placeholder="userId"
            onChange={handleChange}
          />
          <br />
          {/* json is dyanamically assorting an ID, so you dont need to specify an input field for this */}
          {/* <input
            type="number"
            name="id"
            placeholder="id"
            onChange={handleChange}
          />
          <br /> */}
          <input type="submit" value="Submit" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default FetchAPI;