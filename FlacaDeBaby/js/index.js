'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('TE AMO');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' â¤';

const zomosNobios = () => {
  // alert('ðI LOVE ' + ${partner} + 'ð');
  alert(`I LOVEð ${partner} ð`);
  alert('ERES MI PERSONA FAVORITA ð±');
  location.href = "https://youtu.be/QVxzkhgSjXc?t=20";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', zomosNobios);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);