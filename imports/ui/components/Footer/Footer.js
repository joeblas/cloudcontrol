import React from 'react';
import { year } from '@cleverbeagle/dates';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import './Footer.scss';

const copyrightYear = () => {
  const currentYear = year();
  return currentYear === '2017' ? '2017' : `2017-${currentYear}`;
};

const Footer = () => (
  <div className="Footer">
    <Grid>
      <p className="pull-left">&copy; {copyrightYear()} CloudControl, LLC</p>
      <div className="pull-right">
        <a href="https://github.com/hads17">Bradley S. | </a>
        <a href="https://github.com/bahrtender3">Dustin Bahr | </a>
        <a href="https://github.com/ethanzander">Ethan Zander | </a>
        <a href="https://github.com/joeblas">Joe Blas | </a>
        <a href="https://github.com/tylern88">Tyler Negro</a>
      </div>
    </Grid>
  </div>
);

Footer.propTypes = {};

export default Footer;
