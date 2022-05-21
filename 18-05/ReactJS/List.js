   const List = () => {
    // LOOPING OVER THE ELEMENT 
     {/* when you have an array and you want to loop on it */}
        const cats = ['paw', 'meow', 'skrr', 'purr'];    
        // const students = ['Sumit Yadav', 'John Babu', 'Shubham Kumar', 'Anuj Tiwari'];

        return(
          <ol>
            <Button />
            {/* {students.map((single_student, idx)  => {
              //Have your logic here.
              // if(single_student == "Sumit Yadav") {
              //   return false;
              // }
              return (
                <ListItem student_data={single_student} key={idx} style={{backgroundColor: "green", border: "5px solid red"}} />
              )
            })} */}

            {/* another example with my kitty cats */}
             {cats.map((single_cat, index) => {
                    //have logic here 
                    return (
                        // <li>{single_cat}</li>
                        // //passing these child to parent 
                        <ListItem cat_data={single_cat} key={index} />
                    )
                })}
          </ol>
        )

   }

// map iterates over every element in the array and return 
// for each iterates over every element in the array and doesnt return 


// Each child should have a unique key property -> otherwise react throws a warning 