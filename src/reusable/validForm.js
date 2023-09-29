const isNotEmpty = (value) => value.trim().length > 0;
const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateName = (name) => isNotEmpty(name) && name.length >= 3;
export const validatePhone = (phone) => isNotEmpty(phone) && phone.length >= 3;
export const validateEmail = (email) => isNotEmpty(email) && isEmailValid(email);
export const validateSubject = (subject) => isNotEmpty(subject) && subject.length >= 3;
export const validateDescription = (description) => isNotEmpty(description) && description.length >= 50;


