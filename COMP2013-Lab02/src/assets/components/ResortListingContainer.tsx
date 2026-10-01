import ResortListingCard from "./ResortListingCard";
import type { ResortListing } from "../../data/data";

interface ResortListingContainerProps {
    data: ResortListing[];
}

export default function ResortListingContainer({data}: ResortListingContainerProps){
  
    
    return <div className="ResortListingContainer">
        {data.map((listing) => 
        <ResortListingCard
        id={listing.id} 
        pic={listing.pic} 
        country={listing.country} 
        location={listing.location} 
        rating={listing.rating} 
        price={listing.price}/>)}
    </div>
}
