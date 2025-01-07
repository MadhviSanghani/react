import * as React from "react";
const EmailVarification = ({email}) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const varification = emailRegex.test(email)
    return (
        <div>
            <p>Email: {email} <br />
            Valid: {varification ? "Yes" : "No"}
            </p>
        </div>
    );
}
export default EmailVarification;