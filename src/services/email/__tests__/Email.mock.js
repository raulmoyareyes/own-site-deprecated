jest.mock('../../email', () => ({
  Email: {
    send: jest.fn(),
  }
}))