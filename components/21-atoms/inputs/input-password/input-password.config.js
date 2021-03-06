'use strict';

module.exports = {
  title: 'Input password',
  status: 'beta',
  handle: 'input-password',
  context: {
    password_name: 'password_name',
    password_id: 'password_id'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-password'
    },
    {
      name: 'success',
      hidden: 'hidden',
      context: {
        modifier: 'success'
      }
    },
    {
      name: 'error',
      hidden: 'hidden',
      context: {
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      hidden: 'hidden',
      context: {
        disabled: true
      }
    }
  ]
};
