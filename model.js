const BalanceResponse = class {
  constructor(response) {
    this._amount = response.amount;
    this._currency = response.type;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }
}

const SMSResponse = class {
  constructor(response, message) {
    this._message = message;
    this._balance = response.remaining_balance;
    this._total = response.total_sms;
    this._sended_number_list = response.phone_number_list;
    this._failed_number_list = response.bad_phone_number_list;
  }

  get total_price() {
    let totalPrice = 0;
    for (const number of this._sended_number_list) {
      totalPrice += number.price;
    }

    return totalPrice;
  }

  get message() {
    return this._message;
  }

  get balance() {
    return this._balance;
  }

  get total() {
    return this._total;
  }

  get sended_number_list() {
    return this._sended_number_list;
  }

  get failed_number_list() {
    return this._failed_number_list;
  }
}

module.exports = {
  BalanceResponse,
  SMSResponse
}