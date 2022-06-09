let data = [{

    "id": 1,

    "model": "Икс 7",

    "price": 9999990,

    "power": 350,

    "description": "Беемвеееееееее",

    "brandName": "Бе М Ве"

}, {

    "id": 2,

    "model": "читырка",

    "price": 50000,

    "power": 10000,

    "description": "Че тут сказать, это топ за свои деньги",

    "brandName": "ВАЗ"

}]

for (let key in data) {
        let row = document.createElement('tr')
        row.innerHTML = `<td class="login">${data[key].id}</td>
                      <td class="login">${data[key].model}</td>
                      <td class="login">${data[key].price}</td>
                      <td class="login">${data[key].power}</td>
                      <td class="login">${data[key].description}</td>
                      <td class="login">${data[key].brandName}</td>
                     `
        document.querySelector('.car').appendChild(row)
    }