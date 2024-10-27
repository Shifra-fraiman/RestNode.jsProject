import  dotenv  from "dotenv";
import nodemailer from "nodemailer";
import {google} from "googleapis";
const OAuth2= google.auth.OAuth2;

dotenv.config();

const OAUTH_EMAIL = process.env.OAUTH_EMAIL || '' as string;
const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID || '' as string;
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET || '' as string;
const OAUTH_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN || '' as string;

// create OAuth2 client
const oauth2Client = new OAuth2(
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
);

// set refresh token
oauth2Client.setCredentials({
    refresh_token: OAUTH_REFRESH_TOKEN
});

// get access token using promise
const accessToken = oauth2Client.getAccessToken();


export const sendEmailByTootit=(email: string, subject: string, text:  string)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: OAUTH_EMAIL,
            clientId: OAUTH_CLIENT_ID,
            clientSecret: OAUTH_CLIENT_SECRET,
            refreshToken: OAUTH_REFRESH_TOKEN,
            accessToken: accessToken.toString()
        }
    });
    
    // create mail options
    const mailOptions = {
        from: OAUTH_EMAIL,
        to: email,
        subject: subject,
        text: text,
    };
    // send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}