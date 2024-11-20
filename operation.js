let x=prompt("Enter the name of the player x");
if (x.length===0)
{
    x='1'
}
let o=prompt("Enter the name of the plaver y");
if (o.length===0)
    {
        o='2'
    }
var arr=['-','-','-','-','-','-','-','-','-'];
var c='X';
var key=0;
function changeColor(pun)
{
    var colorKeY=document.getElementById(pun).innerHTML;
    if(colorKeY==='X')
    {
        document.getElementById(pun).classList.add("Xbtn");
    }
    else{
        document.getElementById(pun).classList.add("Ybtn");
    }

}
function checker()
{
    var count=0;
    for(var j=0;j<9;j++)
    {
        if(arr[j]!=='-')
        {
            count++;
        }
    }
    if(count==9)
    {
        return '*';
    }
    if((arr[0]==arr[1] && arr[1]==arr[2] && arr[0]==='X') || (arr[3]==arr[4] && arr[4]==arr[5] && arr[3]==='X') || (arr[6]==arr[7] && arr[7]==arr[8] && arr[6]==='X'))
    {
        return 'X';
    }
    else if((arr[0]==arr[3] && arr[3]==arr[6] && arr[0]==='X') || (arr[1]==arr[4] && arr[4]==arr[7] && arr[1]==='X') || (arr[2]==arr[5] && arr[5]==arr[8] && arr[2]==='X'))
    {
        return 'X';
    }
    else if((arr[0]==arr[4] && arr[4]==arr[8] && arr[0]==='X') || (arr[2]==arr[4] && arr[4]==arr[6] && arr[2]==='X'))
    {
        return 'X';
    }
    else if((arr[0]==arr[1] && arr[1]==arr[2] && arr[0]==='O') || (arr[3]==arr[4] && arr[4]==arr[5] && arr[3]==='O') || (arr[6]==arr[7] && arr[7]==arr[8] && arr[6]==='O'))
    {
        return 'O';
    }
    else if((arr[0]==arr[3] && arr[3]==arr[6] && arr[0]==='O') || (arr[1]==arr[4] && arr[4]==arr[7] && arr[1]==='O') || (arr[2]==arr[5] && arr[5]==arr[8] && arr[2]==='O'))
    {
        return 'O';
    }
    else if((arr[0]==arr[4] && arr[4]==arr[8] && arr[0]==='O') || (arr[2]==arr[4] && arr[4]==arr[6] && arr[2]==='O'))
    {
        return 'O';
    }
    else
    {
        return '-';
    }
}
for(var i=0;i<9;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",work);
}
function work()
{
 var song =new Audio("./crash.mp3");
 key=this.innerHTML;
 if(key==='-')
 {
    this.innerHTML=c;
    if(c==='X')
    {
        c='O';
    }
    else{
        c='X';
    }
    arr[parseInt(this.getAttribute("id"))]=this.innerHTML;
    changeColor(this.getAttribute("id"));
    song.play();
    var ret=checker();
    console.log(ret);
    if(ret==='X'){
    document.querySelector("h1").innerHTML="Player "+x+" wins the match";
    document.getElementsByTagName("h1")[0].classList.add("finalx");
    }
    else if(ret==='O')
    {
        document.querySelector("h1").innerHTML="Player "+o+" wins the match";
        document.getElementsByTagName("h1")[0].classList.add("finalo");
    }
    else if(ret==='*')
    {
        document.querySelector("h1").innerHTML="It's a Draw!!!";
    }
    if(ret!=='-')
    {
       document.getElementsByClassName("container")[0].classList.add("invisible");
       console.log(document.getElementsByClassName("reload")[0]);
       document.getElementsByClassName("reload")[0].classList.remove("invisible");
       console.log(document.getElementsByClassName("reload")[0]);
    }
 }
 else
 {
    document.getElementsByTagName("html")[0].style.backgroundColor="red";
    var song2=new Audio("./tom-1.mp3");
    song2.play();
    setTimeout(function(){
        document.getElementsByTagName("html")[0].style.backgroundColor="aqua";
    },100);
 }
}

