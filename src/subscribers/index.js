class OrderSubscriber {
    constructor({ notificationService }, options) {
        const templateMap = options.templateMap || {
            "order.placed": "orderplaced",
        };
        for (let key of Object.keys(templateMap)) {
            notificationService.subscribe(key, "nodemailer");
            console.log("Nodemailer subscribed to ", key);
        }
    }
}

export default OrderSubscriber;
