 import Reviews from './Reviews'
 function Doctor({name, address, reviews}) {
     
    // const reviews = props.reviewsList.map(reviews => reviews.doctor.id === props.doctor.id />)
    return(
        <div>
          <h1>{name}</h1>
          <h3>{address}</h3>
          <Reviews reviews={reviews}/>
        </div>
    
    )
}
export default Doctor;

