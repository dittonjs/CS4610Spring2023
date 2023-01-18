import { FormInput } from '../components/FormInput';

export const SignUpPage = () => {
  return (
    <main>
      <h2>SignUp</h2>
      <form>
        <FormInput >
          Email
        </FormInput>
        <FormInput >
          Email Confirmation
        </FormInput>
        <FormInput type="password">
          Password
        </FormInput>
        <FormInput type="password">
          Password Confirmation
        </FormInput>

        <div className="controls">
          <button>Sign Up</button>
        </div>
      </form>
    </main>
  )
}
import { ReactNode } from 'react';
interface CenteredContainerProps {
  children: ReactNode
}

const CenteredContainer = ({ children }: CenteredContainerProps) => {
  <div className="flex-justify-center">
    {children}
  </div>
}