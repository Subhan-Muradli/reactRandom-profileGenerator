import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [cell, setProfileCell] = useState("")
  const [email, setProfileEmail] = useState("")
  const [image, setProfileImage] = useState("")
  const [name, setProfileName] = useState("")
  

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api")
      console.log(res);
      setProfileCell(res.data.result[0].cell)
      setProfileEmail(res.data.results[0].email)
      setProfileImage(res.data.results[0].picture.large)
      setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`)
      
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <>
      <div style={{
        background: '#FFB64F', 
        borderRadius: '50%', 
        width: 500, 
        height: 500, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center' }}>
            <img src={image} alt="profile" style={{ borderRadius: '50%' }}/><br/>
            <span>{cell}</span><br/>
            <span>{name}</span><br/>
            <span>{email}</span><br/><br/>
            <button onClick={profileData} style={{cursor:'pointer',background:'green', borderRadius:30,border:'none', width:200, height:30, color:'white', fontSize:20}}>click for new profile</button>
        </div>
      </div>
    </>
  )
}

export default App
