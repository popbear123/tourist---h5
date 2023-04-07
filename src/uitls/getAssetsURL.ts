// 获取资源路径
export const getAssetsURL = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}
