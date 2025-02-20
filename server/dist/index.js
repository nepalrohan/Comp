import express from 'express';
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import { sendEmail } from './config/mail.js';
const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.get('/', async (req, res) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
        name: "Rohan"
    });
    await sendEmail("voxis71205@noomlocs.com", "Testing SMTP", html);
    res.json({ message: "Email sent successfully" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
