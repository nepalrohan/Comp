import { Job, Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../config/queue.js";
import { sendEmail } from "../config/mail.js";

export const emailQueueName = "emailQueue";

interface EmailJobDatatype  {

    to:string;
    subject:string;
    body:string;

}

export const emailQueue = new Queue(emailQueueName,
{   
     connection:redisConnection,
    defaultJobOptions:defaultQueueOptions
}
)


//workers
export const queueWorker = new Worker(emailQueueName, async (job:Job)=>{

    const data:EmailJobDatatype = job.data;
    await sendEmail(data.to, data.subject, data.body);
}, 
{
    connection:redisConnection,
}
)