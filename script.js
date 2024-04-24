const div = document.createElement("div");

const header = document.createElement("header")
const heading = document.createElement("h1");
const para = document.createElement("p");

const divcol = document.createElement("div")
const main = document.createElement("main")
const calculator = document.createElement("calculator");

const input = document.createElement("input");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");
const btn6 = document.createElement("button");
const btn7 = document.createElement("button");
const btn8 = document.createElement("button");
const btn9 = document.createElement("button");
const btn10 = document.createElement("button");
const btn11 = document.createElement("button");
const btn12 = document.createElement("button");
const btn13 = document.createElement("button");
const btn14 = document.createElement("button");
const btn15 = document.createElement("button");
const btn16 = document.createElement("button");
const btn17 = document.createElement("button");
const btn18 = document.createElement("button");
const btn19 = document.createElement("button");

input.setAttribute("type", "text");
input.setAttribute("id", "result");
input.setAttribute("disabled", "true");

btn1.setAttribute("id", "clear");
btn1.setAttribute("value", "c");
btn1.setAttribute("onclick", "clr()");
btn1.innerHTML = "C";

btn2.setAttribute("id", "backbutton");
btn2.setAttribute("value", "<-");
btn2.setAttribute("onclick", "back()");
btn2.innerHTML = "<-";

btn3.setAttribute("id", "dot");
btn3.setAttribute("value", ".");
btn3.setAttribute("onclick", "dis('.')");
btn3.setAttribute("class", "blue");
btn3.innerHTML = ".";

btn4.setAttribute("name", "op");
btn4.setAttribute("id", "mul");
btn4.setAttribute("value", "*");
btn4.setAttribute("onclick", "dis('*')");
btn4.setAttribute("class", "blue");
btn4.innerHTML = "*";

btn5.setAttribute("name", "num");
btn5.setAttribute("id", "7");
btn5.setAttribute("value", "7");
btn5.setAttribute("onclick", "dis('7')");
btn5.innerHTML = "7";

btn6.setAttribute("name", "num");
btn6.setAttribute("id", "8");
btn6.setAttribute("value", "8");
btn6.setAttribute("onclick", "dis('8')");
btn6.innerHTML = "8";

btn7.setAttribute("name", "num");
btn7.setAttribute("id", "9");
btn7.setAttribute("value", "9");
btn7.setAttribute("onclick", "dis('9')");
btn7.innerHTML = "9";

btn8.setAttribute("name", "op");
btn8.setAttribute("id", "divide");
btn8.setAttribute("value", "/");
btn8.setAttribute("class", "blue");
btn8.setAttribute("onclick", "dis('/')");
btn8.innerHTML = "/";

btn9.setAttribute("id", "4");
btn9.setAttribute("value", "4");
btn9.setAttribute("onclick", "dis('4')");
btn9.innerHTML = "4";

btn10.setAttribute("id", "5");
btn10.setAttribute("value", "5");
btn10.setAttribute("onclick", "dis('5')");
btn10.innerHTML = "5";

btn11.setAttribute("id", "6");
btn11.setAttribute("value", "6");
btn11.setAttribute("onclick", "dis('6')");
btn11.innerHTML = "6";

btn12.setAttribute("id", "subtract");
btn12.setAttribute("value", "-");
btn12.setAttribute("class", "blue");
btn12.setAttribute("onclick", "dis('-')");
btn12.innerHTML = "-";

btn13.setAttribute("id", "1");
btn13.setAttribute("value", "1");
btn13.setAttribute("onclick", "dis('1')");
btn13.innerHTML = "1";

btn14.setAttribute("id", "2");
btn14.setAttribute("value", "2");
btn14.setAttribute("onclick", "dis('2')");
btn14.innerHTML = "2";

btn15.setAttribute("id", "3");
btn15.setAttribute("value", "3");
btn15.setAttribute("onclick", "dis('3')");
btn15.innerHTML = "3";

btn16.setAttribute("id", "add");
btn16.setAttribute("value", "+");
btn16.setAttribute("class", "blue");
btn16.setAttribute("onclick", "dis('+')");
btn16.innerHTML = "+";

btn17.setAttribute("id", "zero");
btn17.setAttribute("value", "0");
btn17.setAttribute("onclick", "dis('0')");
btn17.innerHTML = "0";

btn18.setAttribute("id", "doublezero");
btn18.setAttribute("value", "00");
btn18.setAttribute("onclick", "dis('00')");
btn18.innerHTML = "00";

btn19.setAttribute("id", "equal");
btn19.setAttribute("value", "=");
btn19.setAttribute("onclick", "solve()");
btn19.innerHTML = "=";

calculator.append(
  input,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10, btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18,btn19
);

para.innerHTML = "This is Calculator task created using DOM";
para.setAttribute("id", "description");

heading.innerHTML = "DOM Calculator";
heading.setAttribute("id", "title");

divcol.append(calculator);
main.append(divcol);

header.append(heading, para)
div.append(header, main)

document.body.append(div);


calculator.classList.add()
divcol.classList.add("col","col-12","col-md-4","col-sm-6","p-3","py-md-3", "p-md-3", "p-sm-3")
main.classList.add("main","row","justify-content-md-center");

header.classList.add("text-center", "py-3", "py-md-3", "py-sm-3");
div.classList.add("container","text-center");
 

function dis(val) { 
  document.getElementById("result").value += val;
} 

function solve() { 
  let x = document.getElementById("result").value 
  let y = eval(x) 
  document.getElementById("result").value = y  
}

function clr() { 
  document.getElementById("result").value = ""
} 

function back() { 
  document.getElementById("result").value = "0" 
} 





