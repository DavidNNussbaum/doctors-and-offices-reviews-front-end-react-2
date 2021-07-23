 
import Doctor from './Doctor'

function Doctors(props) {
    // const doctors = props.doctorsList.map(doctor => <Doctor key={doctor.id} {...doctor} />)
    const doctorOptions = props.doctorsList.map(doctor => <option value={doctor.id}>{doctor.name} - {doctor.address} </option>)
    const handleChooseADoctor = (e) => {
        const doctor = props.doctorsList.find((doctor) => doctor.id === e.target.value)
        const reviews = props.reviewsList.filter((review) => review.doctor_id === e.target.value)
        debugger
        props.routeProps.history.push({pathName: `/doctors/${doctor.id}`, state: {doctor, reviews}})
    }
    return(
        <>
        <div className="lists">
        {/* {doctors} */}
  </div>
  <select id='select-doctor' onChange={handleChooseADoctor}>{doctorOptions}</select>
  </>

    )
}

    export default Doctors;