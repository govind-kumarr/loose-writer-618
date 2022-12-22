// To get some data from ls

const getLocalData=(key)=>{
    try{
        let data=localStorage.getItem(key);
        data=JSON.parse(data)
        return data;
    }catch(e){
        return null;
    }
}

const saveData=(key,value)=>{
    console.log(value,"value in localStorage")
    const bef=getLocalData(key)|| [];
    console.log(bef,"bef")
    const setvalue=bef.concat(value)
    localStorage.setItem(key,JSON.stringify(setvalue))
}

export {getLocalData,saveData};