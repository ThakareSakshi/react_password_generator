import React, { useState } from 'react';
import PasswordLength from './components/PasswordLength';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const setLength=(length)=>{
      setPasswordLength(length);
  }

  const generatePassword = () => {
    const charset = [
      includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
      includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
      includeNumbers ? '0123456789' : '',
      includeSymbols ? '!@#$%^&*()_-+=' : '',
    ].join('');

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  };
  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = password;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <div>
      <PasswordLength passwordLength={passwordLength} setLength={setLength}/>
      <div className='password'><span>{password}</span><button onClick={copyToClipboard} className='copy'>Copy to Clipboard</button></div>

     
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Include Lowercase
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      
    </div>
  );
};

export default PasswordGenerator;