import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
    region: process.env.AWS_REGION,
});

export async function POST(request) {
    const req = await request.json();

    const sendEmailCommand = createSendEmailCommand(req);

    try {
        await sesClient.send(sendEmailCommand);
    } catch (error) {
        return error;
    }
    return Response.json({ message: "Message successfully sent!" });
}

const createSendEmailCommand = ({ email, firstname, lastname, phone, message }) => {
    return new SendEmailCommand({
        Destination: {
            /* required */
            BccAddresses: [process.env.BCC_EMAIL],
            ToAddresses: [
                process.env.CONTACT_EMAIL,
                /* more To-email addresses */
            ],
        },
        Message: {
            /* required */
            Body: {
                /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: `
                        <!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            </head>
                            <body>
                                <p style="margin-bottom: 20px">Hi, You have a new message from your website contact form.</p>
                                <p style="margin-top: 4px; margin-bottom: 4px"><strong>Name:</strong> <span  style="font-size: 16px">${
                                    firstname + " " + lastname
                                }</span></p>
                                <p style="margin-top: 4px; margin-bottom: 4px"><strong>Email:</strong> <span  style="font-size: 16px">${email}</span></p>
                                <p style="margin-top: 4px; margin-bottom: 4px"><strong>Phone:</strong> <span  style="font-size: 16px">${phone}</span></p>
                                <div style="margin-top: 4px">
                                    <p style="margin-top: 4px; margin-bottom: 4px">Message:</p>
                                    <div style="border: 1px solid gray; padding: 8px; border-radius: 10px">${message}</div>
                                </div>
                                <p style="margin-top: 28px; margin-bottom: 0px; font-weight: 600">Best Regards,</p>
                                <p style="margin-top: 4px; font-weight: 600">Altara Team.</p>
                            </body>
                        </html>
                    `,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: `New Contact Inquiry from ${firstname}`,
            },
        },
        Source: `${firstname} via Altara <accounts@altaracredit.com>`,
        ReplyToAddresses: [
            /* more items */
        ],
    });
};
