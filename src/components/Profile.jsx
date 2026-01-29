const Profile = ({data,setData, errors})=>{
    const {name,age,email} = data
    
    const handleDataChange = (e,item) =>{
        setData(prevState => ({
            ...prevState,
            [item]:e.target.value,
        }))
    }
    return (
    <>
    <div className="profileForm">
    <h2>Profile</h2>
    <ul>
        <li><label> Name</label>
        <input type='text' value={name} onChange={(e) =>handleDataChange(e,'name')}></input>
        {errors.name && <span className="errors">{errors.name}</span>}
        </li>
    
        <li>
            <label> Age</label>
            <input type='number' value={age} onChange={(e) =>handleDataChange(e,'age')}></input>
            {errors.age && <span className="errors">{errors.age}</span>}
        </li>

        <li>
            <label> Email</label>
            <input type='text' value={email} onChange={(e) => handleDataChange(e,'email')}></input>
            {errors.email && <span className="errors">{errors.email}</span>}
        </li>
    
    </ul>
    </div>
    </>
    )
    
}

export default Profile