import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

export function useScroll() {
  const isReachBottom = ref(false)

  function scrollCB() {
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollHeight
    console.log(scrollTop, clientHeight, scrollHeight)
    if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
      isReachBottom.value = true
    }
  }

  onActivated(() => {
    window.addEventListener('scroll', scrollCB)
  })

  onDeactivated(() => {
    window.removeEventListener('scroll', scrollCB)
  })

  onMounted(() => {
    window.addEventListener('scroll', scrollCB)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollCB)
  })

  return { isReachBottom }
}
