import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
        <Typography variant='body1'>Home</Typography>
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        return last ? (
          <Typography key={index} color='text.primary'>
            {value}
          </Typography>
        ) : (
            <Typography variant='body1'>Details</Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
