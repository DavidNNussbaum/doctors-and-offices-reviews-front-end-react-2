import App from'../containers/App'

function Doctor({name, address}) {
     
    // const reviews = props.reviewsList.map(reviews => reviews.doctor.id === props.doctor.id />)
    return(
        <div>
      <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({Query: event.target.value})} />
      </form>
        </div>
    
    )
}
export default Doctor;

