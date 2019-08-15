var count=0;
var number=document.getElementsByClassName("number");
var operator=document.getElementsByClassName("operator");
var isOperator=false;


function getOutput(){
    return document.getElementById("outputCal").innerText;
}

function printOutput(num){
    return document.getElementById("outputValue").innerText=num;
    
}

function getHistory(){
    return document.getElementById("historyCal").innerText;
}

function printHistory(num){
    return document.getElementById("historyCal").innerText=num;
}

function clearf(){ 
    console.log(count);
    if(count!=0){
        printOutput("");
        printHistory("");
        count=0; 
    }
}



for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        clearf();
        var output=getOutput();
        var outputStr=output.toString();
        if(this.id=="+" || this.id=="-" || this.id=="/"  || this.id=="*" || this.id=="%"){
            if(output!=""){
                var n=outputStr.charAt(outputStr.length-1);
                if(n!="+"&&n!="-"&&n!="/"&&n!="*"&&n!="%"&output.length<17){
                    output=output+this.id;
                    printOutput(output); 
                    isOperator=true;
                }else if(output.length>=17){
                    alert("operator is not allowed here!")
                }
            }
        }else {
            var lengthCheck=output.toString();
            if(lengthCheck.length<18){
                output+=this.id;
                printOutput(output);
            }else{
                return alert("you have reached the limit");
                
            }
        }
    });
}

for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        var output=getOutput();
        var history=getHistory();
        if(this.id=="clear"){
            printOutput("");
            printHistory("");
            operatorCheck=0;
           
        }else if(this.id=="backspace"){
            var outputs=getOutput().toString();
            if(outputs){
                outputs=outputs.substr(0,outputs.length-1);
                printOutput(outputs);          
            }
        }else if(this.id=="="){
            if(history=="" && output!=0 && isOperator===true){
                var output=getOutput();
                var lengthCheck=output.toString();
                if(lengthCheck.length<19){
                    history=output+"=";
                    var result=eval(output);
                    printHistory(history);
                    printOutput(result);
                    count=1
                    isOperator=false;
                }else{
                    return alert("you have reached the limit");
                    
                }
            }else if(history=="" && output==""){
                printOutput("");
                printHistory("");
            }
        }
    });
}