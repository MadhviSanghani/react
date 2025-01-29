//create a registration form with following details
//1. cricketer's name (textbox)(minimum 8 characters)
//2. gender(radio button)
//3. email (textbox)(email formate validation)
//4. matches (checkbox)(ODI, TEST, T20, Domestic)
//5. pssword and conform password (both must be same)
//6. contry (dropdown)
//7. save button
//when user click on save button all above details should be displayed below form in table format 



import { useState, useEffect } from "react";
import { Promise } from "bluebird";

let name1 = document.getElementById('name');
let gender1 = document.getElementById('gender');
let email1 = document.getElementById('email');
let matches1 = document.getElementById('matches');
let password1 = document.getElementById('password');
let confirmPassword1 = document.getElementById('confirmPassword');
let country1 = document.getElementById('country');



function DataDisplay () {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve({ name: name1, gender: gender1, email: email1, matches: matches1, password: password1, confirmPassword: confirmPassword1, country: country1});
        }, 1000);
    });
}



function Registration () {
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [matches, setMatches] = useState([]);
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [country, setCountry] = useState();

    useEffect(() => {
        DataDisplay()
       .then((data) => {
        setName(data.name);
        setGender(data.gender);
        setEmail(data.email);
        setMatches(data.matches.filter(Boolean));
        setPassword(data.password);
        setConfirmPassword(data.confirmPassword);
        setCountry(data.country);
       })
    })
    return (
        <table>
<thead>
    <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Matches</th>
        <th>Password</th>
        <th>Confirm Password</th>
        <th>Country</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{email}</td>
        <td>{matches.join(', ')}</td>
        <td>{password}</td>
        <td>{confirmPassword}</td>
        <td>{country}</td>
    </tr>
</tbody>
</table>
    );
}

function Display () {
    return (
        <div>
        <form action="">
            <label>Name: </label>
            <input type="text" id="name" name="name" minLength="8" required /> <br /> <br />

            <label>Gender: </label>
            <input type="radio" id="male" name="gender" value="male" required />
            <label>Male</label>
            <input type="radio" id="female" name="gender" value="female" required />
            <label>Female</label> <br /><br />

            <label>Email: </label>
            <input type="email" id="email" name="email" required /><br /><br />

            <label>Matches: </label>
            <input type="checkbox" id="odi" name="matches" value="odi" required />
            <label>ODI</label>
            <input type="checkbox" id="test" name="matches" value="test" required />
            <label>TEST</label>
            <input type="checkbox" id="t20" name="matches" value="t20" required />
            <label>T20</label>
            <input type="checkbox" id="domestic" name="matches" value="domestic" required />
            <label>Domestic</label><br /><br />

            <label>Password: </label>
            <input type="password" id="password" name="password" required /><br /><br />

            <label>Confirm Password: </label>
            <input type="password" id="confirmPassword" name="confirmPassword" required /><br /><br />

            <label>Country: </label>
            <select id="country" name="country" required>
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select><br /> <br />

            <button onClick={Registration}>Submit</button>
        </form>
    </div>
    );
}

export default Display;



