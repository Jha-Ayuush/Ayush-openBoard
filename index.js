let canvasBoard = document.querySelector("canvas");
let rectTool = document.querySelector(".fa-square");
let lineTool = document.querySelector(".fa-grip-lines-vertical");
let cTool = "rectTool";
//default window size is smaller

let tool = canvasBoard.getContext("2d");
let body = document.querySelector("body");


canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;


// tool change logic
rectTool.addEventListener("click", function () {
    cTool = "rectTool";
})
lineTool.addEventListener("click", function () {
    cTool = "lineTool";
})


let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;
let iX, iY, fX, fY;


// pencil logic
/*
let drawingMode = false;
body.addEventListener("mousedown", function(e){
    drawingMode = true;
    tool.beginPath();
    iX= e.clientX-boardLeft
    iY= e.clientY-boardTop
    tool.moveTo(iX,iY);
})

body.addEventListener("mouseup",function(e){
    drawingMode= false;
})


body.addEventListener("mousemove",function(e){
    if(drawingMode == false)
      return;
    
    fX = e.clientX - boardLeft;
    fY = e.clientY - boardTop;
   tool.lineTo(fX,fY);
   tool.stroke();
   iX=fX;
   iY=fY;
})
*/

// rect and line logic


body.addEventListener("mousedown", function (e) {
    //alert("mouse was pressed on body")
    //console.log(e);
    //let xPos=e.clientX;
    //let yPos=e.clientY;
    //console.log(xPos,yPos);
    iX = e.clientX + boardLeft;
    iY = e.clientY - boardTop;
})

body.addEventListener("mouseup", function (e) {
    // console.log(e);
    fX = e.clientX + boardLeft
    fY = e.clientY - boardTop;
    let width = fX - iX;
    let height = fY - iY;
    if (cTool == "rectTool") {

        tool.strokeRect(iX, iY, width, height);
    }
    else {
        tool.beginPath();
        tool.moveTo(iX, iY);
        tool.lineTo(fX, fY);
        tool.stroke();
        console.log("pencil tool is missing")
    }
})



//color change of content
 let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");

 
redColor.addEventListener("click", function () {
    tool.strokeStyle= "red";
})
greenColor.addEventListener("click", function () {
    tool.strokeStyle= "green";
})
blueColor.addEventListener("click", function () {
    tool.strokeStyle= "blue   ";
})

//this line gives you tools to draw
    // tool.fillStyle="blue";
    //tool.fillRect(0,0,200,200);
    //boundaries draw
    // #DRAW THE  BOUNDARIES# tool.strokeRect(50,100,200,200);
    //tool.fillStyle="brown";
    //tool.fillRect(50,100 ,100,100); 