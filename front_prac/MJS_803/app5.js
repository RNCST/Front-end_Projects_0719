const container = document.getElementById('root2');
const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const content = document.createElement('div')
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

const store = {
   currentPage: 1,
};

function getData(url) {
   ajax.open('GET', url, false)
   ajax.send();
   return JSON.parse(ajax.response);
};

function newsFeed(){
   const newsFeed = getData(NEWS_URL);
   const newsList = [];
   newsList.push('<il>');
   for(let i =(store.currentPage-1)*10;i<store.currentPage*10;i++){
      newsList.push(`
      <li>
         <a href='#/show/${newsFeed[i].id}'>
            ${newsFeed[i].title}(${newsFeed[i].comments_count})
         </a>
      </li>`)
   }
   newsList.push('</ul>');
   newsList.push(`
      <div>
         <a href="#/page/${store.currentPage > 1 ? store.currentPage -1 : 1}">이전페이지</a>
         <a href="#/page/${store.currentPage+1}">다음페이지</a>
      </div>
   `)
   container.innerHTML = newsList.join('');
}
/*
라우터에서 글내용 환면도 홏루해야 하고 글 내용은 함수로 되어 있으나 
이벤트 핸들러에 묶여 있어 익명함수로 되어 있음여 다른쪽에서 함수를 부를 방법이 없기에
함수로 빼야 한다. 
*/

function newsDetail(){
   const id = location.hash.substr(7);
   const newsContent = getData(CONTENT_URL.replace('@id', id));
   const title = document.createElement('h1');
   container.innerHTML = `
      <h1>${newsContent.title} </h1>
      <div>
         <h3> ${newsContent} </h3>
      </div>
      <div>
         <a href='#/page/${store.currentPage}'> TO LIST </a>
      </div>
   `;
}

function router() {
   const routePath = location.hash;
   if (!routePath){
      newsFeed();
   }else if(routePath.indexOf('#/page/')>=0){
      store.currentPage = Number(routePath.substr(7));
      newsFeed();
   }
   else{
      newsDetail();
   }
}

window.addEventListener('hashchange', router);
router();


/*
   라우터 함수에서 라우터가 총작하는 방식을 생각해 보면 라우터는 화면ㅇ ㅣ전환되어야 할 떄 파우터가 판단해서 해당하는 화면으로 전환시키면 된다 . 
   그런데 화면이 전환되어야 할때는 hashchange가 일어나는 때이고 
   이때  hashchange에 newDetail이 걸려 있다.
   이것은 해쉬의 내용이 바뀌면 글내용을 볼 수 있도록 바뀌게 되는 것.
   화면이 여러개 있으면 해쉬가 바뀌면 글 내용을 보여줄 숟 ㅗ있고 글 목록을 보여줄 수도 있고 여러 경우의 갯수가 있으니 이 해시 자체를 라우터에게 넘겨주면 된다.
   hashchange가 일어났을때 동작하는 함수를 기존의 newDetail이 아니라 
   라우터한테 주면 라우터가 해시가 바뀔때마다 동작하게 되고 라우터 안에서 어떤 해시냐에 따라 보여주는 페이지가 달라지도록 한다.
*/

