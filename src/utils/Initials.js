export const GetInitials = arg => {
  const [arg1, arg2] = arg.split(' ');
  const initials = arg1.charAt(0).toUpperCase() + arg2.charAt(0).toUpperCase();
  return initials;
};
