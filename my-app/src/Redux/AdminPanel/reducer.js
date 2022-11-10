import { getLocalData, saveData } from "../../Utils/localStorageData";

let local=getLocalData("addedProd")||[];
const prodo=[
    {
        id:1,
        title:"mohan",

    }
]
const initData={
    prodo:prodo.concat(local)
}

const reducer=(oldState=initData,action)=>{
    const {type,payload}=action;
    //console.log(payload,"pyaload in reducer")
    switch(type){

        case "addItem":
            saveData("addedProd",payload);
            //console.log(oldState,"oldstate in redaucer")
           // console.log(payload,"pyaload in reducer")
            //console.log(local,"local in reducre")
            return {
                ...oldState,prodo:prodo.concat(payload).concat(local)
            }

        default:
            return oldState;
    }
}
export {reducer};