const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();
const Movider = require('../index');
var movider = undefined;

beforeEach(() => {
  movider = new Movider(process.env.MOVIDER_API_KEY, process.env.MOVIDER_API_SECRET);
})

it("Testing getBalance function", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
        amount: 420.69,
        type: "USD"
      }
    )
  );

  const balance = await movider.getBalance();
  expect(balance.amount).toEqual(420.69);
  expect(balance.currency).toEqual("USD");
});

it("Testing sending SMS function", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      remaining_balance: 420.69,
      total_sms: 2,
      phone_number_list: [
        {
          number: "628123456789",
          message_id: "ABCDEFGHIJKLMNOP",
          price: 0.013
        },
        {
          number: "628111111111",
          message_id: "QRSTUVWXYZ",
          price: 0.013
        }
      ],
      bad_phone_number_list: []
    })
  );

  const sms = await movider.sendSMS('+628123456789,+628111111111', 'Hello World');
  expect(sms.total_price).toEqual(0.026);
  expect(sms.message).toEqual('Hello World');
  expect(sms.balance).toEqual(420.69);
  expect(sms.total).toEqual(2);
  expect(sms.sended_number_list).toEqual([
    {
      number: "628123456789",
      message_id: "ABCDEFGHIJKLMNOP",
      price: 0.013
    },
    {
      number: "628111111111",
      message_id: "QRSTUVWXYZ",
      price: 0.013
    }
  ]);
  expect(sms.failed_number_list).toEqual([]);
});