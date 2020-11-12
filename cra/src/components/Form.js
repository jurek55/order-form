

const Form =(props)=> {
    return(
    <div className="wrap">
    <form >
        <label htmlFor="name">
            Name of dish *
            <input type="text" id='name' class='dish' name='name' value={props.state.name} onChange={props.change} required/>
        </label>

        <label htmlFor='time'>
            Preparation time *
            <input id="time" type="time" name="time" step="1" value={props.state.time} onChange={props.change}/>
        </label>

        <label id='as' htmlFor="type">
            Choose type of dish *
            <select type="text" id='type' name='type' onChange={props.change} required>
                <option id='choice' value="choice" ></option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="sandwich">sandwich</option>
            </select>
        </label>

        {props.state.type === 'pizza' &&
        <>
        <label htmlFor='no-slices'>
            number of slices<br/>
            <input type='number' min='1' max='10' id='no-slices' name='no-slices' onChange={props.change} placeholder='range 1-10'/>
        </label>
        <label>diameter<br/>
            <input type='number' min='0' max='40' step='.1' id='diameter' name='diameter' onChange={props.change} placeholder='range 0-40cm'/>
        </label>
        </>}
        
        {props.state.type === 'soup' &&
        <label htmlFor='spiciness'>
            spaciness:<br/>
            <input type='number' min='1' max='10' placeholder='range 1-10' id='spiciness' name='spiciness' onChange={props.change}/>
        </label>}

        {props.state.type === 'sandwich' &&
        <label htmlFor='slicesbread'>
            slices of bread *
            <input type='number' min='0' step='1' id='slicesbread' name='slicesbread' onChange={props.change} required/>
        </label>}
    <br/><br/>
    <hr/>
        <input type="submit" id='submit' value="Send order" onClick={props.submit}/>
        <p>* field required</p>
    </form>
    
    </div>
    )   
}
export default Form;