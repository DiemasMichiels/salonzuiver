export const DATE_YEAR_REGEX = /{{date=(.*)}}/

export const getActiveYears = (content: string | null) => {
  if (!content) return null

  let year = ''
  const dateString = content.match(DATE_YEAR_REGEX)?.[1]

  if (dateString) {
    year = (new Date().getFullYear() - new Date(dateString).getFullYear())
      .toString()
      .slice(-2)
  }

  return content.replace(DATE_YEAR_REGEX, year)
}
