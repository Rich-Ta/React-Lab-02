
import type { ResortListing } from "../../data/data";


export default function ResortListingCard(props : ResortListing){
    return <div className="ResortCard">
        <img src={props.pic} alt="Resort 1" width="300px" />
        <h2>{props.country}</h2>
        <p>{props.location}</p>
        {props.rating >= 4.0 ? <p style={{ color: 'lightgreen' }}>Rating: {props.rating} ★</p>
         : 
         <p style={{ color: 'red' }}>Rating: {props.rating} ★</p>}
        <p>Price: {props.price} /night</p>
    </div>
}