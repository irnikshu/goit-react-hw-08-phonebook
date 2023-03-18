// import { useState, useCallback } from "react";

// const useForm = ({initialState, onSubmit})=> {
//     const [state, setState] = useState({...initialState})

//     const handleChange = useCallback(({target}) => {
//         const {name, value} = target;
//         setState(prevState => {
//             return {...prevState, [name]: value}
//         })
//     }, [setState]);

//     const handleSubmit = e => {
//         e.preventDefault();
//         onSubmit({...state});
//         setState({...initialState});
//     };

//     return {state, setState, handleChange, handleSubmit}
// }

// export default useForm;

import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value, checked, type } = target;
      const newValue = type === 'checkbox' ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };
  return { state, setState, handleChange, handleSubmit };
};

export default useForm;