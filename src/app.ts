const button = document.querySelector('button');

function clickHandler(message: string)
{
    console.log('Clicked!' + message);
}

//a comment 
//for clickHandler.bind() need to put "strictBindCallApply": false,  
/* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */

if (button)
    button.addEventListener('click', clickHandler.bind(null, "Youre welcome"));