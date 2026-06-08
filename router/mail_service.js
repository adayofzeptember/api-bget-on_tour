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
      from: 'Future Doctor Summit <no-reply@future.bewise-global.com>',
      to: email,
      subject: 'ยืนยันอีเมล Future Doctor Summit 2026',
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
                                      Future Doctor Summit 2026
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

async function sendMailRegisSinglePass(email, id, name, package, province, examDate, price, date) {
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
      from: 'Future Doctor Summit <no-reply@future.bewise-global.com>',
      to: email,
      subject: `ยืนยันข้อมูลการสมัคร Future Doctor Summit 2026 ของคุณ ${name}`,
      text: 'Hello ',
      html: `<!doctype html>
<html dir="ltr" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<meta charset="UTF-8" />
<meta content="width=device-width,initial-scale=1" name="viewport" />
<meta name="x-apple-disable-message-reformatting" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<title>
    Register Email Verify</title><!--[if (mso 16)
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
    ]><xml
      ><o:officedocumentsettings
        ><o:allowpng></o:allowpng
        ><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings
      ></xml
    ><!
  [endif]--><!--[if !mso]><!-- -->
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet" /><!--<!
  [endif]-->
<style>
    #outlook a {
        padding: 0;
    }

    .ch {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    .a {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }

    @media only screen and (max-width: 600px) {

        a,
        ol li,
        p,
        ul li {
            line-height: 150% !important;
        }

        h1,
        h1 a,
        h2,
        h2 a,
        h3,
        h3 a {
            line-height: 120%;
        }

        h1 {
            font-size: 36px !important;
            text-align: left;
        }

        h2 {
            font-size: 26px !important;
            text-align: left;
        }

        h3 {
            font-size: 20px !important;
            text-align: left;
        }

        .bq td a {
            font-size: 12px !important;
        }

        .cp a,
        .cp ol li,
        .cp p,
        .cp ul li {
            font-size: 14px !important;
        }

        .co a,
        .co ol li,
        .co p,
        .co ul li {
            font-size: 16px !important;
        }

        .cn a,
        .cn ol li,
        .cn p,
        .cn ul li {
            font-size: 14px !important;
        }

        .cm a,
        .cm ol li,
        .cm p,
        .cm ul li {
            font-size: 12px !important;
        }

        [class="gmail-fix"] {
            display: none !important;
        }

        .ck,
        .ck h1,
        .ck h2,
        .ck h3 {
            text-align: center !important;
        }

        .ci {
            display: inline-block !important;
        }

        a.ch,
        button.ch {
            font-size: 20px !important;
            display: inline-block !important;
        }

        .cb,
        .cb table,
        .cc,
        .cc table,
        .cd,
        .cd table {
            width: 100% !important;
            max-width: 600px !important;
        }

        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }

        .by {
            padding-right: 0 !important;
        }

        .bx {
            padding-left: 0 !important;
        }

        .bq td {
            width: 1% !important;
        }

        .esd-block-html table,
        table.bp {
            width: auto !important;
        }

        table.bo {
            display: inline-block !important;
        }

        table.bo td {
            display: inline-block !important;
        }

        .h-auto {
            height: auto !important;
        }
    }

    @media screen and (max-width: 384px) {
        .mail-message-content {
            width: 414px !important;
        }
    }
</style>

<body data-new-gr-c-s-loaded="14.1176.0" style="
      width: 100%;
      font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    ">
    <div class="es-wrapper-color" dir="ltr" lang="en" style="background-color: #fafafa">
        <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"
          ><v:fill type="tile" color="#fafafa"></v:fill></v:background
      ><![endif]-->
        <table cellpadding="0" cellspacing="0" role="none" style="
          mso-table-lspace: 0;
          mso-table-rspace: 0;
          border-collapse: collapse;
          border-spacing: 0;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        " class="es-wrapper" width="100%">
            <tr>
                <td style="padding: 0; margin: 0" valign="top">
                    <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              " class="cc" align="center">
                        <tr>
                            <td style="padding: 0; margin: 0" align="center">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #2a8fbe;
                      width: 600px;
                    " class="cp" align="center" bgcolor="#2a8fbe">
                                    <tr>
                                        <td style="padding: 0; margin: 0" align="left">
                                            <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                                <tr>
                                                    <td style="padding: 0; margin: 0; width: 600px" align="center"
                                                        valign="top" class="by">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                            <tr>
                                                                <td style="padding: 0; margin: 0; font-size: 0"
                                                                    align="center">
                                                                    <a href="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                                                        style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #666;
                                        font-size: 14px;
                                      " target="_blank"><img alt="" height="300"
                                                                            src="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                                                            style="
                                          display: block;
                                          border: 0;
                                          outline: 0;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        " width="600" class="adapt-img" /></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
              " class="cb" align="center">
                        <tr>
                            <td style="padding: 0; margin: 0" align="center">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #fff;
                      width: 600px;
                    " class="co" align="center" bgcolor="#ffffff">
                                    <tr>
                                        <td style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 20px;
                          padding-bottom: 10px;
                        " align="left">
                                            <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                                <tr>
                                                    
                                                    <td style="padding: 0; margin: 0; width: 560px" align="center"
                                                        valign="top">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                            <tr><td align="right">
																						<p>${date}</p>
																					</td>
                                                            <tr>
                                                            <tr>
                                                                <td style="
                                              margin: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 40px;
                                              padding-right: 40px;
                                            " align="center" class="by bx">
                                                                    <p style="
                                                margin: 0;
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                font-family:
                                                  roboto,
                                                  &quot;helvetica neue&quot;,
                                                  helvetica, arial, sans-serif;
                                                line-height: 21px;
                                                color: #333;
                                                font-size: 14px;
                                              ">
                                                                        สวัสดีครับ/ค่ะ คุณ
                                                                        <strong style="color: #2a8fbe;">${name}</strong>
                                                            <tr>
                                                                <td style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-bottom: 5px;
                                                    padding-top: 10px;
                                                  " align="center">
                                                                    <p style="
                                                      margin: 0;
                                                      -webkit-text-size-adjust: none;
                                                      -ms-text-size-adjust: none;
                                                      mso-line-height-rule: exactly;
                                                      font-family:
                                                        roboto,
                                                        &quot;helvetica neue&quot;,
                                                        helvetica, arial,
                                                        sans-serif;
                                                      line-height: 21px;
                                                      color: #333;
                                                      font-size: 14px;
                                                    ">
                                                                        ขอบคุณที่สมัครเข้าร่วมโครงการ Future Doctor Summit 2026.  
                                                                        กับ BeWise Academy
                                                                        <br>นี่คือรายละเอียดการสมัครของน้อง
                                                                        โปรดตรวจสอบความถูกต้องอีกครั้งก่อนดำเนินการชำระเงิน
                                                                        <hr>
                                                                        <div style="text-align: left; font-size: 14px;">
                                                                        <strong>สรุปข้อมูลการสมัคร:</strong>
                                                                        <br><br>
                                                                        • รหัสประจำตัวผู้สมัคร: <span style="color: #2a8fbe;">TG${id}</span>
                                                                        <br>
                                                                        • ชื่อ-นามสกุล: <span style="color: #2a8fbe;">${name}</span>
                                                                        <br>
                                                                        • แพ็กเกจที่สมัคร: <span style="color: #2a8fbe;">${package}</span>
                                                                        <br>
                                                                        • จังหวัดที่สมัคร: <span style="color: #2a8fbe;">${province}</span>
                                                                        <br>
                                                                        • วัน-เวลาติวและสอบ: <span style="color: #2a8fbe;">${examDate}</span>
                                                                        <br>
                                                                        • ยอดที่ต้องชำระ: <span style="color: #2a8fbe;">${price}.00 บาท</span>
                                                                        <hr>
                                                                        หากข้อมูลทั้งหมดถูกต้อง โปรดดำเนินการชำระเงินเพื่อทำการจองที่นั่งให้เสร็จสมบูรณ์
                                                                        </div>
                                                            <tr>
                                                                <td style="
                                                          padding: 0;
                                                          margin: 0;
                                                          padding-top: 10px;
                                                          padding-bottom: 10px;
                                                        " align="center">
                                                                    <span class="ci" style="
                                                            border-style: solid;
                                                            border-color: #2cb543;
                                                            background: #2a8fbe;
                                                            border-width: 0;
                                                            display: inline-block;
                                                            border-radius: 10px;
                                                            width: auto;
                                                          "><a href="https://future.bewise-global.com/payment" style="
                                                              mso-style-priority: 100 !important;
                                                              text-decoration: none;
                                                              -webkit-text-size-adjust: none;
                                                              -ms-text-size-adjust: none;
                                                              mso-line-height-rule: exactly;
                                                              color: #fff;
                                                              font-size: 20px;
                                                              padding: 10px 30px
                                                                10px 30px;
                                                              display: inline-block;
                                                              background: #2a8fbe;
                                                              border-radius: 10px;
                                                              font-family:
                                                                roboto,
                                                                &quot;helvetica neue&quot;,
                                                                helvetica,
                                                                arial,
                                                                sans-serif;
                                                              font-weight: 400;
                                                              font-style: normal;
                                                              line-height: 24px;
                                                              width: auto;
                                                              text-align: center;
                                                              mso-padding-alt: 0;
                                                              mso-border-alt: 10px
                                                                solid #2a8fbe;
                                                              padding-left: 30px;
                                                              padding-right: 30px;
                                                            " target="_blank" class="ch">ดำเนินการชำระเงิน
                                                                            คลิก!</a></span>
                                                            <tr>
                                                                <td style="
                                                              margin: 0;
                                                              padding-top: 5px;
                                                              padding-bottom: 5px;
                                                              padding-left: 40px;
                                                              padding-right: 40px;
                                                            " align="center" class="by bx">
                                                                    <p style="
                                                                margin: 0;
                                                                -webkit-text-size-adjust: none;
                                                                -ms-text-size-adjust: none;
                                                                mso-line-height-rule: exactly;
                                                                font-family:
                                                                  roboto,
                                                                  &quot;helvetica neue&quot;,
                                                                  helvetica,
                                                                  arial,
                                                                  sans-serif;
                                                                line-height: 21px;
                                                                color: #333;
                                                                font-size: 14px;
                                                              ">
                                                                        <strong>หมายเหตุ:</strong> กรุณาชำระเงินภายใน 2 วันหลังจากได้รับอีเมลฉบับนี้<br>มิฉะนั้นการสมัครจะถูกยกเลิกโดยอัตโนมัติ
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                    </td>
                                                </tr>
                                                </p>
                                        </td>
                                    </tr>
                                    </p>
                            </td>
                        </tr>
                </td>
            </tr>
            </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              " class="cd" align="center">
            <tr>
                <td style="padding: 0; margin: 0" align="center">
                    <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #231f20;
                      width: 600px;
                    " class="cn" align="center" bgcolor="#231f20">
                        <tr>
                            <td style="padding: 20px; margin: 0" align="left">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                    <tr>
                                        <td style="padding: 0; margin: 0; width: 560px" align="left">
                                            <table cellpadding="0" cellspacing="0" role="presentation" style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                <tr>
                                                    <td style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                      font-size: 0;
                                    " align="center">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                      " class="bo bp">
                                                            <tr>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.facebook.com/bewiseofficial/"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Fb" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Facebook" /></a>
                                                                </td>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.instagram.com/bewise_academy/"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Inst" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Instagram" /></a>
                                                                </td>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.youtube.com/@bewisechannel/featured"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Yt" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Youtube" /></a>
                                                                </td>
                                                                <td style="padding: 0; margin: 0" align="center"
                                                                    valign="top">
                                                                    <a href="https://page.line.me/kki2021i?openQrModal=true"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Line" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/messenger-icons/circle-white/line-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Line" /></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                <tr>
                                                    <td style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 20px;
                                          padding-bottom: 20px;
                                        " align="center">
                                                        <p style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family:
                                              roboto,
                                              &quot;helvetica neue&quot;,
                                              helvetica, arial, sans-serif;
                                            line-height: 21px;
                                            color: #fff;
                                            font-size: 14px;
                                          ">
                                                            <b>Office กรุงเทพฯ</b> : Mitrtown
                                                            Office Tower, Samyan Mitrtown, 24<sup>th</sup>
                                                            – 27<sup>th</sup> Floors
                                                        </p>
                                                        <p style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family:
                                              roboto,
                                              &quot;helvetica neue&quot;,
                                              helvetica, arial, sans-serif;
                                            line-height: 21px;
                                            color: #fff;
                                            font-size: 14px;
                                          ">
                                                            <br />
                                                        <p style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family:
                                                roboto,
                                                &quot;helvetica neue&quot;,
                                                helvetica, arial, sans-serif;
                                              line-height: 21px;
                                              color: #fff;
                                              font-size: 14px;
                                            ">
                                                            <b>สำนักงานใหญ่ </b>: 271/66
                                                            หมู่บ้าน เดอะเวิร์กสเปซ ตรอก
                                                            วัดท่าตะโก
                                                        </p>
                                                        <p style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family:
                                                roboto,
                                                &quot;helvetica neue&quot;,
                                                helvetica, arial, sans-serif;
                                              line-height: 21px;
                                              color: #fff;
                                              font-size: 14px;
                                            ">
                                                            ต.ในเมือง อ.เมืองนครราชสีมา
                                                            จ.นครราชสีมา 30000
                                                <tr>
                                                    <td style="padding: 0; margin: 0">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                                    mso-table-lspace: 0;
                                                    mso-table-rspace: 0;
                                                    border-collapse: collapse;
                                                    border-spacing: 0;
                                                  " class="bq" width="100%">
                                                            <tr class="links">
                                                                <td style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        border: 0;
                                                      " align="center" valign="top" width="50%">
                                                                    <a href="tel:02-028-7789" style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family:
                                                            roboto,
                                                            &quot;helvetica neue&quot;,
                                                            helvetica, arial,
                                                            sans-serif;
                                                          color: #fff;
                                                          font-size: 16px;
                                                          font-weight: 700;
                                                          font-style: normal;
                                                        " target="_blank">โทร. 02-028-7789</a>
                                                                </td>
                                                                <td style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        border: 0;
                                                        border-left: 2px solid
                                                          #fff;
                                                      " align="center" valign="top" width="50%">
                                                                    <a href="https://page.line.me/kki2021i?openQrModal=true"
                                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family:
                                                            roboto,
                                                            &quot;helvetica neue&quot;,
                                                            helvetica, arial,
                                                            sans-serif;
                                                          color: #fff;
                                                          font-size: 16px;
                                                          font-weight: 700;
                                                          font-style: normal;
                                                        " target="_blank">Line : @bewise</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                </p>
                                                </p>
                                        </td>
                                    </tr>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
    </div>
</body>
</html>`};

    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error('Send single pass mail error:', error);
    return { success: false, error: error.message };
  }
}

