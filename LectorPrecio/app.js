const products = [
  {
    nombre: 'Harina Pan Mezcla de Arroz',
    precioUSD: 0.99,
    codigo: 123,
  },
  {
    nombre: 'Harina Pan Blanca',
    precioUSD: 0.99,
    codigo: 121,
  },
  {
    nombre: 'Mayonesa Mavesa 500gr',
    precioUSD: 3.45,
    codigo: 124,
  },
  {
    nombre: 'Salsa de tomate Heinz 250gr',
    precioUSD: 1.98,
    codigo: 125,
  },
  {
    nombre: 'Pasta Mary Vermicelli 500gr',
    precioUSD: 1.5,
    codigo: 126,
  },
  {
    nombre: 'Margarina Mavesa 500 gr',
    precioUSD: 2.45,
    codigo: 127,
  },
  {
    nombre: 'Refresco Pepsi 1.5 LT',
    precioUSD: 0.99,
    codigo: 128,
  },
  {
    nombre: 'Refresco Coca-Cola 2LT',
    precioUSD: 1.5,
    codigo: 129,
  },
]

class App {
  constructor() {
    this.tasa = 160.45

    this.$usd = document.querySelector('.usd')
    this.$bs = document.querySelector('.bs')
    this.$consulte = document.querySelector('.consulte')
    this.$inputContainer = document.querySelector('.input')
    this.$button = document.querySelector('button')
    this.$input = document.querySelector('input')
    this.$tasaDia = document.getElementById('tasa')
    this.$product = document.querySelector('.product')
    this.$productName = document.querySelector('.product-name')
    this.$sectionAgain = document.querySelector('.again')
    this.$buttonAgain = document.querySelector('.esc-again')
    this.$priceBS = document.getElementById('priceBS')
    this.$priceUSD = document.getElementById('priceUSD')
    this.addEventListeners()
    this.renderTasa()
  }

  renderTasa() {
    this.$tasaDia.textContent = this.tasa
  }

  addEventListeners() {
    this.$button.addEventListener('click', (event) => {
      console.log('Hola mundo')
      this.scan()
    })

    this.$buttonAgain.addEventListener('click', (event) => {
      this.resetScan()
    })
  }

  scan() {
    const value = Number(this.$input.value)
    const findProduct = products.find(({ codigo }) => codigo === value)
    if (!findProduct) return
    this.renderProduct(findProduct)
  }

  renderProduct(product) {
    if (!product) return
    this.$consulte.style.display = 'none'
    this.$inputContainer.style.display = 'none'
    this.$product.style.display = 'grid'
    this.$sectionAgain.style.display = 'block'
    this.$productName.innerHTML = `<h2>${product.nombre}</h2>`
    this.$priceUSD.textContent = `${product.precioUSD}`
    this.$priceBS.textContent = `${(product.precioUSD * this.tasa).toFixed(2)}`
  }

  resetScan() {
    this.$consulte.style.display = 'flex'
    this.$inputContainer.style.display = 'block'
    this.$product.style.display = 'none'
    this.$sectionAgain.style.display = 'none'
    this.$input.value = ''
  }
}

new App()
