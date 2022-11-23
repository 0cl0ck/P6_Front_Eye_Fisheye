export function firstNameValue(value) {
  const words = value.split(" ");
  let firstName = words[0];

  if (firstName.includes("-")) {
    firstName = firstName.replace("-", " ");
  }

  return firstName;
}
