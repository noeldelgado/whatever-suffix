import React, { memo, useState } from 'react';
import { Box, IconButton, Popover, Tooltip } from '@material-ui/core';
import { GitHub, Info, Settings } from '@material-ui/icons';
import InfoComponent from '/components/Info';
import SettingsComponent from '/components/Settings';
import styles from './Header.module.css';

const Header = () => {
  const [infoOpen, setInfoOpen] = React.useState(false);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const settingsOpen = Boolean(settingsAnchorEl);

  return (
    <Box
      component='header'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      className={styles.header}
    >
      <Box display='flex' alignItems='center'>
        <svg width={44} height={44} viewBox='0 0 44 44'>
          <path stroke='currentColor' d='M2.5 2.5h41v41h-41z' fill='none'/>
          <path stroke='currentColor' d='M.5.5h41v41H.5z' fill='none'/>
          <text style={{ fontSize: 18, fontWeight: 700 }}>
            <tspan x='14' y='34'>w_</tspan>
          </text>
        </svg>
        <Box ml={1}>
          <Tooltip title='Info'>
            <IconButton
              color='inherit'
              onClick={(ev) => setInfoOpen(true)}
              aria-label='project info'
            >
              <Info fontSize='small'/>
            </IconButton>
          </Tooltip>
          <InfoComponent open={infoOpen} onClose={() => setInfoOpen(false)}/>
        </Box>
        <Box>
          <Tooltip title='Options'>
            <IconButton
              color='inherit'
              onClick={(ev) => setSettingsAnchorEl(ev.currentTarget)}
              aria-label='options'
            >
              <Settings fontSize='small'/>
            </IconButton>
          </Tooltip>
          <Popover
            open={settingsOpen}
            anchorEl={settingsAnchorEl}
            onClose={() => setSettingsAnchorEl(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <SettingsComponent/>
          </Popover>
        </Box>
      </Box>
      <Box>
        <Tooltip title='View source on GitHub'>
          <IconButton
            href={process.env.REPOSITORY}
            target='_blank'
            rel='noopener noreferrer'
            color='inherit'
            aria-label='view source on github (will open in a new window)'
          >
            <GitHub fontSize='small'/>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default memo(Header);
