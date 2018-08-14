import i18n from 'i18next'

i18n.t = jest.fn().mockImplementation(key => key)
