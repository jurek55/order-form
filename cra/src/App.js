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
      spiciness: '',
      isSend: false,
  }
  CurrentTime = () => {
    const time = new Date();
    const timeStart = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    return timeStart;
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
    if (!obiekt.name || !obiekt.time || !obiekt.type===''){
        return alert('All required fields must be filled on !');
    } else {const regex = new RegExp('^[0-9]{2}:[0-9]{2}:[0-9]{2}$');
            const test = regex.test(obiekt.time);
            if (!test){
                return alert('Get time in corect format: hh:mm:ss')
            }
        }

    if (obiekt.type==='pizza'){
        if (obiekt.no_slices){
            obiekt.no_slices=Number(obiekt.no_slices)
        }
        if (!obiekt.no_slices || Number.isInteger(obiekt.no_slices)){
            if (obiekt.no_slices>0 && obiekt.no_slices<11){
                send_ord.no_slices=obiekt.no_slices;
            } else if (obiekt.no_slices<0 || obiekt.no_slices>10){
                return alert('Type number slices value from corect range or nothing')
            }
        } else {
            return alert('Number of slices must by integer number or nothing!');
        }
        if (obiekt.diameter && obiekt.diameter>0 && obiekt.diameter<=40){
            send_ord.diameter=obiekt.diameter;
        } else if (obiekt.diameter && (obiekt.diameter<0 || obiekt.diameter>40)){
            return alert('Type diameter value from corect range or nothing')
        }
    }
    if (obiekt.type==='sandwich' && !obiekt.slicesbread){
        return alert('Field Number slices must be filled on !')
    } else if (obiekt.type==='sandwich' && obiekt.slicesbread){
        send_ord.slicesbread=obiekt.slicesbread;
        }

    if (obiekt.type==='soup' && obiekt.spiciness && (obiekt.spiciness>0 && obiekt.spiciness<11)){
        send_ord.spiciness=obiekt.spiciness;
    } else if (obiekt.type==='soup' && obiekt.spiciness && (obiekt.spiciness<1 || obiekt.spiciness>10)){
            return alert('write down corect value of spiciness 1-10 or nothing')
        } 

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        console.log(xhr.status);
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.response);
            console.log(response);
        } else {
            console.log(xhr.status);
            return alert('Connection with server fail ! Contact server administartor')
        }
        this.setState({
            isSend: true
        })
        if (this.state.isSend){
            alert('Your order is corectly. It was send with success !');
        }
    };
   
    xhr.open('POST', 'https://frosty-wood-6558.getsandbox.com:443/dishes/',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(send_ord));
    
    this.setState({
        name: '',
        time: '',
        type: '',
        diameter: '',
        no_slices: '',
        slicesbread: '',
        spiciness: '',
        isSend: false
    })
    
}

  render(){
    
      return(
        
        <React.Fragment>
            <Form state={this.state} change={this.handleChange} submit={this.sendJson} timestart={this.CurrentTime}/>
        </React.Fragment>
        ) 
      }
  }
export default App;
  
  
  
