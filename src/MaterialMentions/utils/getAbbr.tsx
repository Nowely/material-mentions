export const getAbbr = (str?: string, length: number = 3) => str?.split(' ').slice(0, length).map(s => s[0]).join('')