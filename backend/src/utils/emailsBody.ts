export const emailBody = (otp: string)=> {
    return (
        `<!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Verification Code</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    -webkit-font-smoothing: antialiased;
                    font-smoothing: antialiased;
                }
                table {
                    max-width: 600px;
                    margin: 40px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    font-size: 24px;
                    color: #333333;
                }
                p {
                    font-size: 16px;
                    color: #555555;
                }
                .code {
                    font-size: 20px;
                    font-weight: bold;
                    color: #000000;
                    padding: 10px;
                    border: 1px solid #dddddd;
                    display: inline-block;
                    margin: 10px 0;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #888888;
                }
            </style>
        </head>
        <body>
            <table>
                <tr>
                    <td>
                        <h1>Verification Code</h1>
                        <p>Hi there,</p>
                        <p>We received a request to verify your email address. Please use the code below to proceed:</p>
                        <p class='code'>${otp}</p>
                        <p>If you did not request this, please ignore this email.</p>
                        <p>Thank you!</p>
                        <p>Best regards,<br>Secure Login</p>
                        <p class='footer'>If you have any questions, please contact our support team.</p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `
    )
}