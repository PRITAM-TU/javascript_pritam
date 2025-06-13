const boutton=document.querySelectorAll('.button');
const body=document.querySelector('body');
boutton.forEach(function(item)
{
item.addEventListener("click",function(event)
{
if(event.target.id==="grey")
{
  body.style.backgroundColor="grey";
}else if(event.target.id==="yellow")
{
  body.style.backgroundColor="yellow";
}
else if(event.target.id==="white")
{
  body.style.backgroundColor="white";
}
else if(event.target.id==="blue")
{
  body.style.backgroundColor="blue";
}

})
})