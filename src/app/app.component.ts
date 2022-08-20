import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PayUPayment';
  constructor(private api: ApiService) {

  }
  payUPayment() {

    this.api.post('/payment_getway/payumoney').subscribe(arg => {
      console.log("arg", arg);
      const info:any=arg.info;

      console.log(info);
      let htmlBody = `
        <html>
        <body>
    
    <form action="${info.pay_url}" method="POST" id="payu_form">
         <input type="hidden" name="txnid" value="${info.txnid}" />
       <input type="hidden" name="phone" value="${info.phone}" />
       <input type="hidden" name="amount" value="${info.amount}" />
       <input type="hidden" name="email" value="${info.email}" />
      <input type="hidden" name="firstname" value="${info.first_name}" />
       <input type="hidden" name="furl" value="${info.fail_url}" />
       <input type="hidden" name="surl" value="${info.callback_url}" />  
        <input type="hidden" name="key" value="${info.key}" /> 
        <input type="hidden" name="productinfo" value="${info.productinfo}" />
       <input type="hidden" name="plan_name" value="${info.plan_name}" />
      <input type="hidden" name="service_provider" value="${info.service_provider}" /> 
      <input type="hidden" name="hash" value="${info.hash}" /> 
      <button type="submit" value="submit" #submitBtn></button>
        </form>
        <script type="text/javascript">document.getElementById('payu_form').submit();
        </script>
</body>
        </html>
        `;
        const winUrl=URL.createObjectURL(new Blob([htmlBody],{type:"text/html"}));
        window.location.href=winUrl
    })
  }
}
