'use stict'

{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set'
  ]

  let word = words[Math.floor(Math.random() * words.length)]
  let loc = 0
  let score = 0
  let miss = 0
  let startTime
  const timeLimit = 3 * 1000

  const target = document.getElementById('target')
  const scoreLabel = document.getElementById('score')
  const missLabel = document.getElementById('miss')
  const timerLabel = document.getElementById('timer')
  const result = document.getElementById('result')

  function updateTarget () {
    let placeholder = ''
    for (let i = 0; i < loc; i++) {
      placeholder += '_'
    }
    target.textContent = placeholder + word.substring(loc)
  }

  function updateTime () {
    const timeLeft = startTime + timeLimit - Date.now()
    timerLabel.textContent = (timeLeft / 1000).toFixed(2)

    const timeoutId = setTimeout(() => {
      updateTime()
    }, 10)

    if (timeLeft < 0) {
      clearTimeout(timeoutId)
      result.classList.remove('hidden')
    }
  }

  window.addEventListener('click', () => {
    target.textContent = word
    startTime = Date.now()
    updateTime()
  })

  window.addEventListener('keydown', (e) => {
    // console.log(e.key)
    if (e.key === word[loc]) {
      loc++
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)]
        loc = 0
      }
      updateTarget()
      score++
      scoreLabel.textContent = score
      // console.log('ok')
    } else {
      miss++
      missLabel.textContent = miss
      // console.log('ng')
    }
  })
}
