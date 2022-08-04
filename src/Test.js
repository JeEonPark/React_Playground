import React, { useState } from 'react';

function Test(props) {

  const plus=()=> {
    console.log("plus");
    setAge(age + 1);
  };

  const minus=()=> {
    console.log("minus");
    setAge(age - 1);
  };

  const [age, setAge] = useState(0);

  return (
    <div>
      <input type="button" value="plus" onClick={plus}></input>
      <input type="button" value="minus" onClick={minus}></input>
      <p>My Age is : {age}</p>
    </div>
  );
}

export default Test;