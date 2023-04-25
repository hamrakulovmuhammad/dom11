let body = document.body


for (let i = 0; i < 4; i++) {
    let cart_item = document.createElement('div')
    let left = document.createElement('div')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let right = document.createElement('div')
    let counter = document.createElement('div')
    let btn = document.createElement('button')
    let span = document.createElement('h1')
    let button = document.createElement('button')
    let delite = document.createElement('button')
    let count_i = 0
    let price = 19000

    cart_item.classList.add('cart-item')
    left.classList.add('left')
    div.classList.add('div')
    h1.classList.add('h1')
    h2.classList.add('h2')
    right.classList.add('right')
    counter.classList.add('counter')
    button.classList.add('plus')
    span.classList.add('h1')
    btn.classList.add('minus')
    delite.classList.add('delite')

    h1.innerHTML = "title"
    h2.innerHTML = `${price}$`
    btn.innerHTML = "-"
    span.innerHTML = count_i
    button.innerHTML = "+"
    delite.innerHTML = "delete"
    img.src = "img/karzina.png"

    body.prepend(cart_item)
    cart_item.append(left, right)
    left.append(img, div)
    div.append(h1, h2)
    right.append(counter, delite)
    counter.append(btn, span, button)

    
    delite.onclick = () => {
        cart_item.remove()
    }

    button.onclick = () => {
        count_i++
        span.innerHTML = count_i
        h2.innerHTML++
        h2.innerHTML = `${price * count_i}$`
    }
    btn.onclick = () => {
        if (count_i !== 0) {
            count_i--
            span.innerHTML = count_i
            h2.innerHTML = `${price * count_i}$`
        }
    }

}