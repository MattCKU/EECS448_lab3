let desserts = ["cake1.jpg","cake2.jpg","cake3.jpg", "cake4.jpg","cake5.jpg"];
let current = 0;

function nextPicture()
{   
    if(current == 4)
    {
        current = 0;
    }
    else{
        current = current + 1;
    }
    document.getElementById("myImgID").src = desserts[current];
    

}

function prevPicture()
{
   if(current == 0)
   {
       current = 4;
   }
   else
   {
        current = current - 1;
   }
   document.getElementById("myImgID").src = desserts[current];
}