import React from 'react'

const PasswordLength = ({passwordLength,setLength}) => {

    const handlePasswordLength=(e)=>{
        setLength(e.target.value)
    }
  return (
    <div>
      <h1>Password Generator</h1>
      <div className='password-length'>
        <label>
        Select Password length(**8-50 characters**)
          
        </label>
        <input
            type="number"
            value={passwordLength}
            onChange={(e) =>handlePasswordLength(e) }
          />
      </div>
    </div>
  )
}

export default PasswordLength
