'use strict';

module.exports = {
  title: 'Input Select',
  status: 'beta',
  handle: 'input-select',
  context: {
    select_name: 'select_name',
    select_id: 'select_id',
    label: 'Input Select',
    options: [
      {
        label: 'Option 1'
      },
      {
        label: 'Option 2'
      },
      {
        optgroup: true,
        label: 'Option group',
        optgroupoptions: [
          {
            label: 'Option 3'
          },
          {
            label: 'Option 4'
          }
        ]
      }
    ]
  },
  variants: [
    {
      name: 'default',
      handle: 'input-text'
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
