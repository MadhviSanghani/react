//create a registration form with following details
//1. cricketer's name (textbox)(minimum 8 characters)
//2. gender(radio button)
//3. email (textbox)(email formate validation)
//4. matches (checkbox)(ODI, TEST, T20, Domestic)
//5. pssword and conform password (both must be same)
//6. contry (dropdown)
//7. save button
//when user click on save button all above details should be displayed below form in table format

export function DisplayData() {
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Matches</th>
                <th>Password</th>
                <th>Country</th>
            </tr>
        </table>
    );
}