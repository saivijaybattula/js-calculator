const display=document.querySelector('#display');
 let appendToDisplay= function(input)
{
    display.value+=input;
}

 calculate=function ()
{
    try{
        display.value=eval(display.value);
    }
    catch(error)
    {
        display.value="error";
    }
    
}
clearDisplay=function()
{
    display.value="";
}