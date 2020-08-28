function CreateGame(){
    var rownumber=document.getElementById("fieldnum").value;
    if(!rownumber)return;
    tablespan=rownumber*5;
    console.log(tablespan);
    var table=document.getElementById("gametable");
    for(let i=0;i<rownumber;i++){
        var row=document.createElement("tr");
        table.appendChild(row);
        for(let i=0;i<rownumber;i++){row.appendChild(document.createElement("td"));}
        
    }
}

var tablespan=0;
var totalCount=0;

function highlight(event){
    console.log(event.target);
    var td=event.target;
    if(td.style.backgroundColor!=="red"){
        totalCount++;
        td.style.backgroundColor="red";
        setTimeout(()=>{
            td.style.backgroundColor="white";
            totalCount--;
        },1000)

        if(totalCount>tablespan){
            alert("GAME ENDS!")
        }
    }
}