async function sendMailRegisGroup(email, id, name, package, province, examDate, price, date, link) {
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
      from: 'Future Doctor Summit <no-reply@future.bewise-global.com>',
      to: email,
      subject: 'ยืนยันข้อมูลการสมัคร Future Doctor Summit 2026',
      text: 'Hello ',
      html: `<!doctype html>
<html dir="ltr" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<meta charset="UTF-8" />
<meta content="width=device-width,initial-scale=1" name="viewport" />
<meta name="x-apple-disable-message-reformatting" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<title>
    Register Future Doctor Summit 2026</title><!--[if (mso 16)
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
    ]><xml
      ><o:officedocumentsettings
        ><o:allowpng></o:allowpng
        ><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings
      ></xml
    ><!
  [endif]--><!--[if !mso]><!-- -->
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet" /><!--<!
  [endif]-->
<style>
    #outlook a {
        padding: 0;
    }

    .ch {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    .a {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }

    @media only screen and (max-width: 600px) {

        a,
        ol li,
        p,
        ul li {
            line-height: 150% !important;
        }

        h1,
        h1 a,
        h2,
        h2 a,
        h3,
        h3 a {
            line-height: 120%;
        }

        h1 {
            font-size: 36px !important;
            text-align: left;
        }

        h2 {
            font-size: 26px !important;
            text-align: left;
        }

        h3 {
            font-size: 20px !important;
            text-align: left;
        }

        .bq td a {
            font-size: 12px !important;
        }

        .cp a,
        .cp ol li,
        .cp p,
        .cp ul li {
            font-size: 14px !important;
        }

        .co a,
        .co ol li,
        .co p,
        .co ul li {
            font-size: 16px !important;
        }

        .cn a,
        .cn ol li,
        .cn p,
        .cn ul li {
            font-size: 14px !important;
        }

        .cm a,
        .cm ol li,
        .cm p,
        .cm ul li {
            font-size: 12px !important;
        }

        [class="gmail-fix"] {
            display: none !important;
        }

        .ck,
        .ck h1,
        .ck h2,
        .ck h3 {
            text-align: center !important;
        }

        .ci {
            display: inline-block !important;
        }

        a.ch,
        button.ch {
            font-size: 20px !important;
            display: inline-block !important;
        }

        .cb,
        .cb table,
        .cc,
        .cc table,
        .cd,
        .cd table {
            width: 100% !important;
            max-width: 600px !important;
        }

        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }

        .by {
            padding-right: 0 !important;
        }

        .bx {
            padding-left: 0 !important;
        }

        .bq td {
            width: 1% !important;
        }

        .esd-block-html table,
        table.bp {
            width: auto !important;
        }

        table.bo {
            display: inline-block !important;
        }

        table.bo td {
            display: inline-block !important;
        }

        .h-auto {
            height: auto !important;
        }
    }

    @media screen and (max-width: 384px) {
        .mail-message-content {
            width: 414px !important;
        }
    }
</style>

<body data-new-gr-c-s-loaded="14.1176.0" style="
      width: 100%;
      font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    ">
    <div class="es-wrapper-color" dir="ltr" lang="en" style="background-color: #fafafa">
        <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"
          ><v:fill type="tile" color="#fafafa"></v:fill></v:background
      ><![endif]-->
        <table cellpadding="0" cellspacing="0" role="none" style="
          mso-table-lspace: 0;
          mso-table-rspace: 0;
          border-collapse: collapse;
          border-spacing: 0;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        " class="es-wrapper" width="100%">
            <tr>
                <td style="padding: 0; margin: 0" valign="top">
                    <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              " class="cc" align="center">
                        <tr>
                            <td style="padding: 0; margin: 0" align="center">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #2a8fbe;
                      width: 600px;
                    " class="cp" align="center" bgcolor="#2a8fbe">
                                    <tr>
                                        <td style="padding: 0; margin: 0" align="left">
                                            <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                                <tr>
                                                    <td style="padding: 0; margin: 0; width: 600px" align="center"
                                                        valign="top" class="by">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                            <tr>
                                                                <td style="padding: 0; margin: 0; font-size: 0"
                                                                    align="center">
                                                                    <a href="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                                                        style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #666;
                                        font-size: 14px;
                                      " target="_blank"><img alt="" height="300"
                                                                            src="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                                                            style="
                                          display: block;
                                          border: 0;
                                          outline: 0;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        " width="600" class="adapt-img" /></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
              " class="cb" align="center">
                        <tr>
                            <td style="padding: 0; margin: 0" align="center">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #fff;
                      width: 600px;
                    " class="co" align="center" bgcolor="#ffffff">
                                    <tr>
                                        <td style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 20px;
                          padding-bottom: 10px;
                        " align="left">
                                            <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                                <tr>
                                                    <td style="padding: 0; margin: 0; width: 560px" align="center"
                                                        valign="top">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                            <tr><td align="right">
																						<p>${date}</p>
																					</td>
                                                            <tr>
                                                            <tr>
                                                                <td style="
                                              margin: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 40px;
                                              padding-right: 40px;
                                            " align="center" class="by bx">
                                                                    <p style="
                                                margin: 0;
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                font-family:
                                                  roboto,
                                                  &quot;helvetica neue&quot;,
                                                  helvetica, arial, sans-serif;
                                                line-height: 21px;
                                                color: #333;
                                                font-size: 14px;
                                              ">
                                                                        สวัสดีครับ/ค่ะ คุณ
                                                                        <strong style="color: #2a8fbe;">${name}</strong>
                                                            <tr>
                                                                <td style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-bottom: 5px;
                                                    padding-top: 10px;
                                                  " align="center">
                                                                    <p style="
                                                      margin: 0;
                                                      -webkit-text-size-adjust: none;
                                                      -ms-text-size-adjust: none;
                                                      mso-line-height-rule: exactly;
                                                      font-family:
                                                        roboto,
                                                        &quot;helvetica neue&quot;,
                                                        helvetica, arial,
                                                        sans-serif;
                                                      line-height: 21px;
                                                      color: #333;
                                                      font-size: 14px;  
                                                    ">
                                                                        ขอบคุณที่สมัครเข้าร่วมโครงการ Future Doctor Summit 2026
                                                                        กับ BeWise Academy
                                                                        <br>นี่คือรายละเอียดกลุ่มของน้อง และขั้นตอนต่อไปที่ต้องทำ
                                                                        <hr>
                                                                        <div style="text-align: left; font-size: 14px; font-family: roboto,&quot;helvetica neue&quot;,helvetica, arial, sans-serif;">
                                                                        <strong>สรุปข้อมูลการสมัคร:</strong>
                                                                        <br><br>
                                                                        • รหัสประจำตัวผู้สมัคร: <span style="color: #2a8fbe;">TG${id}</span>
                                                                        <br>
                                                                        • ชื่อ-นามสกุล: <span style="color: #2a8fbe;">${name}</span>
                                                                        <br>
                                                                        • แพ็กเกจที่สมัคร: <span style="color: #2a8fbe;">${package}</span>
                                                                        <br>
                                                                        • จังหวัดที่สมัคร: <span style="color: #2a8fbe;">${province}</span>
                                                                        <br>
                                                                        • วัน-เวลาติวและสอบ: <span style="color: #2a8fbe;">${examDate}</span>
                                                                        <br>
                                                                        • ยอดที่ต้องชำระ: <span style="color: #2a8fbe;">${price}.00 บาท</span>
                                                                        <hr>
                                                                        <strong>ขั้นตอนสำคัญถัดไป:</strong>
                                                                        <br><br>
                                                                        <strong>1. คัดลอกลิงก์ด้านล่างนี้</strong>
                                                                         แล้วส่งให้เพื่อนสมาชิกในกลุ่มทุกคนเพื่อกรอกข้อมูลส่วนตัว<br>
                                                                        <span style="background-color: #f0f0f0; border-radius: 3px; color: #333;"><a href="https://future.bewise-global.com/group_join/${link}" target="_blank" rel="noopener noreferrer">https://future.bewise-global.com/group_join/${link}</a></span>
                                                                        <br>
                                                                        <strong style="color: #ff1100;">2. ย้ำเตือนเพื่อนๆ</strong> ให้กรอกข้อมูลของตนเองให้เสร็จสิ้น <strong style="color: #ff1100;">ภายใน 24 ชั่วโมง</strong>
                                                                        <br><br>
                                                                        <strong>ข้อควรทราบ:</strong>
                                                                        <br><br>
                                                                        • ลิงก์สำหรับให้เพื่อนลงทะเบียนจะมีอายุการใช้งาน <strong>24 ชั่วโมง</strong> เท่านั้น
                                                                        <br>
                                                                        • หลังจากเพื่อน ๆ ทุกคนลงทะเบียนครบตามจำนวนแล้ว ลิงก์สำหรับชำระเงินค่าสมัครจะแสดงขึ้นในหน้า แดชบอร์ดของคุณ
                                                                        </div>
                                                </p>
                                        </td>
                                    </tr>
                                    </p>
                            </td>
                        </tr>
                </td>
            </tr>
            </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              " class="cd" align="center">
            <tr>
                <td style="padding: 0; margin: 0" align="center">
                    <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #231f20;
                      width: 600px;
                    " class="cn" align="center" bgcolor="#231f20">
                        <tr>
                            <td style="padding: 20px; margin: 0" align="left">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                    <tr>
                                        <td style="padding: 0; margin: 0; width: 560px" align="left">
                                            <table cellpadding="0" cellspacing="0" role="presentation" style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                <tr>
                                                    <td style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                      font-size: 0;
                                    " align="center">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                      " class="bo bp">
                                                            <tr>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.facebook.com/bewiseofficial/"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Fb" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Facebook" /></a>
                                                                </td>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.instagram.com/bewise_academy/"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Inst" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Instagram" /></a>
                                                                </td>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.youtube.com/@bewisechannel/featured"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Yt" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Youtube" /></a>
                                                                </td>
                                                                <td style="padding: 0; margin: 0" align="center"
                                                                    valign="top">
                                                                    <a href="https://page.line.me/kki2021i?openQrModal=true"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Line" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/messenger-icons/circle-white/line-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Line" /></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                <tr>
                                                    <td style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 20px;
                                          padding-bottom: 20px;
                                        " align="center">
                                                        <p style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family:
                                              roboto,
                                              &quot;helvetica neue&quot;,
                                              helvetica, arial, sans-serif;
                                            line-height: 21px;
                                            color: #fff;
                                            font-size: 14px;
                                          ">
                                                            <b>Office กรุงเทพฯ</b> : Mitrtown
                                                            Office Tower, Samyan Mitrtown, 24<sup>th</sup>
                                                            – 27<sup>th</sup> Floors
                                                        </p>
                                                        <p style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family:
                                              roboto,
                                              &quot;helvetica neue&quot;,
                                              helvetica, arial, sans-serif;
                                            line-height: 21px;
                                            color: #fff;
                                            font-size: 14px;
                                          ">
                                                            <br />
                                                        <p style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family:
                                                roboto,
                                                &quot;helvetica neue&quot;,
                                                helvetica, arial, sans-serif;
                                              line-height: 21px;
                                              color: #fff;
                                              font-size: 14px;
                                            ">
                                                            <b>สำนักงานใหญ่ </b>: 271/66
                                                            หมู่บ้าน เดอะเวิร์กสเปซ ตรอก
                                                            วัดท่าตะโก
                                                        </p>
                                                        <p style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family:
                                                roboto,
                                                &quot;helvetica neue&quot;,
                                                helvetica, arial, sans-serif;
                                              line-height: 21px;
                                              color: #fff;
                                              font-size: 14px;
                                            ">
                                                            ต.ในเมือง อ.เมืองนครราชสีมา
                                                            จ.นครราชสีมา 30000
                                                <tr>
                                                    <td style="padding: 0; margin: 0">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                                    mso-table-lspace: 0;
                                                    mso-table-rspace: 0;
                                                    border-collapse: collapse;
                                                    border-spacing: 0;
                                                  " class="bq" width="100%">
                                                            <tr class="links">
                                                                <td style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        border: 0;
                                                      " align="center" valign="top" width="50%">
                                                                    <a href="tel:02-028-7789" style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family:
                                                            roboto,
                                                            &quot;helvetica neue&quot;,
                                                            helvetica, arial,
                                                            sans-serif;
                                                          color: #fff;
                                                          font-size: 16px;
                                                          font-weight: 700;
                                                          font-style: normal;
                                                        " target="_blank">โทร. 02-028-7789</a>
                                                                </td>
                                                                <td style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        border: 0;
                                                        border-left: 2px solid
                                                          #fff;
                                                      " align="center" valign="top" width="50%">
                                                                    <a href="https://page.line.me/kki2021i?openQrModal=true"
                                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family:
                                                            roboto,
                                                            &quot;helvetica neue&quot;,
                                                            helvetica, arial,
                                                            sans-serif;
                                                          color: #fff;
                                                          font-size: 16px;
                                                          font-weight: 700;
                                                          font-style: normal;
                                                        " target="_blank">Line : @bewise</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                </p>
                                                </p>
                                        </td>
                                    </tr>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
    </div>
</body>

</html>`};

    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error('Send group mail error:', error);
    return { success: false, error: error.message };
  }
}

