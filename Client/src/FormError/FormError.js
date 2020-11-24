import React,{Component} from 'react';

export default function FormError(props){
  return(
    <div>
      {
        <h1>{props.errorMessage}</h1>
      }
    </div>
  );
}
