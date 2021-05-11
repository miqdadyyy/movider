# Movider 
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
        console.log(balance);    
    });

// Send SMS to number
moviderClient.sendSMS('62888888888', 'Hello World', {
    from: 'MOVIDER', // Sender Name
    callback: { // Callback after message sended to deliver report / data
        url: 'https://api.example.com/moivder-callback',
        method: 'POST'    
    }
})
```

### Usage Response
Check Balance
```json
{ 
    "type": "USD", 
    "amount": 20.84 
}
```

Send SMS
```json

```

## Security
If you discover any security related issues, please email miqdad.farcha@gmail.com instead of using the issue tracker.  

## Credits
- [Miqdad Farcha](https://github.com/miqdadyyy) 

## License
license. Please see the [license file](https://github.com/miqdadyyy/movider/blob/master/LICENSE) for more information.
