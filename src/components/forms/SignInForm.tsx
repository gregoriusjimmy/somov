import React from 'react'
import { useForm } from 'react-hook-form'
import CustomButton from '../buttons/CustomButton'
import CustomTextField from '../inputs/CustomTextField'

export interface SignInFormProps {}

type Inputs = {
  example: string
  exampleRequired: string
}

const SignInForm: React.FC<SignInFormProps> = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>()
  const onSubmit = (data: Inputs) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField variant='filled' name='username' inputRef={register} />
      <CustomTextField variant='filled' name='email' type='email' inputRef={register} />
      <CustomTextField variant='filled' name='password' type='password' inputRef={register} />
      <CustomTextField
        variant='filled'
        name='password'
        type='confirmationPassword'
        inputRef={register}
      />
      <CustomButton type='submit' color='primary'>
        Submit
      </CustomButton>
    </form>
  )
}

export default SignInForm
