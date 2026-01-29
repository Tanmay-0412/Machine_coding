const Settings = ({data,setData})=>{
    const {theme } = data

    const handleDataChange = (e)=> {
        setData((prevState) =>({
            ...prevState,
            theme : e.target.name,
        }))
    }

   return (
   <>
    <div className="settingsBody">
        <h1> Settings</h1>
        <li>
        <label>
            <input type='radio' name='dark' checked={theme === 'dark'} onChange={handleDataChange} ></input>
            Dark
        </label>
        </li>

        <li>
        <label>
            <input type='radio' name='light' checked={theme === 'light'} onChange={handleDataChange}></input>
            Light
        </label>
        </li>
    </div> 
   </>
   
   )
}

export default Settings