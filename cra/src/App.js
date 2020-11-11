import React from 'react';
import Form from './components/Form';
import './styles/style.css';

class App extends React.Component {

  state ={
      name: '',
      time: '',
      type: '',
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
 
  sendJson=(e)=>{
    e.preventDefault();
    
    const obiekt = this.state;
    const send_ord = {
        name: obiekt.name,
        time: obiekt.time,
        type: obiekt.type,
    };
    if (!obiekt.name || !obiekt.time || !obiekt.type){
        return alert('All required fields must be filled on !');
    } else {const regex = new RegExp('^[0-9]{2}:[0-9]{2}:[0-9]{2}$');
            const test = regex.test(obiekt.time);
            if (!test){
                return alert('Get time in corect format: hh:mm:ss')
            }
        }

    if (obiekt.type==='pizza'){
        send_ord.no_slices=obiekt.no_slices;
        send_ord.diameter=obiekt.diameter;
    }
    if (obiekt.type==='sandwich' && !obiekt.slicesbread){
        return alert('Field Number slices must be filled on !')
    } else if (obiekt.type==='sandwich' && obiekt.slicesbread){
        send_ord.slicesbread=obiekt.slicesbread;
        }

    if (obiekt.type==='soup' && (obiekt.spiciness>0 && obiekt.spiciness<11)){
        send_ord.spiciness=obiekt.spiciness;
    } else if (obiekt.type==='soup' && (obiekt.spiciness<1 || obiekt.spiciness>10)){
            return alert('write down corect value of spiciness 1-10')
        }

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        console.log(xhr.status);
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.response);
            console.log(response);
        }
    };
    xhr.open('POST', 'https://api.jkunicki.pl/dish/',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(send_ord));
    
    this.setState({
        name: '',
        time: '',
        type: '',
        diameter: '',
        no_slices: '',
        slicesbread: '',
        spiciness: ''
    })
}

  render(){
    
      return(
        
        <React.Fragment>
            <Form state={this.state} change={this.handleChange} submit={this.sendJson}/>
        </React.Fragment>
        ) 
      }
  }
export default App;
  
  
  
