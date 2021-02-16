import classes from '*.module.css'
import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import CustomButton from '../buttons/CustomButton'
import CustomTextField from '../inputs/CustomTextField'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '30%',
      margin: 'auto',
    },
    title: {
      color: 'white',
      marginBottom: theme.spacing(4),
    },
  })
)

export interface SignUpFormProps {}

type Inputs = {
  example: string
  exampleRequired: string
}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const classes = useStyles()
  const { register, handleSubmit, watch, errors } = useForm<Inputs>()
  const onSubmit = (data: Inputs) => console.log(data)
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1'>
        SIGN UP
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display='flex' flexDirection='column'>
          <CustomTextField variant='filled' label='username' name='username' inputRef={register} />
          <CustomTextField
            variant='filled'
            label='email'
            name='email'
            type='email'
            inputRef={register}
          />
          <CustomTextField
            variant='filled'
            label='password'
            name='password'
            type='password'
            inputRef={register}
          />
          <CustomTextField
            variant='filled'
            label='retype password'
            name='password'
            type='confirmationPassword'
            inputRef={register}
          />
          <Box mt='20px'></Box>
          <CustomButton
            fullWidth
            variant='contained'
            color='primary'
            disableElevation
            type='submit'
          >
            Sign up
          </CustomButton>
        </Box>
      </form>
    </div>
  )
}

export default SignUpForm
