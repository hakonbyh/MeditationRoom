export function confirmPasswordValidator(password, confirmPassword) {
    if (!password) return "Password can't be empty."
    if (password.length < 5) return 'Password must be at least 5 characters long.'
    if (password !== confirmPassword) return "Passwords do not match.";
    return '';
  }