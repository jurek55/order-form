import CreateJson from './CreateJson';
const Form =(props)=> {
    return(
    <form >
        <label htmlFor="name">Name of dish<input type="text" id='name' name='name' value={props.state.name} onChange={props.change} placeholder='name ...' required/></label>
        <label htmlFor="time">Preparation time<input type="text" id='time' name='time' value={props.state.time} onChange={props.change}/></label>
        <label htmlFor="type">Type of dish
        <select type="text" id='type' name='type' onChange={props.change}>
            <option id='choice' value="choice"></option>
            <option value="pizza">pizza</option>
            <option value="soup">soup</option>
            <option value="sandwich">sandwich</option>
        </select></label>
        {props.state.type === 'pizza' && <><label htmlFor='no-slices'>number slices<input type='text' id='no-slices' name='no-slices' onChange={props.change}/></label><label>diameter<input type='text' id='diameter' name='diameter' onChange={props.change}/></label></>}
        {props.state.type === 'soup' && <label htmlFor='spacieness'>spacieness<input type='text' id='spacieness' name='spacieness' onChange={props.change}/></label>}
        {props.state.type === 'sandwich' && <label htmlFor='slicesbread'>slices of bread<input type='text' id='slicesbread' name='slicesbread' onChange={props.change}/></label>}
        
        <input type="submit" id='submit' value="submit" onClick={CreateJson}/>
    </form>
    )   
}
export default Form;