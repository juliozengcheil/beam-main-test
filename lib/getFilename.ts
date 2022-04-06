export default function getFilename(fileUrl: string) {
  const hyphenIndex = fileUrl.indexOf('-')
  return fileUrl.substring(hyphenIndex + 1)
}
