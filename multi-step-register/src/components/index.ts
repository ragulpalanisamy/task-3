export const formFields = [
    {
      id: 'first_name',
      label: 'First name',
      type: 'text',
      placeholder: 'John',
      required: true
    },
    {
      id: 'last_name',
      label: 'Last name',
      type: 'text',
      placeholder: 'Doe',
      required: true
    },
    {
      id: 'company',
      label: 'Company',
      type: 'text',
      placeholder: 'Flowbite',
      required: true
    },
    {
      id: 'phone',
      label: 'Phone number',
      type: 'tel',
      placeholder: '123-45-678',
      pattern: '[0-9]{3}-[0-9]{2}-[0-9]{3}',
      required: true
    },
    {
      id: 'website',
      label: 'Website URL',
      type: 'url',
      placeholder: 'flowbite.com',
      required: true
    },
    {
      id: 'visitors',
      label: 'Unique visitors (per month)',
      type: 'number',
      placeholder: '',
      required: true
    },
    {
      id: 'email',
      label: 'Email address',
      type: 'email',
      placeholder: 'john.doe@company.com',
      required: true
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: '•••••••••',
      required: true
    },
    {
      id: 'confirm_password',
      label: 'Confirm password',
      type: 'password',
      placeholder: '•••••••••',
      required: true
    }
  ];
  