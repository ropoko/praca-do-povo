export function capitalizeFirstLetter(text: string) {
  const res = text?.toLowerCase()?.trim() || '';
  return res.charAt(0).toUpperCase() + res.slice(1);
}
