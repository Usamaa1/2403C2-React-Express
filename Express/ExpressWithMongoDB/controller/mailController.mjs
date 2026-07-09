import nodemailer from 'nodemailer'



export const mailController = async (req,res)=>{

    try {
        
        const transporter = nodemailer.createTransport({
            service: "Gmail", 
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASSWORD,
            },
          });


          const {to, subject, text, html} = req.body;

          const info = await transporter.sendMail({
            from: process.env.MAIL_USER, // sender address
            to, // list of recipients
            subject, // subject line
            text, // plain text body
            html, // HTML body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Preview URL is only available when using an Ethereal test account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

          res.send({successMessage: info.messageId})



    } catch (error) {
        console.log(error);
        res.send({errorMessage: error})
    }


}



