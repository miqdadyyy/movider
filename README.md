# Movider 
![NPM](https://img.shields.io/npm/l/movider?color=red)
![npm](https://img.shields.io/npm/v/movider?color=blue)
![npm](https://img.shields.io/npm/dy/movider)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/miqdadyyy/movider/unit-test/master?color=green)

Unofficial package for Movider SMS Service

## Install
If you using npm : 
```
npm install movider --save
```
If you using yarn : 
```
yarn add movider
```

## Usage
For more detail you can check [here](https://developer.movider.co/reference)
```javascript
const Movider = require('movider');
const MOVIDER_API_KEY = process.env.MOVIDER_API_KEY || 'your-movider-key';
const MOVIDER_API_SECRET = process.env.MOVIDER_API_SECRET || 'your-movider-secret';

const moviderClient = new Movider(MOVIDER_API_KEY, MOVIDER_API_SECRET);

// Get Balance
moviderClient.getBalance()
    .then(balance => {
        console.log(balance.amount);    
    });

// Send SMS to number
moviderClient.sendSMS('+62888888888', 'Hello World', {
    from: 'MOVIDER', // Sender Name ID
    callback: { // Callback after message sended to deliver report / data
        url: 'https://api.example.com/movider-callback',
        method: 'POST'    
    }
})
```

### Response
**Check Balance :**  
| Property | Description              |
|----------|--------------------------|
| amount   | To get amount of balance |
| currency | Currency of balance      |

**Send SMS :** 
| Property           | Description                                 |
|--------------------|---------------------------------------------|
| message            | Your SMS Message                            |
| balance            | Remaining balance after sending SMS         |
| total              | Get total of number                         |
| total_price        | Get total of sms usage                      |
| sended_number_list | Get list of sended number (Array of object) |
| failed_number_list | Get list of failed number (Array of object) |

**Webhook Response :**
```
{
  "status": 200,
  "headers": {},
  "body": {
    "headers": {
      "host": "your-webhook-url.com",
      "x-amzn-trace-id": "Root=1-609cbf32-4ffc63d96531b6a744c8a481",
      "content-length": "158",
      "content-type": "application/x-www-form-urlencoded",
      "accept-encoding": "gzip",
      "user-agent": "Go-http-client/2.0"
    },
    "body": {
      "detail": "DELIVERIED",
      "message_id": "ABCDEFGHIJKLMNOP",
      "message_price": "0.013",
      "sent_date": "2021-05-13 05:52:55 +0000 UTC",
      "status": "OK",
      "to": "628123456789"
    },
    "inferred_body_type": "FORM",
    "method": "POST",
    "url": "https://your-webhook-url.com/",
    "client_ip": "0.1.234.5",
    "query": {}
  }
}
```

## Security
If you discover any security related issues, please email miqdad.farcha@gmail.com or using the issue tracker.  

## Credits
- [Miqdad Farcha](https://github.com/miqdadyyy) 

## License
license. Please see the [license file](https://github.com/miqdadyyy/movider/blob/master/LICENSE.md) for more information.