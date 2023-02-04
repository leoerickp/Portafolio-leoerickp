export const StringToArray = (stringValue) => {
  return stringValue
    .trim()
    .split("\n")
    .filter((row) => {
      const value = row.trim();
      if (value !== "" && value !== undefined) return value;
    });
};
