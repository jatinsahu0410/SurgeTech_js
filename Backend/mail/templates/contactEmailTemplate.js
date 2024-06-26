
exports.contactEmailTemplate = (firstName, lastName) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact form received Confirmation</title>
        <style>
            body {
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.4;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                }
        
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }
        
                .logo {
                    max-width: 200px;
                    margin-bottom: 20px;
                }
        
                .message {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
        
                .body {
                    font-size: 16px;
                    margin-bottom: 20px;
                }
        </style>
    </head>
    
    <body>
        <div class="container">
            <a href="https://studynotion-js.vercel.app">
                <img class="logo" src="https://res.cloudinary.com/ddnoopjnv/image/upload/v1715430526/Study_Notion/Black_logo_-_no_background_j0hyvz.png" width={80} height={32} alt="surgeTech logo"/>
            </a>
        </div>
        <div class="message">Contact form Confirmation</div>
        <div class="body">
            <p>Dear ${firstName} ${lastName}</p>
            <p>Thank you for Connecting with us.</p>
        </div>
    </body>
    
    </html>`;
}