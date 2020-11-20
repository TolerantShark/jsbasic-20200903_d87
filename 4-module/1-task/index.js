/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  document.body.append(ul);

  for (let key in friends) {
   /*  ul.insertAdjacentHTML(beforeend, `<li>${key.firstname} ${key.lastname}</li>`) */
   let li = document.createElement('li');
   li.innerHTML = key.firstname + ' ' + key.lastname;
   ul.append(li);
  }
  
  return ul;
}
