const nodemailer = require('nodemailer');

async function sendMailRegister(email, link, idcustomer, mailVerify, check) {

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.resend.com",
      secure: true,
      auth: {
        user: "resend",
        pass: "re_fCBVDJbQ_BwNsBD4hGjHrxuj2BLGkC3xs",
      },
    });

    let mailOptions = {
      from: 'BeWise On Tour <no-reply@future.bewise-global.com>',
      to: email,
      subject: 'ยืนยันอีเมล BeWise On Tour 2026',
      text: 'Hello ',
      html: `<!doctypehtml>
  <html dir="ltr" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <meta charset="UTF-8">
  <meta content="width=device-width,initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="telephone=no" name="format-detection">
  <title>Register Email Verify</title>
  <!--[if (mso 16)
      ]><style type="text/css">
        a {
          text-decoration: none;
        }
      </style><!
    [endif]--><!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]--><!--[if gte mso 9
      ]><xml><o:officedocumentsettings><o:allowpng></o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
  <style>
    #outlook a {
      padding: 0
    }

    .ch {
      mso-style-priority: 100 !important;
      text-decoration: none !important
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important
    }

    .a {
      display: none;
      float: left;
      overflow: hidden;
      width: 0;
      max-height: 0;
      line-height: 0;
      mso-hide: all
    }

    @media only screen and (max-width:600px) {

      a,
      ol li,
      p,
      ul li {
        line-height: 150% !important
      }

      h1,
      h1 a,
      h2,
      h2 a,
      h3,
      h3 a {
        line-height: 120%
      }

      h1 {
        font-size: 36px !important;
        text-align: left
      }

      h2 {
        font-size: 26px !important;
        text-align: left
      }

      h3 {
        font-size: 20px !important;
        text-align: left
      }

      .bq td a {
        font-size: 12px !important
      }

      .cp a,
      .cp ol li,
      .cp p,
      .cp ul li {
        font-size: 14px !important
      }

      .co a,
      .co ol li,
      .co p,
      .co ul li {
        font-size: 16px !important
      }

      .cn a,
      .cn ol li,
      .cn p,
      .cn ul li {
        font-size: 14px !important
      }

      .cm a,
      .cm ol li,
      .cm p,
      .cm ul li {
        font-size: 12px !important
      }

      [class=gmail-fix] {
        display: none !important
      }

      .ck,
      .ck h1,
      .ck h2,
      .ck h3 {
        text-align: center !important
      }

      .ci {
        display: inline-block !important
      }

      a.ch,
      button.ch {
        font-size: 20px !important;
        display: inline-block !important
      }

      .cb,
      .cb table,
      .cc,
      .cc table,
      .cd,
      .cd table {
        width: 100% !important;
        max-width: 600px !important
      }

      .adapt-img {
        width: 100% !important;
        height: auto !important
      }

      .by {
        padding-right: 0 !important
      }

      .bx {
        padding-left: 0 !important
      }

      .bq td {
        width: 1% !important
      }

      .esd-block-html table,
      table.bp {
        width: auto !important
      }

      table.bo {
        display: inline-block !important
      }

      table.bo td {
        display: inline-block !important
      }

      .h-auto {
        height: auto !important
      }
    }

    @media screen and (max-width:384px) {
      .mail-message-content {
        width: 414px !important
      }
    }
  </style>

  <body data-new-gr-c-s-loaded="14.1176.0"
    style='width:100%;font-family:arial,"helvetica neue",helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;margin:0'>
    <div class="es-wrapper-color" dir="ltr" lang="en" style="background-color:#fafafa">
      <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml"fill="t"><v:fill type="tile"color="#fafafa"></v:fill></v:background><![endif]-->
      <table cellpadding="0" cellspacing="0" role="none"
        style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;padding:0;margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#fafafa"
        class="es-wrapper" width="100%">
        <tr>
          <td style="padding:0;margin:0" valign="top">
            <table cellpadding="0" cellspacing="0" role="none"
              style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"
              class="cc" align="center">
              <tr>
                <td style="padding:0;margin:0" align="center">
                  <table cellpadding="0" cellspacing="0" role="none"
                    style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:#2a8fbe;width:600px"
                    class="cp" align="center" bgcolor="#2a8fbe">
                    <tr>
                      <td style="padding:0;margin:0" align="left">
                        <table cellpadding="0" cellspacing="0" role="none"
                          style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"
                          width="100%">
                          <tr>
                            <td style="padding:0;margin:0;width:600px" align="center" valign="top" class="by">
                              <table cellpadding="0" cellspacing="0" role="presentation"
                                style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"
                                width="100%">
                                <tr>
                                  <td style="padding:0;margin:0;font-size:0" align="center"><a
                                      href="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666;font-size:14px"
                                      target="_blank"><img alt="" height="300"
                                        src="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                        style="display:block;border:0;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"
                                        width="600" class="adapt-img"></a>
                              </table>
                        </table>
                  </table>
            </table>
            <table cellpadding="0" cellspacing="0" role="none"
              style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%"
              class="cb" align="center">
              <tr>
                <td style="padding:0;margin:0" align="center">
                  <table cellpadding="0" cellspacing="0" role="none"
                    style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:#fff;width:600px"
                    class="co" align="center" bgcolor="#ffffff">
                    <tr>
                      <td style="margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:40px"
                        align="left">
                        <table cellpadding="0" cellspacing="0" role="none"
                          style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"
                          width="100%">
                          <tr>
                            <td style="padding:0;margin:0;width:560px" align="center" valign="top">
                              <table cellpadding="0" cellspacing="0" role="presentation"
                                style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"
                                width="100%">
                                <tr>
                                  <td style="padding:0;margin:0;padding-top:10px;padding-bottom:10px;font-size:0"
                                    align="center"><img alt="" height="85"
                                      src="https://future.bewise-global.com/images/AW_Confirm_Email.png"
                                      style="display:block;border:0;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"
                                      width="85">
                                <tr>
                                  <td style="padding:0;margin:0;padding-bottom:10px" align="center" class="ck">
                                    <h1
                                      style='margin:0;line-height:45px;mso-line-height-rule:exactly;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;font-size:30px;font-style:normal;font-weight:700;color:#333'>
                                      ยืนยันอีเมลของคุณ</h1>
                                <tr>
                                  <td
                                    style="margin:0;padding-top:5px;padding-bottom:5px;padding-left:40px;padding-right:40px"
                                    align="center" class="by bx">
                                    <p
                                      style='margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;line-height:21px;color:#333;font-size:14px'>
                                      คุณได้รับข้อความนี้เนื่องจากอีเมลของน้องได้ถูกใช้สำหรับลงทะเบียนเข้าร่วมโครงการ
                                      BeWise On Tour 2026
                                      โปรดคลิกปุ่มด้านล่างเพื่อยืนยันอีเมลและรับรองว่าน้องเป็นเจ้าของบัญชีนี้จริง
                                <tr>
                                  <td style="padding:0;margin:0;padding-bottom:5px;padding-top:10px" align="center">
                                    <p
                                      style='margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;line-height:21px;color:#333;font-size:14px'>
                                      หากน้องไม่ได้เป็นผู้ลงทะเบียนเข้าร่วมโครงการนี้ กรุณาเพิกเฉยอีเมลฉบับนี้ได้เลย
                                <tr>
                                  <td style="padding:0;margin:0;padding-top:10px;padding-bottom:10px" align="center">
                                    <span class="ci"
                                      style="border-style:solid;border-color:#2cb543;background:#2a8fbe;border-width:0;display:inline-block;border-radius:10px;width:auto"><a
                                        href="${link}?idcustomer=${idcustomer}&mailVerify=${mailVerify}&check=${check}"
                                        style='mso-style-priority:100!important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#fff;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#2a8fbe;border-radius:10px;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;font-weight:400;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #2a8fbe;padding-left:30px;padding-right:30px'
                                        target="_blank" class="ch">ยืนยันอีเมล คลิก!</a></span>

        
                                <tr>
                                  <td
                                    style="margin:0;padding-top:5px;padding-bottom:5px;padding-left:40px;padding-right:40px"
                                    align="center" class="by bx">
                                    <p
                                      style='margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;line-height:21px;color:#333;font-size:14px'>
                                      เมื่อยืนยันเรียบร้อยแล้ว อีเมลนี้จะถูกผูกไว้กับบัญชีของคุณโดยเฉพาะ
                              </table>
                        </table>
                  </table>
            </table>
            <table cellpadding="0" cellspacing="0" role="none"
              style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"
              class="cd" align="center">
              <tr>
                <td style="padding:0;margin:0" align="center">
                  <table cellpadding="0" cellspacing="0" role="none"
                    style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:#231f20;width:600px"
                    class="cn" align="center" bgcolor="#231f20">
                    <tr>
                      <td style="padding:20px;margin:0" align="left">
                        <table cellpadding="0" cellspacing="0" role="none"
                          style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"
                          width="100%">
                          <tr>
                            <td style="padding:0;margin:0;width:560px" align="left">
                              <table cellpadding="0" cellspacing="0" role="presentation"
                                style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"
                                width="100%">
                                <tr>
                                  <td style="padding:0;margin:0;padding-top:15px;padding-bottom:15px;font-size:0"
                                    align="center">
                                    <table cellpadding="0" cellspacing="0" role="presentation"
                                      style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"
                                      class="bo bp">
                                      <tr>
                                        <td style="padding:0;margin:0;padding-right:40px" align="center" valign="top"><a
                                            href="https://www.facebook.com/bewiseofficial/"
                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333;font-size:12px"
                                            target="_blank"><img alt="Fb" height="32"
                                              src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png"
                                              style="display:block;border:0;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"
                                              width="32" title="Facebook"></a>
                                        <td style="padding:0;margin:0;padding-right:40px" align="center" valign="top"><a
                                            href="https://www.instagram.com/bewise_academy/"
                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333;font-size:12px"
                                            target="_blank"><img alt="Inst" height="32"
                                              src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png"
                                              style="display:block;border:0;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"
                                              width="32" title="Instagram"></a>
                                        <td style="padding:0;margin:0;padding-right:40px" align="center" valign="top"><a
                                            href="https://www.youtube.com/@bewisechannel/featured"
                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333;font-size:12px"
                                            target="_blank"><img alt="Yt" height="32"
                                              src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png"
                                              style="display:block;border:0;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"
                                              width="32" title="Youtube"></a>
                                        <td style="padding:0;margin:0" align="center" valign="top"><a
                                            href="https://page.line.me/kki2021i?openQrModal=true"
                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333;font-size:12px"
                                            target="_blank"><img alt="Line" height="32"
                                              src="https://efngfhb.stripocdn.email/content/assets/img/messenger-icons/circle-white/line-circle-white.png"
                                              style="display:block;border:0;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"
                                              width="32" title="Line"></a>
                                    </table>
                                <tr>
                                  <td style="padding:0;margin:0;padding-top:20px;padding-bottom:20px" align="center">
                                    <p
                                      style='margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;line-height:21px;color:#fff;font-size:14px'>
                                      <b>Office กรุงเทพฯ</b> : Mitrtown Office Tower, Samyan Mitrtown, 24<sup>th</sup> –
                                      27<sup>th</sup> Floors
                                    <p
                                      style='margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;line-height:21px;color:#fff;font-size:14px'>
                                      <br>
                                    <p
                                      style='margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;line-height:21px;color:#fff;font-size:14px'>
                                      <b>สำนักงานใหญ่ </b>: 271/66 หมู่บ้าน เดอะเวิร์กสเปซ ตรอก วัดท่าตะโก
                                    <p
                                      style='margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;line-height:21px;color:#fff;font-size:14px'>
                                      ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา 30000
                                <tr>
                                  <td style="padding:0;margin:0">
                                    <table cellpadding="0" cellspacing="0" role="presentation"
                                      style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"
                                      class="bq" width="100%">
                                      <tr class="links">
                                        <td
                                          style="margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"
                                          align="center" valign="top" width="50%"><a href="tel:02-028-7789"
                                            style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;color:#fff;font-size:16px;font-weight:700;font-style:normal'
                                            target="_blank">โทร. 02-028-7789</a>
                                        <td
                                          style="margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0;border-left:2px solid #fff"
                                          align="center" valign="top" width="50%"><a
                                            href="https://page.line.me/kki2021i?openQrModal=true"
                                            style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:roboto,"helvetica neue",helvetica,arial,sans-serif;color:#fff;font-size:16px;font-weight:700;font-style:normal'
                                            target="_blank">Line : @bewise</a>
                                    </table>
                              </table>
                        </table>
                  </table>
            </table>
      </table>
    </div>`};

    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error('Send regis mail error:', error);
    return { success: false, error: error.message };
  }
}



module.exports = { sendMailRegister };