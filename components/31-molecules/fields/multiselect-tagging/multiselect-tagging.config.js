'use strict';

module.exports = {
  title: 'Multiselect with tagging',
  status: 'beta',
  handle: 'multiselect-tagging',
  collated: true,
  context: {
    label: 'Label multiselect with tagging',
    for: 'multiselect_id',
    label_optional: 'Optional',

    field_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam. Nam pellentesque velit pharetra, accumsan ante at, gravida turpis. Cras venenatis velit ut ipsum molestie pretium. Vivamus tellus metus, pretium eu nibh vitae, eleifend luctus dolor. Morbi feugiat tristique ante eu egestas. Nunc ligula magna, fringilla sed consequat id, pellentesque at risus. Nunc ex elit, tincidunt at lorem vel, mattis gravida nisl. Praesent sodales nibh massa, id ultrices metus viverra id.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description multiselect with chosen.',

    multiselect_id: 'multiselect_id',
    multiselect_name: 'multiselect_name',
    options: [
      {
        label: 'Option 1'
      },
      {
        label: 'Option 2'
      },
      {
        label: 'Option 3'
      },
      {
        label: 'Option 4'
      }
    ]
  },
  variants: [
    {
      name: 'default',
      handle: 'multiselect-tagging'
    },
    {
      name: 'with-error',
      context: {
        modifier: 'error'
      }
    },
    {
      name: 'with-success',
      context: {
        modifier: 'success'
      }
    }
  ]
};
