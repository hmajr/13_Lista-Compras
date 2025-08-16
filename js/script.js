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
