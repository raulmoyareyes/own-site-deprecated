const Pageclip = window.Pageclip

const KEY = 'QBX8OwMVNln17IxKu5FqH4riI14KBuHg'
const FORM_NAME = 'contact-form'

export class Email {

  static send(data, callback) {
    Pageclip.send(KEY, FORM_NAME, data, callback)
  }

}