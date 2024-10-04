const truncateText = (text: string, length: number = 33): string => {
  return text.length > length ? text.substring(0, length) + '...' : text
}

export default truncateText
