

async function getData(url){

try {
    let res= await fetch(url);
    let data =await res.json();

    return data;

} catch (error) {
    console.log(error);
}
   


}


function appendData(data, parent)
{
  data.forEach((el) => {
      let div=document.createElement('div');
      div.setAttribute('id','item')

      let p=document.createElement('p');
      p.innerText= el.title;

      let poster= document.createElement('img');
      poster.src=el.image;
      poster.setAttribute('id','poster')

      div.append(poster,p);

      parent.append(div); //parent is the tree on which banner is stuck
  });
}

export {getData,appendData}

