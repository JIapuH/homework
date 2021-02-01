const getGQL = (url) => (query, variables = {}) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    }),
  }).then((res) => res.json());

let gql = getGQL('http://shop-roles.asmer.fs.a-level.com.ua/graphql');

//create elements for categories
function BoxOfGoods(imgName, goodName, goodDescription, goodPrice, _id) {
  let goodConteiner = document.createElement('div')
  let goodImg = document.createElement('img')
  let goodSpanName = document.createElement('span')
  let goodSpanDescription = document.createElement('span')
  let goodSpanPrice = document.createElement('span')

  goodSpanName.setAttribute('style', 'font-weight: 700; font-size: 18px; color: darkblue')
  goodSpanDescription.setAttribute('style', 'margin: 10px')
  goodSpanPrice.setAttribute('style', 'font-weight: 700; font-size: 20px; color: darkred')

  //adding to DOM
  conteinerForGoods.appendChild(goodConteiner);
  goodConteiner.appendChild(goodImg).src = `http://shop-roles.asmer.fs.a-level.com.ua/${imgName}`
  goodConteiner.appendChild(goodSpanName).innerText = goodName
  goodConteiner.appendChild(goodSpanDescription).innerText = goodDescription;
  goodConteiner.appendChild(goodSpanPrice).innerText = 'Цена: ' + goodPrice + ' $';
  goodConteiner.className = 'goodCard'
}

// create navigation for Good
async function categories(el = sideNavCategories, parentId = null) {
  let result = await gql(
    `query cats($query:String){
    CategoryFind(query: $query){
      _id
      name
      goods{
        name
      }
      subCategories{
        name
        goods{name}
      }
    }
  }`, {
      query: JSON.stringify([{
        'parent._id': parentId
      }])
    }
  );

  if (result.errors) return;
  let ul = document.createElement('ul');
  el.appendChild(ul);
  for (const {
      name,
      _id
    } of result.data.CategoryFind) {
    let li = document.createElement('li');
    li.innerText = name;
    ul.append(li);
    li.setAttribute('style', 'cursor: pointer')
    let check;
    li.onclick = () => {
      if (!check) {
        categories(li, _id);
        check = true;
      }

      //recreate a new information about goods after clicking
      if (document.getElementById('conteinerForGoods')) {
        document.getElementById('conteinerForGoods').remove();
      }
      let tempCont = document.createElement('div');
      tempCont.id = 'conteinerForGoods';
      wrapper.appendChild(tempCont);
      showGoods(_id);
    };
  }
}
categories();

//create goods in DOM
async function showGoods(catId) {
  let result = await gql(
    `query goods($query:String){
      GoodFind(query: $query){
       description
       _id
       price
       name
       images{
         url
       }
     }
     }`, {
      query: JSON.stringify([{
        'categories._id': catId
      }])
    }
  );
  for (const {
      name,
      _id,
      description,
      price,
      images: [{
        url
      }],
    } of result.data.GoodFind) {

    //adding content to conteinerForGoods in DOM
    BoxOfGoods(url, name, description, price, _id);
  }
}