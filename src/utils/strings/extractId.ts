
export const extractId = (url: string): string => {
  if (url.length === 0 || url === "") {
    return "1"
  } else {
    const splitted: string[] = url.split("/")
    const splittedLen = splitted.length
    const id: string = splitted[splittedLen-2]
    return id
  }
}