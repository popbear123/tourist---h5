import dayjs from 'dayjs'

export function formatDate(date: string | number | Date) {
  return dayjs(date).format('MM月DD日')
}
