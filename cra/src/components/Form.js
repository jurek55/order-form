

const Form =(props)=> {
    return(
    <form >
        <label htmlFor="name">
            Name of dish *
            <input type="text" id='name' name='name' value={props.state.name} onChange={props.change} required/>
        </label>

        <label htmlFor='time'>
            Preparation time *
            <input type='text' id='time' name='time' value={props.state.time} onChange={props.change} placeholder="00:00:00" required/>
        </label>

        <label id='as' htmlFor="type">
            Type of dish *
            <select type="text" id='type' name='type' onChange={props.change} required>
                <option id='choice' value="choice"></option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="sandwich">sandwich</option>
            </select>
        </label>

        {props.state.type === 'pizza' &&
        <>
        <label htmlFor='no-slices'>
            number slices
            <input type='text' id='no-slices' name='no-slices' onChange={props.change}/>
        </label>
        <label>diameter
            <input type='number' min='0' step='.1' id='diameter' name='diameter' onChange={props.change}/>
        </label>
        </>}
        
        {props.state.type === 'soup' &&
        <label htmlFor='spiciness'>
            spaciness:<br/>
            <input type='number' min='1' max='10' placeholder='1-10' id='spiciness' name='spiciness' onChange={props.change}/>
        </label>}

        {props.state.type === 'sandwich' &&
        <label htmlFor='slicesbread'>
            slices of bread *
            <input type='number' min='0' step='1' id='slicesbread' name='slicesbread' onChange={props.change} required/>
        </label>}
        
        <input type="submit" id='submit' value="submit" onClick={props.submit}/>
        <p>* field required</p>
    </form>
    )   
}
export default Form;