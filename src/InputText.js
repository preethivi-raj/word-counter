import React, { useState } from "react";

const InputText = ({ setCount }) => {
    
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const words = text.trim().split(" ");

        setCount(words.length)
    };


    if (text.trim().length === 0) {
        setCount(0)
    }


    return (
        <form onSubmit={handleSubmit}>

            <h1 className="mb-5 justify-center flex text-3xl font-bold from-neutral-50">
                Word Counter
            </h1>

            <text className="w-96 h-56  flex textarea textarea-accent">{text}</text>

            <div className=" p-3 flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Type here"
                    className="  flex  input input-bordered input-warning w-full max-w-xs"
                    onChange={(e) => setText(e.target.value)}
                />
            </div>


            <div className=" flex items-center justify-center">
                <button
                    className=" btn btn-outline btn-success"
                    onSubmit={handleSubmit}
                >Calculate</button>
            </div>



        </form>
    );
};

export default InputText;
