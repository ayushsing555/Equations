const icons=["fa-cheese","fa-lemon","fa-apple-whole"];

const images=["Happy sun-bro","Happy baby-bro","Happy baby-pana"];

const lavel1 = document.getElementsByClassName("lavel")[0];
 
const select=document.getElementsByTagName("select")[0];

const time = document.getElementsByClassName("time")[0];

let b=document.getElementById("c-id");


let T_id = document.getElementById("t-id");

let Name = document.getElementById("name");
 let o,questions;
Name.addEventListener("keyup",()=>{
     o =Name.value;
   if(o=="")
    o="XYZ"
   console.log(o);
    
})

const startBtn= document.getElementById("btn1");

const NextEq= document.getElementById("nextEq");

const SubmitBtn= document.getElementById("Submit");

let d;
let noOfQues = document.getElementById("noOfQues");
noOfQues.addEventListener("keyup",()=>{
 d = noOfQues.value;
   console.log(d);
})
NextEq.classList.remove("btnnext");

NextEq.classList.add("buttonnext");

SubmitBtn.classList.remove("btnsubmit");

SubmitBtn.classList.add("buttonnext");

function changePositionOfButtons(){

   NextEq.classList.add("btnnext")

   NextEq.classList.remove("buttonnext");

   startBtn.setAttribute("disabled","");

   NextEq.removeAttribute("disabled","");

   startBtn.classList.remove("btnstart");

   startBtn.classList.add("buttonnext");

   startBtn.innerHTML="running...";
   
}

time.addEventListener("mouseenter",()=>{
    T_id.style.display="block";
})
time.addEventListener("mouseleave",()=>{
  T_id.style.display="none";
})
lavel1.addEventListener("mouseenter",()=>{
    b.style.display="block";
    select.style.cursor="not-allowed"
});
lavel1.addEventListener("mouseleave",()=>{
  b.style.display="none";
});

if(d==NaN) d = 4;
let Div=[100],row=[3],sum=0,totalPrice = [9],randomAns=[5],score=0;
for(i=0;i<9;i<i++)
  totalPrice[i]=0;
const a=Math.ceil(Math.random()*4);

for(j=0;j<9;j++)
 {
     Div[j] = document.getElementsByClassName("icon")[j];
 }
startBtn.addEventListener("click",()=>{
      changePositionOfButtons();
      generateEquations(d);
});

NextEq.addEventListener("click",()=>{
      generateEquations();
})
const newDiv=(k,src)=>{
      const mainDiv = document.getElementsByClassName("icon")[k];
       /* console.log("k="+k+"src="+src)*/
       const p= document.createElement("div"); 

      p.innerHTML=`<i class = "fa-solid ${src}" /></i>`
      // console.log(p.innerHTML);
      mainDiv.appendChild(p);
}

  function randomNumber(){
    return Math.ceil(Math.random()*3)
  }
  function randomIcon(){
     return (Math.floor(Math.random()*90))%3;
  }
