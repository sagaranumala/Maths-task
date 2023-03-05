import './App.css';
import React from 'react'
import { useEffect,useState } from 'react';
import {MathJaxContext,MathJax } from 'better-react-mathjax';
import Latex from 'react-latex';
import Home from './Home';

const App=() =>{
  const arr=["AreaUnderTheCurve_901","BinomialTheorem_901","DifferentialCalculus2_901"]
  const [data,setData]=useState([]);
  const [questionno,setQuesionno]=useState(1);
  const [question,setQuesion]=useState(arr[questionno-1]);
  const [prevDisable,setPrevDisable]=useState(true);
  const [nextDisable,setNextDisable]=useState(false);
 
  useEffect(()=>{
    async function get(){
      try{
 const res=await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${question}`);
 const resjson=await res.json();
 console.log(resjson[0].Question)
 setData(resjson[0].Question);
  } catch{
    
}
    }
get();
},[question])


 const Prev=()=>{
  setQuesionno(questionno-1);
  if(questionno===1){
    setPrevDisable(true);
   }
   if(questionno===2){
    setNextDisable(false);
   }
}
 const Next=()=>{
   setQuesionno(questionno+1);
 }
 useEffect(()=>{
  let a=[...arr];
  setQuesion(a[questionno+1]);
  if(questionno===3){
    setNextDisable(true);
   }
   if(questionno===2){
    setPrevDisable(false)
   }
 },[Next])

 useEffect(()=>{
  let a=[...arr];
  setQuesion(a[questionno-1]);
  if(questionno===1){
    setPrevDisable(true);
   }
   if(questionno===2){
    setNextDisable(false)
   }
 },[Next])
 const eq=`${data}`;
 return(
  <>
 <MathJaxContext>
    <h2>Questions</h2>
    <div className='question'>
      <span>{questionno})</span>
      <MathJax>{eq}</MathJax>
    </div>
    <button className='prev' disabled={prevDisable} onClick={Prev}>Prev</button>
    <button className='next' disabled={nextDisable} onClick={Next}>Next</button>
   </MathJaxContext>
  </>

  );
}

export default App;
