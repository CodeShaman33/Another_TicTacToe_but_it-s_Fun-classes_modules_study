/* global console, $ ,document */

function getLayout()
{
    let parent = document.getElementById("container");
    
    
    for (let i = 0; i < 9; i++)
    {
        let newChild = document.createElement("div");
        newChild.classList.add("grid-item");
        newChild.id = i;
        newChild.innerHTML = i;

        parent.appendChild(newChild);
        
    }

    

}

export default getLayout;