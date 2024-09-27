

async function subs()
{
    document.getElementById('mainDiv').innerHTML = 'loading...';
    await delay(2000);
    document.getElementById('mainDiv').innerHTML = `
    <div class="card bg-gradient-success">
    
         <table style="table table-hover">
                    <tr>
                        <th>Subscriber</th>
                        <th>Joined On</th>
                        <th>Plan</th>
                        <th>Value</th>
                        <th>Total Value (Aug 2024)</th>
                        <th>Next Cycle</th>
                    </tr>
                    <tr></tr><td>Zion Taxi Services</td><td>29 November 2023</td><td>Yearly</td><td>50 EUR/month</td><td>400 EUR</td><td>29 November 2024</td></tr>
                    <tr></tr><td>Harmain Rentals</td><td>13 December 2023</td><td>Yearly</td><td>65 EUR/month</td><td>520 EUR</td><td>13 December 2024</td></tr>
                    <tr></tr><td>Skaha Car Rentals</td><td>20 December 2023</td><td>Yearly</td><td>40 EUR/month</td><td>320 EUR</td><td>20 December 2024</td></tr>
                    <tr></tr><td>KAP Car rental Lagos</td><td>28 December 2023</td><td>Yearly</td><td>45 EUR/month</td><td>360 EUR</td><td>28 December 2024</td></tr>
            </table>
    </div>
    <br>
    <div style="width: 100%;font-size: 10px;">

        * Based on data collected from your github account. To cancel or create new subscription, please create a new branch on the same git repository and 
    enter relevant package ID to track data seamlessly.
                        
    
    </div>
    `;
}

async function balance()
{
    document.getElementById('mainDiv').innerHTML = 'loading...';
    await delay(2000);
    document.getElementById('mainDiv').innerHTML = `
        <table>
                    <tr>
                        <th>Account Balance Statement for WS_MSB_01 (Stripe based monthly user subscription plan)</th>
                        <th>Balance Summary</th>
                    </tr>
                    <tr></tr><td>EUR balance on 21 December 2023 [GMT+05:30]</td><td>10.00 EUR (+)</td></tr>
                    <tr></tr><td>EUR balance on 21 January 2024 [GMT+05:30]</td><td>210.00 EUR (+)</td></tr>
                    <tr></tr><td>EUR balance on 21 February 2024 [GMT+05:30]</td><td>410.00 EUR (+)</td></tr>
                    <tr></tr><td>EUR balance on 21 March 2024 [GMT+05:30]</td><td>610.00 EUR (+)</td></tr>
                    <tr></tr><td>[Withdrawal Request Created ID : TRWIBEB1XXX_IN_116228]</td></tr>
                    <tr></tr><td>EUR balance on 21 April 2024 [GMT+05:30]</td><td>810.00 EUR (+)</td></tr>
                    <tr></tr><td>EUR balance on 21 May 2024 [GMT+05:30]</td><td>1,010.00 EUR (+)</td></tr>
                    <tr></tr><td>[Withdrawal Request Cancelled ID : TRWIBEB1XXX_IN_116228]</td><td></td></tr>
                    <tr></tr><td>EUR balance on 21 June 2024 [GMT+05:30]</td><td>1,210.00 EUR (+)</td></tr>
                    <tr></tr><td>WhatsApp Integration [Subscription ID : TRWIBEB1XXX_US_118736]</td><td>75 EUR (-)</td></tr>
                    <tr></tr><td>EUR balance on 21 July 2024 [GMT+05:30]</td><td>1,410.00 EUR (+)</td></tr>
                    <tr></tr><td>Cancelled WhatsApp Integration [Subscription ID : TRWIBEB1XXX_US_210091]</td><td>0 EUR </td></tr>
                    <tr></tr><td>Cancelled WhatsApp Integration [Subscription ID : TRWIBEB1XXX_US_761128]</td><td>0 EUR </td></tr>
                    <tr></tr><td>EUR balance on 21 August 2024 [GMT+05:30]</td><td>1,610.00 EUR (+)</td></tr>
                    <tr></tr><td>Clearing Initiated to Connected Account on 02 September 2024</td><td>510.00 EUR (-)</td></tr>
                    <tr></tr><td>Verification Passed on 24 September 2024 [GMT+05:30] for 510.00 EUR settlement</td><td>[[]]</td></tr>
                    <tr></tr><td>Settlement Initiated on 25 September 2024 [GMT+05:30] for 510.00 EUR to [HDFC *****308**6228 JIG**** PA*** K ] <sup>^^</sup></td><td>[[]]</td></tr>
                </table>
                <hr/>
                <div style="width: 100%;font-size: 10px;">
                    EUR to INR Settlement Terms:<br>
                   
                            * For Stripe based plans, settlement to connected INR bank account upon withdrawal of funds can be done only after performing necessary verification of subscription
    status which might result in delay in settlements of funds.
    All settlement requests will undergo a minimum 1-month lock-in period to account for any cancellation charges. The lock-in period will be waived for accounts connected
    to Wise for more than 1 year.
    Please read settlement related policy before raising support tickets.<br>
    ^^ Settlement towards connected INR bank account may take upto 12 working days (maximum). You can connect to our support team via e-mail if not done within 12 days from the date of initiation.
                        
    
                </div>
    `;
}

async function cleared()
{
    document.getElementById('mainDiv').innerHTML = 'loading...';
    await delay(2000);
    document.getElementById('mainDiv').innerHTML = `
    <div class="card bg-gradient-info">
    <h4><b>Current Settlement Summary:</b></h4>
    Settlement Initiated : 25 September 2024 [GMT+05:30] for 510.00 EUR to [HDFC *****308**6228 JIG**** PA*** K ] <br>
    Estimated Date :  10 October 2024 [GMT+05:30]<br><br>
    <div style="width: 100%;font-size: 10px;">
                    EUR to INR Settlement Terms:<br>
                   
                            * For Stripe based plans, settlement to connected INR bank account upon withdrawal of funds can be done only after performing necessary verification of subscription
    status which might result in delay in settlements of funds.
    All settlement requests will undergo a minimum 1-month lock-in period to account for any cancellation charges. The lock-in period will be waived for accounts connected
    to Wise for more than 1 year.
    Please read settlement related policy before raising support tickets.<br>
    ^^ Settlement towards connected INR bank account may take upto 12 working days (maximum). You can connect to our support team via e-mail if not done within 12 days from the date of initiation.
                        
    
                </div>
                `;
}

async function api()
{
    document.getElementById('mainDiv').innerHTML = 'loading...';
    await delay(200);
    document.getElementById('mainDiv').innerHTML = `
     <div class="card-body">
                Please refer to github home for detailed analysis report.
    </div>
    `
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}