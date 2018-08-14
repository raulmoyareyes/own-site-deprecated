const KEY = process.env.REACT_APP_PAGECLIP
const FORM_NAME = 'contact-form'

export function send(data, callback) {
  window.Pageclip.send(KEY, FORM_NAME, data, callback)
}