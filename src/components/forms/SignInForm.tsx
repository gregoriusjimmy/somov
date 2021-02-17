import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import CustomButton from '../buttons/CustomButton'
import CustomTextField from '../inputs/CustomTextField'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        width: '50%',
      },
      [theme.breakpoints.up('md')]: {
        width: '30%',
      },
    },
    title: {
      color: 'white',
      marginBottom: theme.spacing(4),
    },
  })
)

export interface SignInFormProps {}

type Inputs = {
  example: string
  exampleRequired: string
}

const SignInForm: React.FC<SignInFormProps> = () => {
  const classes = useStyles()
  const { register, handleSubmit, watch, errors } = useForm<Inputs>()
  const onSubmit = (data: Inputs) => console.log(data)
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h2'>
        SIGN IN
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display='flex' flexDirection='column'>
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

          <Box mt='40px'></Box>
          <CustomButton
            fullWidth
            variant='contained'
            color='primary'
            disableElevation
            type='submit'
          >
            Sign in
          </CustomButton>
        </Box>
      </form>
    </div>
  )
}

export default SignInForm
