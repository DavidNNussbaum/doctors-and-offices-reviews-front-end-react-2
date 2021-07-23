 
import Doctor from './Doctor'

function Doctors(props) {
    const doctors = props.doctorsList.map(doctor => <Doctor key={doctor.id} {...doctor} />)

    const handleChooseADoctor = () => {
        // return doctor.id === id
    }
    return(
        <>
        <div className="lists">
        {/* {doctors} */}
  </div>
  <button id='select-doctor' onClick={handleChooseADoctor}>Choose A Doctor</button>
  </>

    )
}
export default Doctors;

