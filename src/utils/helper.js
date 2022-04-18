export const floors = Array(51)
  .fill()
  .map((v, i) => i);

export const items = Array(9)
  .fill()
  .map((v, i) => {
    return { title: '' };
  });

export const options = ['No', 'Yes'];

export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Email is a required field';
    return error;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
    return error;
  }
};

export const validateEmpty = (value) => {
  let error;
  if (!value) {
    error = `Required field`;
    return error;
  }
};

export const hasParkingCovered = (has, covered) => {
  let message;
  if (has === 'Yes') {
    if (covered === 'Yes') {
      message = ' Yes. Its covered';
    } else {
      message = ' Yes. Its not covered';
    }
  } else if (has === '') {
    message = '';
  } else {
    message = ' No';
  }
  return message;
};

export const dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol'
});
