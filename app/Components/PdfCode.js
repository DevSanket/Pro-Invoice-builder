import dateFormat, { masks } from "dateformat";

function GetTime(date) {
  var hours = parseInt(dateFormat(date, "hh"));
  var minutes = parseInt(dateFormat(date, "MM"));
  var ampm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const PdfCode = (
  name,
  Address,
  Mobile_No,
  Quantity,
  Invoice,
  Product,
  Total,
  ReceivedBalance,
  PaymentType,
  RemainingBalance,
  company_name,
  company_address,
  company_contact
) => `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body >
    <div style="min-height: auto;
    width: 100%;
    height : 97vh;
    border: solid 2px #000; display: flex; flex-direction: column; justify-content: space-between;"  >
    <div style="height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgba(171, 171, 169, 0.794);
    justify-content: center;
    color: #fff;
    align-items: center;">
        <h1>INVOICE </h1>
    <!-- <div class="data-title">
        <div style="display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 2rem;  
        padding-left: 20px;">${company_name}<br></div>
    <div style="
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding-left: 20px;
    ">${company_address}</div>
    </div> -->
    </div>

        <div style="
        width: 100%;
        height: auto;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        ">
            <div style="
            width: 50%;
            align-items: flex-start;
            ">
                <p class="invoice-user">
                    <h3 style="margin-bottom:10px;">Bill To<h3/>
                    ${name} <br/>
                    ${Address} <br/>
                    +91 ${Mobile_No}
                </p>
            </div>
            <div style="align-items: flex-end;">
                <table>
                    <tr>
                        <b>Invoice No : </b>${Invoice}<br/>
                    </tr>
                    <tr>
                        <b>Date : </b> ${dateFormat(Date.now(), "dd-mm-yyyy")}<br/>
                    </tr>
                    <tr>
                        <b>Time : </b>${GetTime(new Date())}</p>
                    </tr>
                </table>
            </div>
        </div>
        <div style="height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;">
            <table style="width:100%; border-collapse: collapse;">
                <tr style="background-color: rgba(171, 171, 169, 0.794); color: #000; border-top:2px solid #000;">
                  <th style="height: 30px;">Index</th>
                  <th style="height: 30px;">Product Name</th>
                  <th style="height: 30px;">Price(Per)</th>
                  <th style="height: 30px;">Quantity</th>
                  <th style="height: 30px;">Total</th>
                </tr>
                <tr style="background-color: transparent;
                border-bottom: 2px solid #000;
                border-top:2px solid #000;
                ">
                  <td style="text-align: center;height: 30px;">1</td>
                  <td style="text-align: center;height: 30px;">${Product}</td>
                  <td style="text-align: center;height: 30px;">${parseFloat(
                    parseFloat(Total) / parseFloat(Quantity)
                  ).toFixed(2)}</td>
                  <td style="text-align: center;height: 30px;">${Quantity}</td>
                  <td style="text-align: center;height: 30px;">₹ ${Total}</td>
                </tr>
                
               
              </table>
              
                <!-- <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Received balance :  1</div>
          
              <hr/>
              <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Grand Total : 1</div>
              <hr/>
              <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Payment Mode : Cash</div>
              <hr/> -->
              <div style="width:100%;align-self: flex-end; display: flex; flex-direction: row;
              margin-top: 20px;
              margin-bottom: 20px;
              ">
                <div style="width:40%"></div>
                  <table style="width: 50%; align-self: flex-end;">
                  <tr>
                  <th style="text-align: start;">Grand Total : </th>
                  <td style="text-align: center;height: 30px;">₹ ${Total}</td>
              </tr>
                        <tr style="border-bottom: solid ;">
                            <th style="text-align: start;">Received Balance : </th>
                            <td style="text-align: center;height: 30px;">₹ ${ReceivedBalance}</td>
                        </tr>
                       
                        <tr style="border-bottom: solid ;">
                        <th style="text-align: start;">Remaining Balance : </th>
                        <td style="text-align: center;height: 30px;">₹ ${RemainingBalance}</td>
                    </tr>
                        <tr>
                            <th style="text-align: start;">Payment Method: </th>
                            <td style="text-align: center;height: 30px;">${PaymentType}</td>
                        </tr>
                  </table>
              </div>
              <div style="height: 4px; width: 100%; background-color: rgba(171, 171, 169, 0.794);;"></div>
        </div>
        <div style="display: flex;   justify-content: space-around; height: 6vh; margin-bottom: 10px;">
            <table style="width: 100%; text-align: center;">
                <tr>
                    <th><b>${company_name}</b></th>
                    <th></th>
                </tr>
                <tr>
                    <td>${company_address}</td>
                    <td>${company_contact}</td>
                </tr>
            </table>
        </div>
    </div>
  </body>
</html>
`;



export { PdfCode };