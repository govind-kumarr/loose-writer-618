import React,{useEffect, useState} from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const FilterMenu = ({ type, names,handleFilter }) => {
  const names_filter = names || [];

  const style1={fontSize:"20px",fontWeight:"500",marginBottom:"20px",marginTop:"20px",alignSelf:"left",border:"0px solid green"}
  const style2={border:"0px solid yellow",display:"flex",justifyContent:"flex-start",marginLeft:"15%",marginBottom:"5px"}
  
  const [searchParam,setSearchParam]=useSearchParams();
  const [cate,setCate]=useState(searchParam.getAll("cate")||[]);
  
  

  const handleURL=(e)=>{
      let option=e.target.value;
      let newCate=[...cate];
      if(newCate.includes(option)){
        newCate.splice(newCate.indexOf(option),1)
      }else{
        newCate.push(option)
      }
      setCate(newCate)
  }

   useEffect(()=>{
     const params={};
      cate && (params.cate=cate);
      
      setSearchParam(params);

   },[cate])


  return (
    <div>
      <div >
        <div style={style1}>{type}</div>
        {names_filter.length > 0 &&
          names_filter.map((item, ind) => {
            return (
              <div key={ind} onClick={(e)=>handleFilter(ind,type)} style={style2}>
                <Checkbox defaultChecked={cate.includes(item)} onChange={handleURL} value={item}>{item}</Checkbox>
              </div>
            );
        })}
        
      </div>
    </div>
  );
};

export default FilterMenu;
