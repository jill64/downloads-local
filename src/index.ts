export const download = (
  filename: string,
  data: string | Parameters<typeof URL.createObjectURL>[0]
) => {
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.download = filename
  a.href = typeof data === 'string' ? data : URL.createObjectURL(data)
  a.click()
  a.remove()
}
