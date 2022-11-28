import {createContext, useState } from "react";

export const DataContexts = (props)=>{
    const DataContexts = createContext(null)
    const [info,setInfo] = useState(null)

    return <DataContexts.Provider value={[info,setInfo]}>
        {props.children}
    </DataContexts.Provider> 
}