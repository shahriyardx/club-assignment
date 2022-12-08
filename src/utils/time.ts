export const convertToDuration = (second: number): string => {
  let hours = 0
  let minutes = 0
  let seconds = second

  if (!seconds) {
    return '0s'
  }

  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600)
    seconds = seconds % 3600
  }

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
  }

  let duration = ''

  if (hours) {
    duration += `${hours}h `
  }

  if (minutes) {
    duration += `${minutes}m `
  }

  if (seconds) {
    duration += `${seconds}s `
  }

  return duration
}