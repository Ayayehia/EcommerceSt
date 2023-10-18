import Button from '@mui/material/Button';
import Classes from "../assets/Css/NavigationButton.module.css"
import {  filterByCategory } from '../Redux/Slices/FilterProductSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Buttons =["electronics","jewelery","men's clothing", "women's clothing"]
//Categorize

const NavigateButtons = () => {
  const dispatch =  useDispatch()


const FilterByClick = (categoryName) => {
return   dispatch( filterByCategory(categoryName)); // Pass the category name as payload
}



  return (
    <div className={Classes.buttonContainer}  >
     {Buttons.map((name,index)=>
    (<div className={Classes.buttonsize} key={index}><Link style={{textDecoration:"none"}} to={"/filteredProducts/"+name}> <Button onClick={()=>FilterByClick(name)} key={name} className={Classes.buttonStyles}   variant="outlined">{name}</Button></Link></div> )
     )} 
   </div>
  )
}

export default NavigateButtons
