class App {
    constructor() {
        this.list = document.querySelector('#flicks')
      this.flicks = []
  
      const form = document.querySelector('form#flickForm')
      form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
    }
  
    renderProperty(name, value) {
      const span = document.createElement('span')
      span.classList.add(name)
      span.textContent = value
      return span
    }
    renderProperties(flick) {
        const div = document.createElement('div')
        div.classList.add('info')
    
        // get the list of properties
        const properties = Object.keys(flick)
    
        // loop over each property
        properties.forEach((propertyName) => {
          // build a span
          const span = this.renderProperty(propertyName, flick[propertyName])
          div.appendChild(span)
        })
    
        return div


  renderActionButtons(flick, item) {
    const actions = document.createElement('div')
    actions.classList.add('actions')

    const dButton = document.createElement('button')   
          dButton.textContent = "Delete"
          dButton.addEventListener('click',()=>this.removeFlick(item))
          item.appendChild(dButton)

          const fButton = document.createElement('button')
          fButton.textContent = "Love it!"
          fButtonn. .addEventListener(
            'click',
            (_ev) => this.toggleFavorite(flick, item)
            actions.appendChild(fButton)

return actions
          }
          renderItem(flick) {
            const item = document.createElement('li')
            item.classList.add('flick')
        
           
            const properties = this.renderProperties(flick)
            item.appendChild(properties)
        
           
            const actions = this.renderActionButtons(flick, item)
            item.appendChild(actions)
        
            return item
          }
        
removeFlick (item){
    this.list.removeChild(item)
}
  
    handleSubmit(ev) {
      const f = ev.target
  
      const flick = {
        name: f.flickName.value,
        chris: f.flickName2.value,
      }
  
      this.flicks.push(flick)
  
      const item = this.renderItem(flick)
  
      const list = document.querySelector('#flicks')
      list.appendChild(item)
  
      f.reset()
      f.flickName.focus()
    }
  }
  
  const app = new App()