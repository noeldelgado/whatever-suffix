import React, { memo } from 'react';
import { Box, FormControl, FormGroup, FormControlLabel, Switch, TextField } from '@material-ui/core';
import useStore from '/store';

const Settings = () => {
  const [{ suffix, showLogo, showTagline }, actions] = useStore(state => ({
    suffix: state.suffix,
    showLogo: state.showLogo,
    showTagline: state.showTagline
  }));

  return (
    <Box p={2}>
      <FormControl component='fieldset'>
        <FormGroup aria-label='options'>
          <TextField
            id='suffix-input-field'
            label='Suffix'
            defaultValue={suffix}
            onChange={(ev) => actions.suffix.set(ev.currentTarget.value)}
          />
          <FormControlLabel
            label='Show logo'
            control={
              <Switch
                color='primary'
                checked={showLogo}
                onChange={() => actions.logo.show(!showLogo)}
              />
            }
          />
          <FormControlLabel
            label='Show tagline'
            control={
              <Switch
                color='primary'
                checked={showTagline}
                onChange={() => actions.tagline.show(!showTagline)}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default memo(Settings);
