export default function Form(){
    return(
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

            <button>Submit</button>
        </form>
        </div>
    );
}

