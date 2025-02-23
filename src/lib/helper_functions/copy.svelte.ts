//function that takes a value and copies it to the clipboard
export function copy(value: string) {
  navigator.clipboard.writeText(value);
}
