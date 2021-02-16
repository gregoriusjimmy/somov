import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { TextField, TextFieldProps } from '@material-ui/core'

const useStyles = makeStyles<Theme, TextFieldProps>((theme: Theme) =>
  createStyles({
    root: {
      // height: '50px',
      marginBottom: 20,
      borderRadius: 9,
      backgroundColor: 'white',
      overflow: 'hidden',
      color: 'black',
      '& .MuiFilledInput-root': { background: 'white' },
      '& .MuiInputBase-input': { background: 'white' },
    },
  })
)

const CustomTextField: React.FC<TextFieldProps> = (props) => {
  const classes = useStyles(props)

  return <TextField className={classes.root} {...props} />
}

export default CustomTextField
