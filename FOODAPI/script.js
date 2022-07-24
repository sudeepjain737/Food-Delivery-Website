var count = 0;
var obj = {};
const global = [{
    'id': '1',
    'img': 'img/burger.jpg',
    'price': '150',
    'qty': 'piece',
    'description': 'burger'
},
{
    'id': '2',
    'img': 'img/frenchFries.jpg',
    'price': '100',
    'qty': 'Plate',
    'description': 'french-Fries'
},
{
    'id': '3',
    'img': 'img/kabab.jpg',
    'price': '130',
    'qty': 'Plate',
    'description': 'kabab'
},
{
    'id': '4',
    'img': 'img/koyaLaddu.jpg',
    'price': '450',
    'qty': 'KG',
    'description': 'koya-Laddu'
},
{
    'id': '5',
    'img': 'img/maarWaadiLaddu.jpg',
    'price': '350',
    'qty': 'KG',
    'description': 'maarWaadi-Laddu'
},
{
    'id': '6',
    'img': 'img/motichoorLaddu.jpg',
    'price': '250',
    'qty': 'KG',
    'description': 'motichoor-Laddu'
},
{
    'id': '7',
    'img': 'img/paneer.jpg',
    'price': '110',
    'qty': '75gm',
    'description': 'paneer'
},
{
    'id': '8',
    'img': 'img/pizza.jpg',
    'price': '400',
    'qty': '6-pieces',
    'description': 'pizza'
},
{
    'id': '9',
    'img': 'img/rice.jpg',
    'price': '90',
    'qty': 'Plate',
    'description': 'rice'
},
{
    'id': '10',
    'img': 'img/roti.jpg',
    'price': '10',
    'qty': 'piece',
    'description': 'roti'
},
{
    'id': '11',
    'img': 'img/tandooriChicken.jpg',
    'price': '250',
    'qty': '300gm',
    'description': 'tandoori-Chicken'
}];

const container = document.getElementById('container');
// apiCall = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         global = JSON.parse(this.responseText);
//         console.log(global);
//         call();
//     }
//     xhr.open("GET", 'https://foodbukka.herokuapp.com/api/v1/menu', true);
//     xhr.send();
// }


call = () => {
    let bodystr = ``;
    for (let data of global) {
        bodystr = `${bodystr}
        <div class='main' id=${data.id}>
            <div class='img-left'>
                <img class='img' src=${data.img} title=${data.description}>
            </div>
            <div class='right'>
                <p class='heading' style='font-family'><u>${data.description.toUpperCase()}</u></p>
                <p class='desc'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aliquam!</p>
                <span class="cart btn1">
                    <button type="button" onclick="button('${data.description}', '${data.id}')">Add To Cart</button>
                </span>
                <span class="cart btn2 none">
                    <button onclick='remove("${data.description}","${data.id}")'>-</button>
                    <span class="count">1</span>
                    <button onclick='Add("${data.description}","${data.id}")'>+</button>
                </span>
                <span class='price'>₹ ${data.price} / ${data.qty}</span>
            </div>
        </div>`;
    }
    container.innerHTML = bodystr;
}

button = (x, id) => {
    if (!obj[x]) {
        obj[x] = 1;
        const ele = document.getElementById(id);
        ele.querySelector('.count').textContent = obj[x];
        ele.querySelector('.btn1').classList.add('none');
        ele.querySelector('.btn2').classList.remove('none');
        calcTotal('add');
    }
}

remove = (x, id) => {
    obj[x] -= 1;
    const ele = document.getElementById(id);
    ele.querySelector('.count').textContent = obj[x];
    if (obj[x] == 0) {
        ele.querySelector('.btn2').classList.add('none');
        ele.querySelector('.btn1').classList.remove('none');
    }
    calcTotal('subtract');
}

Add = (x, id) => {
    obj[x] += 1;
    const ele = document.getElementById(id);
    ele.querySelector('.count').textContent = obj[x];
    calcTotal('add');
}

calcTotal = (flag) => {
    if (flag === 'add')
        document.getElementById('total').innerText = ++count;
    else
        document.getElementById('total').innerText = --count;
}

setTimeout(() => {
    mainPageLoad();
}, 4000);

function mainPageLoad() {
    document.getElementById("loadPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      document.getElementById("nav").style.display = "none";
    } else {
      document.getElementById("nav").style.display = "initial";
    }
  }