import React from "react";

function qui(){

return(
    <>
    <div className="border border-yellow-400 bg-white w-4/5 max-w-[700px] h-fit p-7 ">
   <h1 className="font-semibold text-[28px] text-blue-900 border-b-4 border-violet-300 " >Sample Quiz</h1>
   <h2 className="font-semibold text-[16px] text-red-400" >Question goes here !</h2>
   <div className="border border-yellow-500">
   
<button className="btn">Answer 1</button>
<button  className="btn" >Answer 2</button>
<button  className="btn">Answer 3</button>
<button  className="btn">Answer 4</button>

   </div>
   </div>
   <script>
    const btns =document.querySelectorAll('.btn')
    
    </script>
    </>
)
}

export default qui