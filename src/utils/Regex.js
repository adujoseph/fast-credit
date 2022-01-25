export const regexEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.match(regex)) {
    return true;
  } else {
    return 'Invalid Email Address';
  }
};
