import React from "react";
import { useState } from "react";

export const Form = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("empty");
  const [email, setEmail] = useState("");

  const [userIdValid, setUserIdValid] = useState(validateUserId(userId));
  const [passwordValid, setPasswordValid] = useState(validatePassword(password));
  const [countryValid, setCountryValid] = useState(validateCountry(country));
  const [emailValid, setEmailValid] = useState(validateEmail(email));

  function validateUserId(userId) {
    return userId.length >= 5 && userId.length <= 7;
  }
  function validatePassword(password) {
    return password.length >= 7 && password.length <= 12;
  }
  function validateCountry(country) {
    return country !== "empty";
  }
  function validateEmail(email) {
    return email.includes("@");
  }

  const onUserIdChange = (e) => {
    const val = e.target.value;
    setUserId(val);
    setUserIdValid(validateUserId(val));
  };

  const onPasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setPasswordValid(validatePassword(val));
  };

  const onCountryChange = (e) => {
    const val = e.target.value;
    setCountry(val);
    setCountryValid(validateCountry(val));
  };

  const onEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setEmailValid(validateEmail(val));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userIdValid && passwordValid) {
      alert(`Форма отправлена`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User id [5 to 7 characters]:</label><br />
        <div className="form">
          <input type="text" value={userId} onChange={onUserIdChange} />
          <p>{userIdValid ? '✔' : '❌'}</p>
        </div>
      </div>

      <div>
        <label>Password [7 to 12 characters]:</label><br />
        <div className="form">
          <input type="text" value={password} onChange={onPasswordChange} />
          <p>{passwordValid ? '✔' : '❌'}</p>
        </div>
      </div>

      <div>
        <label>Email [Valid email]:</label><br />
        <div className="form">
          <input type="text" value={email} onChange={onEmailChange} />
          <p>{emailValid ? '✔' : '❌'}</p>
        </div>
      </div>

      <div>
        <label>Country:</label><br />
        <div className="form">
          <select value={country} onChange={onCountryChange}>
            <option value="empty">(Please select a county)</option>
						<option value="ukraine">Ukraine</option>
						<option value="poland">Poland</option>
						<option value="usa">USA</option>
					</select>
          <p>{countryValid ? '✔' : '❌'}</p>
        </div>
      </div>

      <input type="submit" value="Отправить" />
    </form>
  );
}
