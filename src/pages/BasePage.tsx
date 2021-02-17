import React, { useState } from 'react'
import { Box, Link, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CustomButton from '../components/buttons/CustomButton'
import backgroundImage from '../assets/images/background_img.png'
import logo from '../assets/images/SOMOV2x.png'
import SignInForm from '../components/forms/SignInForm'
import SignUpForm from '../components/forms/SignUpForm'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      display: 'block',
      margin: theme.spacing('7vh', 'auto'),
      width: 128,
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing('1vh', 'auto'),
      },
      [theme.breakpoints.up('md')]: {
        width: 256,
      },
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
      lineHeight: '40px',
      padding: theme.spacing(0, 2),
      textTransform: 'uppercase',
      letterSpacing: '0.29em',
      [theme.breakpoints.up('sm')]: {
        marginTop: '10vh',
        lineHeight: '50px',
      },
    },
    buttonsContainer: {
      width: '80%',
      marginTop: theme.spacing(8),
      [theme.breakpoints.up('sm')]: {
        width: '50%',
      },
      [theme.breakpoints.up('md')]: {
        width: '35%',
      },
    },
    heroContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'absolute',
      height: '100%',
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
)

export interface BasePageProps {}

type PopUpSwitcherType = 'signup' | 'signin' | null

const BasePage: React.FC<BasePageProps> = () => {
  const [popUpSwitcher, setPopupSwitcher] = useState<PopUpSwitcherType>(null)
  const classes = useStyles()
  return (
    <div>
      <div className={classes.heroImage}>
        <div className={popUpSwitcher ? classes.darkOverlay : ''}></div>
        <div className={classes.heroContent}>
          {!popUpSwitcher && <img className={classes.logo} src={logo} alt='Logo' />}
          {popUpSwitcher === 'signup' ? (
            <div>
              <SignUpForm />
              <Typography variant='subtitle2'>
                already have an account?{' '}
                <Link className={classes.link} onClick={() => setPopupSwitcher('signin')}>
                  Sign in
                </Link>
              </Typography>
            </div>
          ) : popUpSwitcher === 'signin' ? (
            <div>
              <SignInForm />
              <Typography variant='subtitle2'>
                don't have an account?{' '}
                <Link className={classes.link} onClick={() => setPopupSwitcher('signup')}>
                  Sign up
                </Link>
              </Typography>
            </div>
          ) : (
            <>
              <Typography className={classes.heroTitle} variant='h2' align='center'>
                Share your watching <br></br>
                experience with your friends
              </Typography>
              <Box
                className={classes.buttonsContainer}
                display='flex'
                mx='auto'
                flexDirection='column'
              >
                <CustomButton
                  onClick={() => setPopupSwitcher('signup')}
                  fullWidth
                  variant='contained'
                  color='primary'
                  disableElevation
                >
                  Sign up
                </CustomButton>
                <CustomButton
                  onClick={() => setPopupSwitcher('signin')}
                  fullWidth
                  variant='outlined'
                  color='secondary'
                  disableElevation
                >
                  Sign in
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
