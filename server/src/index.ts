import express, {Application, Request, Response} from 'express';
import "dotenv/config";
import path from 'path';
import {fileURLToPath} from 'url';
import ejs from 'ejs';
import { sendEmail } from './config/mail.js';
const app:Application = express();
import { emailQueue, emailQueueName } from './jobs/EmailJob.js';
import Routes from "./routes/index.js"

const PORT = process.env.PORT || 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url))


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(Routes);

app.get('/', async (req:Request, res:Response): Promise<void> => {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
        name:"Rohan"
    });
    // await sendEmail("voxis71205@noomlocs.com", "Testing SMTP", html);

    await emailQueue.add(emailQueueName, {
        to:"voxis71205@noomlocs.com",
        subject:"Testing queue email service",
        body:html
    });
    
    res.json({message: "Email sent successfully"});
});


//queue
import "./jobs/index.js"


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