async function sendMailGroupJoin(email, id, headName, name, province, examDate, date) {
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
      from: 'Future Doctor Summit <no-reply@future.bewise-global.com>',
      to: email,
      subject: `ยืนยันการลงทะเบียน (ในกลุ่มของ ${headName}) สำหรับโครงการ Future Doctor Summit 2026`,
      text: 'Hello ',
      html: `<!doctype html>
<html dir="ltr" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<meta charset="UTF-8" />
<meta content="width=device-width,initial-scale=1" name="viewport" />
<meta name="x-apple-disable-message-reformatting" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<title>
    Future Doctor Summit 2026</title><!--[if (mso 16)
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
    ]><xml
      ><o:officedocumentsettings
        ><o:allowpng></o:allowpng
        ><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings
      ></xml
    ><!
  [endif]--><!--[if !mso]><!-- -->
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet" /><!--<!
  [endif]-->
<style>
    #outlook a {
        padding: 0;
    }

    .ch {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    .a {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }

    @media only screen and (max-width: 600px) {

        a,
        ol li,
        p,
        ul li {
            line-height: 150% !important;
        }

        h1,
        h1 a,
        h2,
        h2 a,
        h3,
        h3 a {
            line-height: 120%;
        }

        h1 {
            font-size: 36px !important;
            text-align: left;
        }

        h2 {
            font-size: 26px !important;
            text-align: left;
        }

        h3 {
            font-size: 20px !important;
            text-align: left;
        }

        .bq td a {
            font-size: 12px !important;
        }

        .cp a,
        .cp ol li,
        .cp p,
        .cp ul li {
            font-size: 14px !important;
        }

        .co a,
        .co ol li,
        .co p,
        .co ul li {
            font-size: 16px !important;
        }

        .cn a,
        .cn ol li,
        .cn p,
        .cn ul li {
            font-size: 14px !important;
        }

        .cm a,
        .cm ol li,
        .cm p,
        .cm ul li {
            font-size: 12px !important;
        }

        [class="gmail-fix"] {
            display: none !important;
        }

        .ck,
        .ck h1,
        .ck h2,
        .ck h3 {
            text-align: center !important;
        }

        .ci {
            display: inline-block !important;
        }

        a.ch,
        button.ch {
            font-size: 20px !important;
            display: inline-block !important;
        }

        .cb,
        .cb table,
        .cc,
        .cc table,
        .cd,
        .cd table {
            width: 100% !important;
            max-width: 600px !important;
        }

        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }

        .by {
            padding-right: 0 !important;
        }

        .bx {
            padding-left: 0 !important;
        }

        .bq td {
            width: 1% !important;
        }

        .esd-block-html table,
        table.bp {
            width: auto !important;
        }

        table.bo {
            display: inline-block !important;
        }

        table.bo td {
            display: inline-block !important;
        }

        .h-auto {
            height: auto !important;
        }
    }

    @media screen and (max-width: 384px) {
        .mail-message-content {
            width: 414px !important;
        }
    }
</style>

<body data-new-gr-c-s-loaded="14.1176.0" style="
      width: 100%;
      font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    ">
    <div class="es-wrapper-color" dir="ltr" lang="en" style="background-color: #fafafa">
        <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"
          ><v:fill type="tile" color="#fafafa"></v:fill></v:background
      ><![endif]-->
        <table cellpadding="0" cellspacing="0" role="none" style="
          mso-table-lspace: 0;
          mso-table-rspace: 0;
          border-collapse: collapse;
          border-spacing: 0;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        " class="es-wrapper" width="100%">
            <tr>
                <td style="padding: 0; margin: 0" valign="top">
                    <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              " class="cc" align="center">
                        <tr>
                            <td style="padding: 0; margin: 0" align="center">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #2a8fbe;
                      width: 600px;
                    " class="cp" align="center" bgcolor="#2a8fbe">
                                    <tr>
                                        <td style="padding: 0; margin: 0" align="left">
                                            <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                                <tr>
                                                    <td style="padding: 0; margin: 0; width: 600px" align="center"
                                                        valign="top" class="by">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                            <tr>
                                                                <td style="padding: 0; margin: 0; font-size: 0"
                                                                    align="center">
                                                                    <a href="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                                                        style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #666;
                                        font-size: 14px;
                                      " target="_blank"><img alt="" height="300"
                                                                            src="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                                                            style="
                                          display: block;
                                          border: 0;
                                          outline: 0;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        " width="600" class="adapt-img" /></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
              " class="cb" align="center">
                        <tr>
                            <td style="padding: 0; margin: 0" align="center">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #fff;
                      width: 600px;
                    " class="co" align="center" bgcolor="#ffffff">
                                    <tr>
                                        <td style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 20px;
                          padding-bottom: 10px;
                        " align="left">
                                            <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                                <tr>
                                                    
                                                    <td style="padding: 0; margin: 0; width: 560px" align="center"
                                                        valign="top">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                            <tr><td align="right">
																						<p>${date}</p>
																					</td>
                                                            <tr>
                                                            <tr>
                                                                <td style="
                                              margin: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 40px;
                                              padding-right: 40px;
                                            " align="center" class="by bx">
                                                                    <p style="
                                                margin: 0;
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                font-family:
                                                  roboto,
                                                  &quot;helvetica neue&quot;,
                                                  helvetica, arial, sans-serif;
                                                line-height: 21px;
                                                color: #333;
                                                font-size: 14px;
                                              ">
                                                                        สวัสดีครับ/ค่ะ คุณ
                                                                        <strong style="color: #2a8fbe;">${name}</strong>
                                                            <tr>
                                                                <td style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-bottom: 5px;
                                                    padding-top: 10px;
                                                  " align="center">
                                                                    <p style="
                                                      margin: 0;
                                                      -webkit-text-size-adjust: none;
                                                      -ms-text-size-adjust: none;
                                                      mso-line-height-rule: exactly;
                                                      font-family:
                                                        roboto,
                                                        &quot;helvetica neue&quot;,
                                                        helvetica, arial,
                                                        sans-serif;
                                                      line-height: 21px;
                                                      color: #333;
                                                      font-size: 14px;
                                                    ">
                                                                        ขอบคุณที่สมัครเข้าร่วมโครงการ Future Doctor Summit 2026
                                                                        กับ BeWise Academy
                                                                        <br>นี่คือรายละเอียดการสมัคร
                                                                        ในกลุ่มของ <span style="color: #2a8fbe;">${headName}</span> เรียบร้อยแล้ว
                                                                        <hr>
                                                                        <div style="text-align: left; font-size: 14px; font-family:
                                                  roboto,
                                                  &quot;helvetica neue&quot;,
                                                  helvetica, arial, sans-serif;">
                                                                        <strong>ข้อมูลการลงทะเบียน:</strong>
                                                                        <br><br>
                                                                        • หมายเลขกลุ่ม: <span style="color: #2a8fbe;">TG${id}</span>
                                                                        <br>
                                                                        • ชื่อ-นามสกุล: <span style="color: #2a8fbe;">${name}</span>
                                                                        <br>
                                                                        • จังหวัดที่สมัคร: <span style="color: #2a8fbe;">${province}</span>
                                                                        <br>
                                                                        • วัน-เวลาติวและสอบ: <span style="color: #2a8fbe;">${examDate}</span>
                                                                        <hr>
                                                                        ในส่วนของน้อง <strong>การลงทะเบียนข้อมูลได้เสร็จสมบูรณ์แล้วครับ/ค่ะ!</strong><br>
                                                                        หลังจากนี้ <strong>ผู้สมัครหลัก/คุณครู</strong> จะเป็นผู้ดำเนินการชำระเงินค่าสมัครสำหรับสมาชิกทุกคนในกลุ่ม<br><br>
                                                                        <strong>หมายเหตุ:</strong> หากน้องต้องการแก้ไขข้อมูลส่วนตัว กรุณาติดต่อผู้สมัครหลัก/คุณครูของกลุ่ม เพื่อขอลิงก์สำหรับแก้ไขข้อมูล <span style="color: #9e9e9e;">(จะแก้ไขได้หลังจากผู้สมัครหลัก/คุณครูชำระเงินค่าสมัครเรียบร้อยแล้ว)</span>
                                                                        </div>
                                                </p>
                                        </td>
                                    </tr>
                                    </p>
                            </td>
                        </tr>
                </td>
            </tr>
            </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              " class="cd" align="center">
            <tr>
                <td style="padding: 0; margin: 0" align="center">
                    <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #231f20;
                      width: 600px;
                    " class="cn" align="center" bgcolor="#231f20">
                        <tr>
                            <td style="padding: 20px; margin: 0" align="left">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                    <tr>
                                        <td style="padding: 0; margin: 0; width: 560px" align="left">
                                            <table cellpadding="0" cellspacing="0" role="presentation" style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                <tr>
                                                    <td style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                      font-size: 0;
                                    " align="center">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                      " class="bo bp">
                                                            <tr>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.facebook.com/bewiseofficial/"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Fb" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Facebook" /></a>
                                                                </td>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.instagram.com/bewise_academy/"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Inst" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Instagram" /></a>
                                                                </td>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.youtube.com/@bewisechannel/featured"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Yt" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Youtube" /></a>
                                                                </td>
                                                                <td style="padding: 0; margin: 0" align="center"
                                                                    valign="top">
                                                                    <a href="https://page.line.me/kki2021i?openQrModal=true"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Line" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/messenger-icons/circle-white/line-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Line" /></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                <tr>
                                                    <td style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 20px;
                                          padding-bottom: 20px;
                                        " align="center">
                                                        <p style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family:
                                              roboto,
                                              &quot;helvetica neue&quot;,
                                              helvetica, arial, sans-serif;
                                            line-height: 21px;
                                            color: #fff;
                                            font-size: 14px;
                                          ">
                                                            <b>Office กรุงเทพฯ</b> : Mitrtown
                                                            Office Tower, Samyan Mitrtown, 24<sup>th</sup>
                                                            – 27<sup>th</sup> Floors
                                                        </p>
                                                        <p style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family:
                                              roboto,
                                              &quot;helvetica neue&quot;,
                                              helvetica, arial, sans-serif;
                                            line-height: 21px;
                                            color: #fff;
                                            font-size: 14px;
                                          ">
                                                            <br />
                                                        <p style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family:
                                                roboto,
                                                &quot;helvetica neue&quot;,
                                                helvetica, arial, sans-serif;
                                              line-height: 21px;
                                              color: #fff;
                                              font-size: 14px;
                                            ">
                                                            <b>สำนักงานใหญ่ </b>: 271/66
                                                            หมู่บ้าน เดอะเวิร์กสเปซ ตรอก
                                                            วัดท่าตะโก
                                                        </p>
                                                        <p style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family:
                                                roboto,
                                                &quot;helvetica neue&quot;,
                                                helvetica, arial, sans-serif;
                                              line-height: 21px;
                                              color: #fff;
                                              font-size: 14px;
                                            ">
                                                            ต.ในเมือง อ.เมืองนครราชสีมา
                                                            จ.นครราชสีมา 30000
                                                <tr>
                                                    <td style="padding: 0; margin: 0">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                                    mso-table-lspace: 0;
                                                    mso-table-rspace: 0;
                                                    border-collapse: collapse;
                                                    border-spacing: 0;
                                                  " class="bq" width="100%">
                                                            <tr class="links">
                                                                <td style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        border: 0;
                                                      " align="center" valign="top" width="50%">
                                                                    <a href="tel:02-028-7789" style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family:
                                                            roboto,
                                                            &quot;helvetica neue&quot;,
                                                            helvetica, arial,
                                                            sans-serif;
                                                          color: #fff;
                                                          font-size: 16px;
                                                          font-weight: 700;
                                                          font-style: normal;
                                                        " target="_blank">โทร. 02-028-7789</a>
                                                                </td>
                                                                <td style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        border: 0;
                                                        border-left: 2px solid
                                                          #fff;
                                                      " align="center" valign="top" width="50%">
                                                                    <a href="https://page.line.me/kki2021i?openQrModal=true"
                                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family:
                                                            roboto,
                                                            &quot;helvetica neue&quot;,
                                                            helvetica, arial,
                                                            sans-serif;
                                                          color: #fff;
                                                          font-size: 16px;
                                                          font-weight: 700;
                                                          font-style: normal;
                                                        " target="_blank">Line : @bewise</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                </p>
                                                </p>
                                        </td>
                                    </tr>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
    </div>
</body>

</html>`};

    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error('Send group mail error:', error);
    return { success: false, error: error.message };
  }
}

