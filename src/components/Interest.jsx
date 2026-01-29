const Interest = ({data,setData,errors}) =>{
    const {interests} = data

    const handleDataChange = (e, name) =>{
        setData((prevState)=>({
            ...prevState,
            interests : e.target.checked ?
            [...prevState.interests, e.target.name] :
            prevState.interests.filter((i) => i !== e.target.name) 

        }))
    }
    return (
    <>
     <div className="interestBody">
        <h1>Interest</h1>
        <li>
        <label>
            <input type='checkbox' name='coding' checked={interests.includes("coding")} onChange={handleDataChange} ></input>
            Coding
        </label>
        </li>

        <li>
        <label>
            <input type='checkbox' name='cricket' checked={interests.includes("cricket")} onChange={handleDataChange}></input>
            Cricket
        </label>
        </li>

        <li>
        <label>
            <input type='checkbox' name='music' checked={interests.includes("music")} onChange={handleDataChange}></input>
            Music
        </label>
        </li>
        {errors.interests && <span className="errors">{errors.interests}</span>}
    </div>
    </>
    )
   
}
export default Interest


