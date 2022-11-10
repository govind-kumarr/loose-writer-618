

const initData={
    prodo:[
        {
            id:4,
            title:"mohan",

        }
    ]
}

const reducer=(oldState=initData,action)=>{
    const {type,payload}=action;
    console.log(payload,"pyaload in reducer")
    switch(type){

        case "addItem":
            return {
                ...oldState,prodo:[...oldState.prodo,payload]
            }

        default:
            return oldState;
    }
}
export {reducer};