async function sendMailOTP(email, otp, name, date) {
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
      from: 'Future Doctor Summit <no-reply@future.bewise-global.com>',
      to: email,
      subject: 'รีเซ็ทรหัสผ่าน [BeWise]',
      text: 'Hello ',
      html: `<!doctype html>
<html dir="ltr" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<meta charset="UTF-8" />
<meta content="width=device-width,initial-scale=1" name="viewport" />
<meta name="x-apple-disable-message-reformatting" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<title>
    Future Doctor Summit 2026 - Forgot-Password</title><!--[if (mso 16)
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
    ]><xml
      ><o:officedocumentsettings
        ><o:allowpng></o:allowpng
        ><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings
      ></xml
    ><!
  [endif]--><!--[if !mso]><!-- -->
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet" /><!--<!
  [endif]-->
<style>
    #outlook a {
        padding: 0;
    }

    .ch {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    .a {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }

    @media only screen and (max-width: 600px) {

        a,
        ol li,
        p,
        ul li {
            line-height: 150% !important;
        }

        h1,
        h1 a,
        h2,
        h2 a,
        h3,
        h3 a {
            line-height: 120%;
        }

        h1 {
            font-size: 36px !important;
            text-align: left;
        }

        h2 {
            font-size: 26px !important;
            text-align: left;
        }

        h3 {
            font-size: 20px !important;
            text-align: left;
        }

        .bq td a {
            font-size: 12px !important;
        }

        .cp a,
        .cp ol li,
        .cp p,
        .cp ul li {
            font-size: 14px !important;
        }

        .co a,
        .co ol li,
        .co p,
        .co ul li {
            font-size: 16px !important;
        }

        .cn a,
        .cn ol li,
        .cn p,
        .cn ul li {
            font-size: 14px !important;
        }

        .cm a,
        .cm ol li,
        .cm p,
        .cm ul li {
            font-size: 12px !important;
        }

        [class="gmail-fix"] {
            display: none !important;
        }

        .ck,
        .ck h1,
        .ck h2,
        .ck h3 {
            text-align: center !important;
        }

        .ci {
            display: inline-block !important;
        }

        a.ch,
        button.ch {
            font-size: 20px !important;
            display: inline-block !important;
        }

        .cb,
        .cb table,
        .cc,
        .cc table,
        .cd,
        .cd table {
            width: 100% !important;
            max-width: 600px !important;
        }

        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }

        .by {
            padding-right: 0 !important;
        }

        .bx {
            padding-left: 0 !important;
        }

        .bq td {
            width: 1% !important;
        }

        .esd-block-html table,
        table.bp {
            width: auto !important;
        }

        table.bo {
            display: inline-block !important;
        }

        table.bo td {
            display: inline-block !important;
        }

        .h-auto {
            height: auto !important;
        }
    }

    @media screen and (max-width: 384px) {
        .mail-message-content {
            width: 414px !important;
        }
    }
</style>

<body data-new-gr-c-s-loaded="14.1176.0" style="
      width: 100%;
      font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    ">
    <div class="es-wrapper-color" dir="ltr" lang="en" style="background-color: #fafafa">
        <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"
          ><v:fill type="tile" color="#fafafa"></v:fill></v:background
      ><![endif]-->
        <table cellpadding="0" cellspacing="0" role="none" style="
          mso-table-lspace: 0;
          mso-table-rspace: 0;
          border-collapse: collapse;
          border-spacing: 0;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        " class="es-wrapper" width="100%">
            <tr>
                <td style="padding: 0; margin: 0" valign="top">
                    <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              " class="cc" align="center">
                        <tr>
                            <td style="padding: 0; margin: 0" align="center">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #2a8fbe;
                      width: 600px;
                    " class="cp" align="center" bgcolor="#2a8fbe">
                                    <tr>
                                        <td style="padding: 0; margin: 0" align="left">
                                            <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                                <tr>
                                                    <td style="padding: 0; margin: 0; width: 600px" align="center"
                                                        valign="top" class="by">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                            <tr>
                                                                <td style="padding: 0; margin: 0; font-size: 0"
                                                                    align="center">
                                                                    <a href="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                                                        style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #666;
                                        font-size: 14px;
                                      " target="_blank"><img alt="" height="300"
                                                                            src="https://future.bewise-global.com/images/AW_Confirm_Email_future-01.jpg"
                                                                            style="
                                          display: block;
                                          border: 0;
                                          outline: 0;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        " width="600" class="adapt-img" /></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
              " class="cb" align="center">
                        <tr>
                            <td style="padding: 0; margin: 0" align="center">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #fff;
                      width: 600px;
                    " class="co" align="center" bgcolor="#ffffff">
                                    <tr>
                                        <td style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 20px;
                          padding-bottom: 10px;
                        " align="left">
                                            <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                                <tr>
                                                    
                                                    <td style="padding: 0; margin: 0; width: 560px" align="center"
                                                        valign="top">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                            <tr><td align="right">
																						<p>${date}</p>
																					</td>
                                                            <tr>
                                                            <tr>
                                                                <td style="
                                              margin: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 40px;
                                              padding-right: 40px;
                                            " align="center" class="by bx">
                                                                    <p style="
                                                margin: 0;
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                font-family:
                                                  roboto,
                                                  &quot;helvetica neue&quot;,
                                                  helvetica, arial, sans-serif;
                                                line-height: 21px;
                                                color: #333;
                                                font-size: 14px;
                                              ">
                                                                        สวัสดีครับ/ค่ะ คุณ
                                                                        <strong style="color: #2a8fbe;">${name}</strong>
                                                            <tr>
                                                                <td style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-bottom: 5px;
                                                    padding-top: 10px;
                                                    " align="center">
                                                            <p style="
                                                      margin: 0;
                                                      -webkit-text-size-adjust: none;
                                                      -ms-text-size-adjust: none;
                                                      mso-line-height-rule: exactly;
                                                      font-family:
                                                      roboto,
                                                      &quot;helvetica neue&quot;,
                                                      helvetica, arial,
                                                      sans-serif;
                                                      line-height: 21px;
                                                      color: #333;
                                                      font-size: 14px;
                                                    ">
                                                              คุณได้ขอรีเซ็ตรหัสผ่านสำหรับระบบ Future Doctor Summit 2026
                                                              <br>กรุณาใช้รหัสยืนยันด้านล่างนี้เพื่อดำเนินการต่อ
                                                              <hr>
                                                              <div style="text-align: center; font-size: 24px; font-weight: bold; color: #2a8fbe; background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px; letter-spacing: 3px;">
                                                              ${otp}
                                                              </div>
                                                              <p style="text-align: center; font-size: 12px; color: #666; margin: 10px 0;">
                                                              รหัสยืนยันนี้จะหมดอายุภายใน 15 นาที
                                                              </p>
                                                              <hr>
                                                              <div style="text-align: left; font-size: 14px; font-family:
                                                  roboto,
                                                  &quot;helvetica neue&quot;,
                                                  helvetica, arial, sans-serif;">
                                                  <div style="text-align: center;">
                                                                        <strong>หมายเหตุ:</strong> หากคุณไม่ได้ร้องขอการเปลี่ยนรหัสผ่านนี้ กรุณาเพิกเฉยต่ออีเมลฉบับนี้
                                                                        <br>เพื่อความปลอดภัยของบัญชีของคุณ
                                                                        </div>
                                                                        </div>
                                                </p>
                                        </td>
                                    </tr>
                                    </p>
                            </td>
                        </tr>
                </td>
            </tr>
            </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        <table cellpadding="0" cellspacing="0" role="none" style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              " class="cd" align="center">
            <tr>
                <td style="padding: 0; margin: 0" align="center">
                    <table cellpadding="0" cellspacing="0" role="none" style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      border-collapse: collapse;
                      border-spacing: 0;
                      background-color: #231f20;
                      width: 600px;
                    " class="cn" align="center" bgcolor="#231f20">
                        <tr>
                            <td style="padding: 20px; margin: 0" align="left">
                                <table cellpadding="0" cellspacing="0" role="none" style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            border-collapse: collapse;
                            border-spacing: 0;
                          " width="100%">
                                    <tr>
                                        <td style="padding: 0; margin: 0; width: 560px" align="left">
                                            <table cellpadding="0" cellspacing="0" role="presentation" style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  border-collapse: collapse;
                                  border-spacing: 0;
                                " width="100%">
                                                <tr>
                                                    <td style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                      font-size: 0;
                                    " align="center">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                      " class="bo bp">
                                                            <tr>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.facebook.com/bewiseofficial/"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Fb" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Facebook" /></a>
                                                                </td>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.instagram.com/bewise_academy/"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Inst" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Instagram" /></a>
                                                                </td>
                                                                <td style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          " align="center" valign="top">
                                                                    <a href="https://www.youtube.com/@bewisechannel/featured"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Yt" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Youtube" /></a>
                                                                </td>
                                                                <td style="padding: 0; margin: 0" align="center"
                                                                    valign="top">
                                                                    <a href="https://page.line.me/kki2021i?openQrModal=true"
                                                                        style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333;
                                              font-size: 12px;
                                            " target="_blank"><img alt="Line" height="32"
                                                                            src="https://efngfhb.stripocdn.email/content/assets/img/messenger-icons/circle-white/line-circle-white.png"
                                                                            style="
                                                display: block;
                                                border: 0;
                                                outline: 0;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              " width="32" title="Line" /></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                <tr>
                                                    <td style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 20px;
                                          padding-bottom: 20px;
                                        " align="center">
                                                        <p style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family:
                                              roboto,
                                              &quot;helvetica neue&quot;,
                                              helvetica, arial, sans-serif;
                                            line-height: 21px;
                                            color: #fff;
                                            font-size: 14px;
                                          ">
                                                            <b>Office กรุงเทพฯ</b> : Mitrtown
                                                            Office Tower, Samyan Mitrtown, 24<sup>th</sup>
                                                            – 27<sup>th</sup> Floors
                                                        </p>
                                                        <p style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family:
                                              roboto,
                                              &quot;helvetica neue&quot;,
                                              helvetica, arial, sans-serif;
                                            line-height: 21px;
                                            color: #fff;
                                            font-size: 14px;
                                          ">
                                                            <br />
                                                        <p style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family:
                                                roboto,
                                                &quot;helvetica neue&quot;,
                                                helvetica, arial, sans-serif;
                                              line-height: 21px;
                                              color: #fff;
                                              font-size: 14px;
                                            ">
                                                            <b>สำนักงานใหญ่ </b>: 271/66
                                                            หมู่บ้าน เดอะเวิร์กสเปซ ตรอก
                                                            วัดท่าตะโก
                                                        </p>
                                                        <p style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family:
                                                roboto,
                                                &quot;helvetica neue&quot;,
                                                helvetica, arial, sans-serif;
                                              line-height: 21px;
                                              color: #fff;
                                              font-size: 14px;
                                            ">
                                                            ต.ในเมือง อ.เมืองนครราชสีมา
                                                            จ.นครราชสีมา 30000
                                                <tr>
                                                    <td style="padding: 0; margin: 0">
                                                        <table cellpadding="0" cellspacing="0" role="presentation"
                                                            style="
                                                    mso-table-lspace: 0;
                                                    mso-table-rspace: 0;
                                                    border-collapse: collapse;
                                                    border-spacing: 0;
                                                  " class="bq" width="100%">
                                                            <tr class="links">
                                                                <td style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        border: 0;
                                                      " align="center" valign="top" width="50%">
                                                                    <a href="tel:02-028-7789" style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family:
                                                            roboto,
                                                            &quot;helvetica neue&quot;,
                                                            helvetica, arial,
                                                            sans-serif;
                                                          color: #fff;
                                                          font-size: 16px;
                                                          font-weight: 700;
                                                          font-style: normal;
                                                        " target="_blank">โทร. 02-028-7789</a>
                                                                </td>
                                                                <td style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        border: 0;
                                                        border-left: 2px solid
                                                          #fff;
                                                      " align="center" valign="top" width="50%">
                                                                    <a href="https://page.line.me/kki2021i?openQrModal=true"
                                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family:
                                                            roboto,
                                                            &quot;helvetica neue&quot;,
                                                            helvetica, arial,
                                                            sans-serif;
                                                          color: #fff;
                                                          font-size: 16px;
                                                          font-weight: 700;
                                                          font-style: normal;
                                                        " target="_blank">Line : @bewise</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                </p>
                                                </p>
                                        </td>
                                    </tr>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
    </div>
</body>

</html>`};

    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error('Send regis mail error:', error);
    return { success: false, error: error.message };
  }

}


module.exports = { sendMailRegister, sendMailRegisSinglePass, sendMailRegisGroup, sendMailGroupJoin, sendMailOTP };