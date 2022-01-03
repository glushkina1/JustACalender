const toLocaleDate = (date: Date, locales: string) => {
  return date.toLocaleDateString(locales, {
    year: 'numeric',
    month: 'long',
  })
}

export { toLocaleDate }
