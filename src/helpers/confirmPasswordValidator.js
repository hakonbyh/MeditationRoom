export function confirmPasswordValidator(password, confirmPassword) {
    if (!confirmPassword) return "This field cannot be empty."
    if (confirmPassword.length < 5) return 'Password must be at least 5 characters long.'
    if (password !== confirmPassword) return "Passwords do not match.";
    return '';
  }