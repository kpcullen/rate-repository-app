import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native'
import SignInForm from '../../../Components/SignIn/SignInForm'
describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn((values) => {
        return values[0]
      })

      const username = 'kevin'
      const password = 'password'

      render(<SignInForm onSubmit={onSubmit} />)

      fireEvent.changeText(screen.getByPlaceholderText('username'), username)
      fireEvent.changeText(screen.getByPlaceholderText('password'), password)

      fireEvent.press(screen.getByText('Sign In'))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)

        const submittedValues = onSubmit.mock.calls[0][0]

        expect(submittedValues).toEqual({ username, password })
      })
    })
  })
})
