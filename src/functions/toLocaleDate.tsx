const toLocaleDateHeader = (date: Date, locales: string) => {
  return date.toLocaleDateString(locales, {
    year: 'numeric',
    month: 'long',
  })
}

const toLocaleDateToday = (date: Date, locales: string) => {
  return date.toLocaleDateString(locales, {
    day:'numeric',
    month: 'long',
  })
}

export { toLocaleDateHeader, toLocaleDateToday }
