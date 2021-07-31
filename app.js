const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/send', (req, res) => {
  const output = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
    <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
    <!--<![endif]-->
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
  
      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }
  
      * {
        line-height: inherit;
      }
  
      a[x-apple-data-detectors=true] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
    <style type="text/css" id="media-query">
      @media (max-width: 660px) {
  
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
  
        .block-grid {
          width: 100% !important;
        }
  
        .col {
          width: 100% !important;
        }
  
        .col_cont {
          margin: 0 auto;
        }
  
        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }
  
        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }
  
        .no-stack.two-up .col {
          width: 50% !important;
        }
  
        .no-stack .col.num2 {
          width: 16.6% !important;
        }
  
        .no-stack .col.num3 {
          width: 25% !important;
        }
  
        .no-stack .col.num4 {
          width: 33% !important;
        }
  
        .no-stack .col.num5 {
          width: 41.6% !important;
        }
  
        .no-stack .col.num6 {
          width: 50% !important;
        }
  
        .no-stack .col.num7 {
          width: 58.3% !important;
        }
  
        .no-stack .col.num8 {
          width: 66.6% !important;
        }
  
        .no-stack .col.num9 {
          width: 75% !important;
        }
  
        .no-stack .col.num10 {
          width: 83.3% !important;
        }
  
        .video-block {
          max-width: none !important;
        }
  
        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }
  
        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
    <style type="text/css" id="icon-media-query">
      @media (max-width: 660px) {
        .icons-inner {
          text-align: center;
        }
  
        .icons-inner td {
          margin: 0 auto;
        }
      }
    </style>
  </head>
  
  <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top">
      <tbody>
        <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top;" valign="top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
            <div style="background-color:transparent;">
              <div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><a href="https://www.coinanalytica.com/" target="_blank" style="outline:none" tabindex="-1"><img class="center autowidth" align="center" border="0" src="https://www.coinanalytica.com/assets/images/logo.png" alt="Hello Harpreet" title="Logo" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 64px; display: block;" width="64"></a>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 20px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#ff6666;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:0px;padding-right:10px;padding-bottom:20px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ff6666; mso-line-height-alt: 17px;">
                            <p style="font-size: 46px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 55px; margin: 0;"><span style="font-size: 46px;">Coinanalytica</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;" valign="top">
                                <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;" align="center" role="presentation" height="0" valign="top">
                                  <tbody>
                                    <tr style="vertical-align: top;" valign="top">
                                      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="0" valign="top"><span></span></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:45px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:45px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
                          <div style="font-size:1px;line-height:40px">&nbsp;</div><a href="https://www.coinanalytica.com/" target="_blank" style="outline:none" tabindex="-1"><img class="center autowidth" align="center" border="0" src="https://static-assets.coinbase.com/earn/campaigns/compound/hero-mobile.png" alt="" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 640px; display: block;" width="640"></a>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 20px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#043c62;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:20px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #043c62; mso-line-height-alt: 17px;">
                            <p style="font-size: 18px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;">Hello Harpreet welcome to financial freedom with coinanalytica.</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 20px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#ff6666;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:20px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ff6666; mso-line-height-alt: 17px;">
                            <p style="font-size: 46px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 55px; margin: 0;"><span style="font-size: 46px;">THE REFERALL SCHEME.<br></span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                        <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #000000; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21px;">
                            <p style="font-size: 20px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 30px; margin: 0;"><span style="font-size: 20px;">Each referral attracts 7% of the referral’s initial deposit to your portfolio </span><br><span style="font-size: 20px;">We practice actual daily trading not limited to forex, mining or trading bitcoin alone but also encompasses other valuable commodities that can help guarantee a steady profit influx. Millions of dollars have been reserved to ensure weekly payouts are met during days of not so lucky market days in trading just to ensure that weekly payouts are guaranteed. Therefore, this referral program is only looked upon as a source of incentive to our happy clients and also a way of helping them earn more bonus returns in other to help them through their day-to-day expenses in life.</span></p>
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 21px; margin: 0;">&nbsp;</p>
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 21px; margin: 0;">&nbsp;</p>
                            <p style="font-size: 11px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 17px; margin: 0;"><span style="font-size: 11px;">PLEASE NOTE THAT YOU MUST NOT “REFER” A CLIENT TO EARN AS THIS IS NOT A PONZI SCHEME/HYIP/MLM OR A GET RICH QUICK SCHEME.</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <div class="button-container" align="center" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.coinanalytica.com/" style="height:31.5pt;width:168.75pt;v-text-anchor:middle;" arcsize="48%" stroke="false" fillcolor="#ff6666"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:14px"><![endif]--><a href="https://www.coinanalytica.com/" target="_blank" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #ff6666; border-radius: 20px; -webkit-border-radius: 20px; -moz-border-radius: 20px; width: auto; width: auto; border-top: 1px solid #ff6666; border-right: 1px solid #ff6666; border-bottom: 1px solid #ff6666; border-left: 1px solid #ff6666; padding-top: 5px; padding-bottom: 5px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"><span style="padding-left:35px;padding-right:35px;font-size:14px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong><span style="font-size: 14px; line-height: 28px;" data-mce-style="font-size: 14px; line-height: 28px;">READ MORE</span></strong></span></span></a>
                          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                        </div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:25px; padding-bottom:20px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#ff6666;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ff6666; mso-line-height-alt: 17px;">
                            <p style="font-size: 34px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 41px; margin: 0;"><span style="font-size: 34px;">Why people around the world choose us</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div class="block-grid three-up" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-iog1yu299ai/icons8-idea-64.png" alt="" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 64px; display: block;" width="64">
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#ff6666;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ff6666; mso-line-height-alt: 17px;">
                            <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">True financial freedom</p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                        <div style="color:#8f8f8f;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #8f8f8f; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21px;">
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;">&nbsp;</p>
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;">Our teams deliver high-quality strategic and creative financing solutions to our clients.</p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-iog1yu299ai/icons8-launch-64.png" alt="" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 64px; display: block;" width="64">
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#ff6666;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ff6666; mso-line-height-alt: 17px;">
                            <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">Fast Payouts</p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                        <div style="color:#8f8f8f;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #8f8f8f; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21px;">
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;">&nbsp;</p>
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;">All requests are processed</p>
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;">automatically, and money is instantly sent to the details you specify.</p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-iog1yu299ai/icons8-globe-64.png" alt="" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 64px; display: block;" width="64">
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#ff6666;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ff6666; mso-line-height-alt: 17px;">
                            <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">Coin Analytica is trusted</p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                        <div style="color:#8f8f8f;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #8f8f8f; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21px;">
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;">All requests are processed automatically, and money is instantly sent to the details you specify.</p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 25px; padding-bottom: 20px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#ff6666;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:25px;padding-right:10px;padding-bottom:20px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ff6666; mso-line-height-alt: 17px;">
                            <p style="font-size: 34px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 41px; margin: 0;"><span style="font-size: 34px;">Get inTouch</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div class="block-grid three-up" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-iog1yu299ai/icons8-home-24.png" alt="" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 24px; display: block;" width="24">
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#000000;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #000000; mso-line-height-alt: 17px;">
                            <p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 19px; margin: 0;"><span style="font-size: 16px;">Company Address</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                        <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #000000; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21px;">
                            <p style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 12px;">3 Lake View Drive</span></p>
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;"><span style="font-size: 12px;">Hudsonville, </span><span style="font-size: 12px;">Leeds,</span> United <span style="font-size: 12px;">Kingdom</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-iog1yu299ai/icons8-mail-24.png" alt="" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 24px; display: block;" width="24">
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#000000;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #000000; mso-line-height-alt: 17px;">
                            <p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 19px; margin: 0;"><span style="font-size: 16px;">Mail</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                        <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #000000; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21px;">
                            <p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 21px; margin: 0;">mail@coinanalytica.com</p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-iog1yu299ai/icons8-globe-24.png" alt="" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 24px; display: block;" width="24">
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div style="color:#000000;font-family:'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #000000; mso-line-height-alt: 17px;">
                            <p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: center; font-family: 'Abril Fatface', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 19px; margin: 0;"><span style="font-size: 16px;">Website</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                        <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #000000; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21px;">
                            <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;"><a style="text-decoration: none; color: #000000;" href="https://www.coinanalytica.com/" target="_blank" rel="noopener">www.coinanalytica.com</a></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:30px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><a href="https://www.coinanalytica.com/" target="_blank" style="outline:none" tabindex="-1"><img class="center autowidth" align="center" border="0" src="https://www.coinanalytica.com/assets/images/logo.png" alt="" title="Logo" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 64px; display: block;" width="64"></a>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:#ff6666;">
              <div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ff6666;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <table class="social_icons" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                <table class="social_table" align="center" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
                                  <tbody>
                                    <tr style="vertical-align: top; display: inline-block; text-align: center;" align="center" valign="top">
                                      <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 7.5px; padding-left: 7.5px;" valign="top"><a href="https://www.coinanalytica.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" alt="" title="Facebook" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                      <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 7.5px; padding-left: 7.5px;" valign="top"><a href="https://www.coinanalytica.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-only-logo-white/twitter@2x.png" alt="" title="Twitter" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                      <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 7.5px; padding-left: 7.5px;" valign="top"><a href="https://www.coinanalytica.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-only-logo-white/instagram@2x.png" alt="" title="Instagram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                      <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 7.5px; padding-left: 7.5px;" valign="top"><a href="https://www.coinanalytica.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png" alt="" title="LinkedIn" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                        <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; color: #000000; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 17px;">
                            <p style="font-size: 11px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 13px; margin: 0;"><span style="font-size: 11px;"><a style="text-decoration: none; color: #000000;" href="https://www.coinanalytica.com/privacy-policy" target="_blank" rel="noopener">Unsubscribe</a> | <a style="text-decoration: none; color: #000000;" href="https://www.coinanalytica.com/privacy-policy" target="_blank" rel="noopener">Manage Preferences</a>&nbsp;</span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                    <div class="col_cont" style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                        <!--<![endif]-->
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">
                          <tr style="vertical-align: top;" valign="top">
                            <td style="word-break: break-word; vertical-align: top; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; text-align: center;" align="center" valign="top">
                              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                              <!--[if !vml]><!-->
                              <table class="icons-inner" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation" valign="top">
                                <!--<![endif]-->
                              
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if (IE)]></div><![endif]-->
  </body>
  
  </html>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'postmaster@mailing.coinanalytica.com', // generated ethereal user
        pass: '2ec1dcf8473312dbca1b788b3b6edc1b-a09d6718-948130fd'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Bennet from Coinanalytica" <mail@coinanalytica.com>', // sender address
      to: 'harpsunny@hotmail.com', // list of receivers
      subject: 'THE REFERALL SCHEME.', // Subject line
      text: ' ', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
  });

app.listen(3000, () => console.log('Server started...'));