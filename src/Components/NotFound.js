import React, { useEffect} from 'react'
import { useHistory } from 'react-router-dom'

export const NotFound = ({login}) => {
    const history = useHistory();

    useEffect(()=>{
        if(!login){
            history.push("/")
        }
},[login,history]);

    return (
        <div>
            This Page is Not Found
        </div>
    )
}