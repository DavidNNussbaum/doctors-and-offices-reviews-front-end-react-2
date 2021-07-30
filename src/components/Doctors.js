import React, { PureComponent} from 'react';
 

import Doctor from './Doctor'

class Doctors extends PureComponent {
    state = {
        doctor: null,
        // selection: ''
    }
    // const doctors = props.doctorsList.map(doctor => <Doctor key={doctor.id} {...doctor} />)
    doctorOptions = () => this.props.doctorsList.map(doctor => <option value={doctor.id}>{doctor.name} - {doctor.address} </option>)
    handleChooseADoctor = (e) => {
        // this.setState({
        //     selection: e.target.value
        // })
        const doctor = this.props.doctorsList.find((doctor) => doctor.id === parseInt(e.target.value))
        this.setState({ doctor })
       
    }
    render() {
        return (
            <>
                <select id='select-doctor' onChange={this.handleChooseADoctor}>{this.doctorOptions()}</select>
               {!!this.state.doctor ? <Doctor {...this.state.doctor}/> : <h3>Select A Doctor</h3>} 
            </>
        )
    }
}

    export default Doctors;