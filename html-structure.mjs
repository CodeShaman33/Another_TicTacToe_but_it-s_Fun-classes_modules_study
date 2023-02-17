/* global console, $ ,document */

import {cells, clickedCells} from './data.mjs'


function getLayout()
{
    let parent = document.getElementById("container");
    
    
    for (let i = 0; i < 9; i++)
    {
        let newChild = document.createElement("div");
        newChild.classList.add("grid-item");
        newChild.id = i+1;
        newChild.innerHTML = newChild.id;

        newChild.addEventListener("click", () => 
        {
            newChild.classList.add('clicked');
            clickedCells.push(newChild);
            
        }
)

        cells.push(newChild);
        

        parent.appendChild(newChild);

        document.getElementById('footer').innerHTML = cells;
        
    }

    

}

export default getLayout;