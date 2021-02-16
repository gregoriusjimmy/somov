import React, { useState } from 'react'
import { Box, Button, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomButton from '../components/buttons/CustomButton'
import backgroundImage from '../assets/images/background_img.png'
import logo from '../assets/images/SOMOV2x.png'
import SignInForm from '../components/forms/SignInForm'
import SignUpForm from '../components/forms/SignUpForm'

const useStyles = makeStyles({
  logo: {
    marginLeft: 60,
    marginTop: 43,
  },
  heroImage: {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  heroTitle: {
    color: 'white',
    marginTop: '20vh',
    lineHeight: '50px',
    textTransform: 'uppercase',
    letterSpacing: '0.29em',
  },
  heroContent: {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  darkOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  link: {
    cursor: 'pointer',
  },
})

export interface BasePageProps {}

type PopUpSwitcherType = 'signup' | 'signin' | null

const BasePage: React.SFC<BasePageProps> = () => {
  const classes = useStyles()
  const [popUpSwitcher, setPopupSwitcher] = useState<PopUpSwitcherType>(null)
  return (
    <div>
      <div className={classes.heroImage}>
        <img className={classes.logo} width='128' height='41' src={logo} alt='Logo' />;
        <div className={popUpSwitcher ? classes.darkOverlay : ''}></div>
        <div className={classes.heroContent}>
          {popUpSwitcher === 'signup' ? (
            <>
              <SignUpForm />
              <Typography variant='subtitle2'>
                already have an account?{' '}
                <Link className={classes.link} onClick={() => setPopupSwitcher('signin')}>
                  Sign in
                </Link>
              </Typography>
            </>
          ) : popUpSwitcher === 'signin' ? (
            <SignInForm />
          ) : (
            <>
              <Typography className={classes.heroTitle} variant='h1' align='center'>
                Share your watching <br></br>
                experience with your friends
              </Typography>
              <Box display='flex' flexDirection='column' width='25%' mx='auto' mt='80px'>
                <CustomButton
                  onClick={() => setPopupSwitcher('signup')}
                  fullWidth
                  variant='contained'
                  color='primary'
                  disableElevation
                >
                  Sign Up
                </CustomButton>

                <CustomButton
                  onClick={() => setPopupSwitcher('signin')}
                  fullWidth
                  variant='outlined'
                  color='secondary'
                  disableElevation
                >
                  Sign In
                </CustomButton>
              </Box>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BasePage
