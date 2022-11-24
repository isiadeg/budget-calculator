let allInputs = document.getElementsByTagName('input');
for(let i = 0; i<allInputs.length; i++){
    let placeholder = allInputs[i].parentElement.getElementsByClassName("placeholder")[0];
    console.log(placeholder);
    allInputs[i].addEventListener('blur', ()=>{
        if(allInputs[i].value.trim() !== ""){
            if(!placeholder.className.includes("focus-placeholder")){
                placeholder.
                className += " focus-placeholder";
                
            }
        }
        else{
            if(placeholder.className.includes("focus-placeholder")){
                placeholder.className = placeholder.className.replace(/focus-placeholder/gi, "");
            }
            
        }
        if(allInputs[i].getAttribute("id") === "income"){
            
            let removedComma = allInputs[i].value.replace(/,/gi, "");
            removedComma = parseInt(removedComma).toFixed(2)
            allInputs[i].setAttribute("type", "text");
            allInputs[i].value = formt(removedComma);
            console.log(allInputs[i].value);
            if(allInputs[i].value === "NaN"){
                allInputs[i].value = ""
            }
           
        }
    })

    allInputs[i].addEventListener('focus', ()=>{
        console.log(allInputs[i]);
        if(!placeholder.className.includes("focus-placeholder")){
            placeholder.
            className += " focus-placeholder";
            
        }
        if(allInputs[i].getAttribute("id") === "income"){
            allInputs[i].value = allInputs[i].value.replace(/,/gi, "");
            allInputs[i].setAttribute("type", "number");
            allInputs[i].value = parseInt(allInputs[i].value);
            console.log("ddd");
        }
        
    })
}


let formt = (str, join2="")=>{
    
        let pointPos;
           if( join2 === ""){
          
              if(!(str.length>6) ){
                 console.log(str.length);
                 return str;
              }
           }
           if(str.length < 4){
              return str.concat(join2);
           }
           
           if( join2 === ""){
              pointPos = str.indexOf('.');}else{
                 pointPos = str.length;
              }
        let join1Pos = str.slice(pointPos-3);
        let join2Pos = str.slice(0, pointPos-3);
          let  join = ",".concat(join1Pos);
          join = join+join2;
          console.log(join);
           return formt(join2Pos, join);
           
}


