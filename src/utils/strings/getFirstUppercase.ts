export const getFirstUppercased = (str: string) => {
  if (str.length === 0 || str === "")  {
    return ""
  } else {
    return str.split("")[0].toUpperCase() + str.slice(1);
  }
}