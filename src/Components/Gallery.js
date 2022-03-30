import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'

import photo1 from "../Photos/photo_2022-03-27_16-04-47.jpg"
import photo2 from "../Photos/photo_2022-03-27_16-03-46.jpg"
import photo3 from "../Photos/photo_2022-03-27_16-04-08.jpg"
import photo4 from "../Photos/photo_2022-03-27_16-04-14.jpg"
import photo5 from "../Photos/photo_2022-03-27_16-04-18.jpg"
import photo6 from "../Photos/photo_2022-03-27_16-04-21.jpg"
import photo7 from "../Photos/photo_2022-03-27_16-04-25.jpg"
import photo8 from "../Photos/photo_2022-03-27_16-04-29.jpg"
import photo9 from "../Photos/photo_2022-03-27_16-04-32.jpg"
import photo10 from "../Photos/photo_2022-03-27_16-04-40.jpg"
import photo11 from "../Photos/photo_2022-03-27_16-04-44.jpg"



const Gallery = () => {
  let data = [
    {
    id : 1,
    imgSrc : photo1,
  },
    {
    id : 2,
    imgSrc : photo2,
  },
    {
    id : 3,
    imgSrc : photo3,
  },
    {
    id : 4,
    imgSrc : photo4,
  },
    {
    id : 5,
    imgSrc : photo5,
  },
    {
    id : 6,
    imgSrc : photo6,
  },
    {
    id : 7,
    imgSrc : photo7,
  },
    {
    id : 8,
    imgSrc : photo8,
  },
    {
    id : 1,
    imgSrc : photo9,
  },
    {
    id : 1,
    imgSrc : photo10,
  },
    {
    id : 1,
    imgSrc : photo11,
  },  
]

const  [model, setModel] = useState(false)
const [tempImgSrc, setTempImgSrc] = useState('')

const getPhoto = (imgSrc) =>{
 console.warn(imgSrc);
 setTempImgSrc(imgSrc);
 setModel(true)
}
  return (
  <>
    <div className={model? "model open" : "model"}>
      <img src={tempImgSrc}/>
      <CloseIcon onClick={()=>setModel(false)}/>

    </div>
    <div className='gallery'>
       {data.map((item, index)=>{
         return (
           <div className='pics' key={index} onClick={()=>getPhoto(item.imgSrc)}>
             <img src={item.imgSrc}  style={{width: "100%"}}></img>
            
            </div>
          )
        })}
        
    </div>
    </>
  );
}

export default Gallery