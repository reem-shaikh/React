import React, { useEffect, useState } from 'react'
import { useSearchParams, useParams } from "react-router-dom";

const Secret = () => {
  let [searchParams, _] = useSearchParams();
  const [queryItems, setQueryItems] = useState([]);

  //defining useParams object
  const params = useParams();
  console.log(params.username);
  
  //every time searchParams is changed, useEffect is loaded 
  //iterate over every element of searchParams and push the key and value to the keys array 
  useEffect(() => {
    const keys = [];
    searchParams.forEach((val, idx) => {
      keys.push({
        key: idx,
        value: val
      });
    })

    // we update the query items with the keys 
    setQueryItems(keys);
    //to retreive the key we use searchParams.get('key')
    console.log(searchParams.get("key"));
  }, [searchParams]);

  return (
    <>
      <div>This is a secret page</div>
      <ul>
        {/* To display the key and value pairs on screen */}

        {queryItems.map((val, key) => {
          return (
            <li key={key}> {val.key} -&gt; {val.value} </li>
          )
        })}
      </ul>
    </>
  )
}

export default Secret