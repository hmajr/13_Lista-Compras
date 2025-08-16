const btnAdd    = document.getElementById('btn-new-item')
const input     = document.getElementById('new-item')
const shopList  = document.querySelector('.shop-list')

btnAdd.addEventListener('click', e => {
  e.preventDefault()
  const texto = input.value.trim()
  if (!texto) return

  const ts     = Date.now()
  const itemId = `item-${ts}`

  const li          = document.createElement('li')
  li.classList.add('shop-item')

  const imgCheckbox = document.createElement('img')
  imgCheckbox.src    = './assets/input/checkbox.svg'
  imgCheckbox.alt    = ''

  const checkbox     = document.createElement('input')
  checkbox.type      = 'checkbox'
  checkbox.name      = itemId
  checkbox.id        = itemId

  const spanItem     = document.createElement('span')
  spanItem.textContent = texto

  const imgTrash     = document.createElement('img')
  imgTrash.src       = './assets/icons/trash.svg'
  imgTrash.alt       = ''
  imgTrash.addEventListener('click', () => {
    li.remove()          
    showDeleteWarning()  
  })

  li.append(imgCheckbox, checkbox, spanItem, imgTrash)
  shopList.appendChild(li)

  input.value = ''
  input.focus()
})

function showDeleteWarning() {
  const notificationContainer = document.querySelector('.notification-container')
  const warningDiv = document.createElement('div')
  warningDiv.classList.add('delete-warning')

  const imgWarn = document.createElement('img')
  imgWarn.src = './assets/icons/warning.svg'
  imgWarn.alt = ''

  const span = document.createElement('span')
  span.textContent = 'O item foi removido da lista'

  const imgClose = document.createElement('img')
  imgClose.src = './assets/icons/cross-small.svg'
  imgClose.alt = ''
  imgClose.addEventListener('click', () => warningDiv.remove())

  warningDiv.append(imgWarn, span, imgClose)
  notificationContainer.appendChild(warningDiv)

  setTimeout(() => {
    if (warningDiv.parentNode) warningDiv.remove()
  }, 2000)
}