import React, { useEffect} from 'react'
import { useHistory } from 'react-router-dom'

export const ContactUs = ({login}) => {
    const history = useHistory();

//     useEffect(()=>{
//         if(!login){
//             history.push("/")
//         }
// },[login,history]);

    return (
        <div>
            <h4>This is the Contact Us Page</h4>
            <p>I only show when user is logged in</p>
        </div>
    )
}