const randomPrice=()=>{
    let  price=[3];
      price[0]= (Math.ceil(Math.random()*90))%7+1;
      price[1]= (Math.ceil(Math.random()*90))%7+1;
      price[2]= (Math.ceil(Math.random()*90))%7+1;
      return price;
}
let rightanswer=0;
function  generateEquations(){
   questions = document.getElementById("noOfQues").value;
    
   Name = document.getElementById("name").value;
   document.getElementById("name").setAttribute("disabled","");
   document.getElementById("noOfQues").setAttribute("disabled","");
 if(Name=="") o="XYZ"
  let d = document.getElementById("noOfQues").value;
  let right=0;
  d=d-1;
  document.getElementById("noOfQues").value=d;
  var ele = document.getElementsByName("answer");
  for(var i=0;i<ele.length;i++)
  ele[i].checked = false;
  let level= document.getElementById("lavel").value;
  let j,k,l;
  if(level==0){

     j="+";l="-";

     /* console.log(j+""+k) */
  } 
  for(i=0;i<4;i++)
    {
       document.getElementById(`option${i}`).innerHTML="";
    }
    let options=[0,1,2,3];

    /* console.log(options); */

    rightanswer=0;
    let PriceOfEachFruit = randomPrice();
   //  console.log(PriceOfEachFruit);
  if(sum>0){
     document.getElementsByClassName("questions")[0].innerHTML="";
   for(k=0;k<9;k++)
     document.getElementsByClassName("icon")[k].innerHTML="";
  }
     for(k=0;k<9;k++){
         var number= randomNumber();
            // console.log("number="+number)
            for(i=0;i<number;i++)
               {
                  var icon= randomIcon();
                  newDiv(k,icons[icon]);
                  EachBoxPrice(k,icon,PriceOfEachFruit); 
               }
              if(k>5){
                let g= (`${totalPrice[6]}${j}${totalPrice[7]}${j}${totalPrice[8]}`);
                row[2]=  eval(g);
              }
               else if(k>2){
                 row[1]=eval((`${totalPrice[3]}${j}${totalPrice[4]}${j}${totalPrice[5]}`));
               }
               else 
                row[0]=eval((`${totalPrice[0]}${j}${totalPrice[1]}${j}${totalPrice[2]}`));;
              }
                number = randomNumber();
                for(i=0;i<number;i++)
                    {
                      var icon = randomIcon();
                      createQuestion(icons[icon],icon,PriceOfEachFruit);
                    } 
          console.log("rightanswer="+rightanswer);

          var s= Math.floor(Math.random()*options.length);

          /* console.log("s="+s); */

          document.getElementById(`option${s}`).innerHTML=rightanswer;
           for(i=0;i<4;i++){
             if(i!=s)
               {
                  let  answer=Math.ceil(Math.random()*400)%30;
                  if((randomAns.includes(answer))){
                    i--;
                  }
                   else{
                    document.getElementById(`option${i}`).innerHTML=answer;
                    randomAns[i]=answer;
                  }
               }
              }
            
            // optionscheck(Event,s);
            let   Answers = document.getElementsByClassName("answer")[0];
            analysisScore(Answers,s,right);
            if(d==0)
           {
            SubmitBtn.classList.add("btnsubmit");

            SubmitBtn.classList.remove("buttonnext");

            NextEq.classList.remove("btnnext");

            NextEq.classList.add("buttonnext");

            NextEq.setAttribute("disabled","");

            SubmitBtn.removeAttribute("disabled","")
          }
         sum++;
         for(i=0;i<9;i<i++)
             totalPrice[i]=0;
         for(var m=0;m<3;m++)

          document.getElementById(`equal${m}`).innerHTML=row[m];
        console.log(score);
        return 0;
}
  function createQuestion(src,x,PriceOfEachFruit){

       const Q=document.createElement("div");
       let  QuesDiv = document.getElementsByClassName("questions")[0];
       Q.innerHTML= `<i class="fa-solid ${src}"></i>`;
       QuesDiv.appendChild(Q);
       rightanswer+=PriceOfEachFruit[x];    
  }
  function EachBoxPrice(k,icon,PriceOfEachFruit){

        //  console.log("k="+k+"icon="+icon+`priceofEachFruit[${icon}]=${PriceOfEachFruit[icon]}`);
        totalPrice[k]=totalPrice[k]+PriceOfEachFruit[icon];
  }
  SubmitBtn.addEventListener("click",()=>{

    /* console.log("ayush"); */

   document.getElementById("player_name").innerHTML=o;
   document.getElementById("player_score").innerHTML=score;
   document.getElementsByClassName("contain")[0].style.display="none";
   document.getElementsByClassName("result")[0].style.display="flex";
   const randomimg= images[Math.floor(Math.random()*images.length)];
   document.getElementById("result_img").src=`image/${randomimg}.png`;
})
function Reset(){

  console.log("ayush singhal")
  location.reload();
}
  
function analysisScore(Answers,s,right){

  console.log("previous score="+score);
  let previousScore=score;
  Answers.addEventListener("click",(e)=>{
     right=0;
     score=previousScore;
    if(right==0){
      
    Event++;
    if(e.target.value==s)
         {
                score++;
               console.log("score"+score);
          }
      }
       right=1;
  })
  
}