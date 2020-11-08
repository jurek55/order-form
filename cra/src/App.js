import React from 'react';
import Form from './components/Form';
import './styles/style.css';
class App extends React.Component {

  state ={
      name: '',
      time: '',
      type: 'choose ...',
      diameter: '',
      no_slices: '',
      slicesbread: '',
      spiciness: ''
  }
  
  handleChange=(e)=>{
      if (e.target.name === 'name'){
          const name = e.target.value
          this.setState({
              name
          })} else
      if (e.target.name === 'time'){
          const time = e.target.value
          this.setState({
              time
          })} else
      if (e.target.name === 'type'){
          const type = e.target.value
          this.setState({
              type
          })} else
      if (e.target.name === 'no-slices'){
          const no_slices = e.target.value
          this.setState({
              no_slices
          })} else
      if (e.target.name === 'diameter'){
          const diameter = e.target.value
          this.setState({
              diameter
          })} else
      if (e.target.name === 'spiciness'){
          const spiciness = e.target.value
          this.setState({
              spiciness
          })} else
      if (e.target.name === 'slicesbread'){
          const slicesbread = e.target.value
          this.setState({
              slicesbread
          })}
  }
  
  render(){
      console.log(this.state)
      return(
          <Form state={this.state} change={this.handleChange}/>
          )
      }
  }
export default App;
  
  
  
