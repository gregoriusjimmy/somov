import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button, ButtonProps } from '@material-ui/core'

const useStyles = makeStyles<Theme, CustomButtonProps>((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 76,
      textTransform: 'none',
      height: 50,
      marginBottom: 20,
    },
  })
)

interface Props {
  color?: string
  secondary?: boolean
}

export type CustomButtonProps = Props & ButtonProps

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const classes = useStyles(props)
  return (
    <Button className={classes.root} {...props}>
      {props.children}
    </Button>
  )
}

export default CustomButton
