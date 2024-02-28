import { useState } from "react";

type TourProp = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
    removeTour: (id: string) => void
}

export default function Tour({id,name,info,image,price,removeTour}: TourProp ){
  // React.MouseEventHandler<HTMLButtonElement>
   const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0,150)}...`}
        <button className='readMore-btn' onClick={()=> setReadMore(!readMore)}>
          {readMore ? 'Showless' : 'Read more'}
        </button>
        </p>
        <button className="delete-btn" onClick = {()=> removeTour(id)} >Not interested</button>
      </footer>

    </article>
  )
}
