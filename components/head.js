/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title = 'Second Chance Styles', description = 'Online Thrift Store' }) => (
  <NextHead>
    <meta charSet='UTF-8'/>
    <title>{title}</title>
    <meta name='description' content={ description }/>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Head;
