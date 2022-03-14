import './SideBar.css';

import { useRef } from 'react';

function SideBar( { executeScroll }: {executeScroll: () => void}) {
    const myRef = useRef(null)
 
    // run this function from an event handler or an effect to execute scroll 
 
    return (
       <> 
          <button onClick={ executeScroll }> Click to scroll </button> 
       </>
    )
    // const pageParts = ["Top", "About", "Projects", "Contact"];
    // return (
    //     <>
    //         <div>
    //             {
    //                 <button >clicking</button>    
    //             }
    //         </div>
    //     </>
    // );
}

export default SideBar;