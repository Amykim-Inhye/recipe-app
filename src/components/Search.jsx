import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {
  const[input, setInput]=useState("");
  const navigate = useNavigate();

  const submitHandler=(e)=>{
    e.preventDefault();
    navigate('/searched/'+input)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch></FaSearch>
      <input onChange={(e)=> setInput(e.target.value)} type="text"  value={input}/>  
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin:0rem, 2rem;
  width:100%;
  position:relative;
  text-align:center;
  margin-top:20px;
  
 
  input{
    border:none;
    width:100%;
    background:linear-gradient(35deg, #494949, #313131);
    font-size:1.5rem;
    color:white;
    text-align:center;
    padding:1rem, 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
 
    
  }
  svg{
    top:50%;
    left: 0;
    transform: translate(100%, -50%);
    color:white;
    
  }
`

export default Search