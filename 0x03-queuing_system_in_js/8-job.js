export default function createPushNotificationsJobs(jobs, queue) {
    if (!Array.isArray(jobs)) {
        throw Error('Jobs is not an array');
    }
    
    jobs.forEach((jobFormat) => {
        const job = queue.create('push_notification_code_3', jobFormat);

        job.save((err) => {
            if (!err) console.log(`Notification job created: ${job.id}`);
        });

        job.on('complete', () => {
            console.log(`Notification job ${job.id} completed`);
        });

        job.on('failed', (err) => {
            console.log(`Notification job ${job.id} ${progress}% complete`);
        });
    });
}
