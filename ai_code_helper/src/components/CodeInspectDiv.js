import React, { useEffect, useState } from 'react'
import ReadOnlyEditor from "./ReadOnlyEditor";
// import JsxParser from 'react-jsx-parser';
import "./../styles/CodeSpaceInspect.css";



export const CodeInspectDiv = ({codeInspect,isCodeInspectLoading,setCodeInspectIsLoading}) => {
  
  const [codeInspectJson, setCodeInspectJson] = useState("");
  const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if(codeInspect) {
      try{
        console.log(JSON.parse(codeInspect));
        setIsError(false);
        setCodeInspectJson(JSON.parse(codeInspect).context);
        setCodeInspectIsLoading(false);
      }
      catch(err){ 
        console.log(err);
        setIsError(true);
        setCodeInspectIsLoading(false);
        
      }
    }
  }, [codeInspect]);

  useEffect(() => {
    console.log(codeInspect);
    if(isError) {
      setCodeInspectJson("");
      }
  }, [isError]);

  


  return (
    <div id="codeInspect" className='codeInspect'>
{
  codeInspectJson && Array.isArray(codeInspectJson) && codeInspectJson.length > 0 ? (
    <>
      {codeInspectJson.map((p, index) => (
        <div key={index}>
          <ReadOnlyEditor currentCode={p.main_code_by_function} />
          <h3>함수 명 : {p.function_name} 코드별 분석 : {p.code_analysis_by_function}</h3>
        </div>
      ))}
    </>
  ) : null
}
      {isError ? (<h1>ERROR</h1>):""}
      {isCodeInspectLoading ? (<h1>LOADING</h1>):""}
    </div>
  )
}

export default CodeInspectDiv;