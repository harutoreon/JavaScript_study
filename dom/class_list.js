let elem = document.body;

elem.classList.add('article');
elem.classList.toggle('style');

for (let className of elem.classList) {
  console.log(className);
}