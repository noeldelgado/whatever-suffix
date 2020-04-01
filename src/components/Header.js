import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, IconButton, Popover, TextField, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { GitHub, Info } from '@material-ui/icons';
import InfoComponent from '/components/Info';
import { version } from '/../package.json';
import styles from './Header.module.css';

const CssPopover = withStyles({
  root: {
    '& .MuiPopover-paper': {
      backgroundColor: 'var(--app-color-bg)',
      color: 'rgba(255, 255, 255, 0.87)',
      borderRadius: 0,
      maxWidth: '640px'
    }
  }
})(Popover);

const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'var(--app-color-text)',
    },
    '& label.Mui-focused': {
      color: 'var(--app-color-text)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--app-color-text)',
    }
  },
})(TextField);

const Header = ({ suffix, onChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'info-popover' : undefined;

  return (
    <Box component='header' className={styles.header} display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' alignItems='center'>
        <svg width="44px" height="44px" viewBox="0 0 44 44">
          <path stroke="currentColor" d="M2.5 2.5h41v41h-41z" fill="none"/>
          <path stroke="currentColor" d="M.5.5h41v41H.5z" fill="none"/>
          <text style={{fontSize: '18px', fontWeight: 700}}>
            <tspan x="14" y="34">w_</tspan>
          </text>
        </svg>
        <Box mx={1}>
          <Tooltip title="Info">
            <IconButton
              style={{padding: '12px', borderRadius: '50%'}}
              color='inherit'
              onClick={(ev) => setAnchorEl(ev.currentTarget)}
              aria-describedby={id}
              aria-label="project info"
            >
              <Info width={16} height={16} fontSize='small' />
            </IconButton>
          </Tooltip>
          <CssPopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <InfoComponent/>
          </CssPopover>
        </Box>
        <CssTextField
          id='suffix-input-field'
          defaultValue={suffix}
          label='Suffix'
          onChange={onChange}
        />
      </Box>
      <Box>
        <Tooltip title='View source on GitHub' placement='bottom-end'>
          <Button
            href={process.env.REPOSITORY}
            target='_blank'
            rel='noopener noreferrer'
            size='small'
            color='inherit'
            aria-label='view source'
            startIcon={<GitHub/>}
          >
            {version}
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  suffix: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default memo(Header);
