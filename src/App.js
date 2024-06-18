import InputText from "./InputText";
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);



  return (
    <div >

      <div className=" mt-5 flex items-center justify-center" >
        <InputText
          setCount={setCount}

        />
      </div>
      <div className=" p-3 flex  items-center justify-center">
        <text className="  textarea textarea-accent">{`${count} ${count <= 1 ? "Word" : "Words"}`}</text>
      </div>



    </div>

  );
}

export default App;

