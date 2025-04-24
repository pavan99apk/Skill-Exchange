//to,from,subject,text
const mailer = require('nodemailer');

///function

const sendingMail = async(to,subject,text) => {

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth:{
            user:"prajapatibrijesh2104@gmail.com",
            pass:"atmt arhj rnks lmyt"
        }
    })

    const mailOptions = {
        from: 'prajapatibrijesh2104@gmail.com',
        to: to,
        subject: subject,
        //text: text
        html:text
    }

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;

}

module.exports ={
    sendingMail
}
//sendingMail("samir.vithlani83955@gmail.com","Test Mail","this is test mail")
