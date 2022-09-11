const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('ul');
console.log(galleryRef);

const galleryItem = ({ url, alt }) =>
`<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
console.log(galleryItem);

const galleryMarkup = images.reduce((acc, item) => acc + galleryItem(item), '');
console.log(galleryMarkup);

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryRef.setAttribute('style', 'list-style-type:none; display: flex;');