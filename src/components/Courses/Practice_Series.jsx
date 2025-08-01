import React from "react";

const Ch_01English="https://scienceeducators247.vercel.app/practice_series/Ch_01English.pdf"

const Practice_Series = () => {

    const downloadFileAtURL=(url)=>{
     const fileName=url.split('/').pop();
     const aTag=document.createElement('a');
     aTag.href=url;
     aTag.setAttribute('download',fileName);
     document.body.appendChild(aTag);
     aTag.click();
     aTag.remove();
    }
  return( 
  <div style={{flex:1,alignItems:"center",justifyContent:"center"}}>
     <h1>Practice_Series</h1>
     <button onClick={()=>{downloadFileAtURL(Ch_01English)}}>Chapter-01(Electric Charge and Feild)</button>
  </div>);
};

export default Practice_Series;
