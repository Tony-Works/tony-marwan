import React, { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';

const Layout = (props: PropsWithChildren) => {
  return (
    <Stack
      direction="column"
      justifyItems="center"
      alignItems="center"
      sx={{
        marginInlineStart: 'auto',
        flex: 1,
        height: '100vh',
        width: '100%',
      }}>
      {props.children}
    </Stack>
  );
};

export default Layout;
