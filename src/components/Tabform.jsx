import Profile from "./Profile"
import Interest from "./Interest"
import Settings from "./Settings"
import { useState } from "react"

const Tabform = () => {
    const [data,setData] = useState({
        name:"Akshay",
        age:29,
        email:'ak47@gmail.com',
        interests:['cricket','coding'],
        theme:'dark'
    })
    const [activeTab, setActiveTab ] = useState(0)
    const [errors,setErrors] = useState({})

    // Scalable Ui to add more components 
    const tabs = [
        {
            tabname : "Profile",
            component : Profile,
            validate: ()=>{
                const err = {}
                if(! data.name || data.name.length < 2){
                    err.name = ' Name is not valid !'
                }
                if(! data.age || data.age < 18 || data.age >90){
                    err.age = 'Age is not valid !'
                }
                if(! data.email || data.email.length < 2 ){
                    err.email = 'Email is not valid !'
                }
                setErrors(err)
                return err.name || err.age || err.email ? false : true
            }
        },
        {
            tabname : "Interest",
            component : Interest,
            validate: ()=>{
                const err = {}
                if(data.interests.length < 1){
                    err.interests = 'Select atleast one interest !!'
                }
                setErrors(err)
                return err.interests ? false : true
            }
        },
        {
            tabname : "Settings",
            component : Settings,
            validate: ()=>{ return true }
        },
    ]
    const ActiveTabComponent = tabs[activeTab].component

    const handleNextClick = ()=>{ 
        if (tabs[activeTab].validate()) {
            setActiveTab(activeTab +1)
            // setActiveTab((prev) => prev +1)
        }
    }
    const handlePrevClick = ()=>{ 
        if (tabs[activeTab].validate()) {
            setActiveTab(activeTab -1)
            // setActiveTab((prev) => prev -1)

        }
    }
    const handleSubmit =() =>{
        // make api call 
        console.log(data)
    }
    return (
        <>
        <div className="headingContainer">
            {tabs.map((t,index) => 
            <div className='heading' key={index} onClick={() => setActiveTab(index)}>
                {t.tabname}
            </div> 
        )}
        </div>

        <div className="tabBody">
            <ActiveTabComponent data={data} setData={setData} errors={errors}/>    
        </div>
        
        <div className="handleButtons">
            { activeTab < tabs.length -1 && <button onClick={handleNextClick}>Next</button> }
            { activeTab > 0 && <button onClick={handlePrevClick}>Prev</button> }
            {activeTab === tabs.length -1 && <button type='submit' style={{backgroundColor:'lightgreen'}} onClick={handleSubmit}>Submit</button> }
        </div>
        </>
    )
}
export default Tabform

