'use strict';

// global vars
const allCrits = [];

// crit = critter
// constructor
function Creature(crit){
  this.title = crit.title;
  this.image_url = crit.image_url;
  this.description = crit.description;
  this.keyword = crit.keyword;
  this.horns = crit.horns;

  allCrits.push(this);
  console.log(allCrits);
}

Creature.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let $clone = $('div[class="clone"]');

  let creatureTemplate = $('#photo-template').html();
  $clone.html(creatureTemplate);

  $clone.find('h2').text(this.title);
  $clone.find('img').attr('src', this.image_url);
  $clone.find('p').text(this.description);

  $clone.removeClass('clone');
  $clone.attr('class', this.name);
}

function readJson () {
  $.get('data/page-1.json', 'json')
    .then(data => {
      data.forEach(creatureCrit => {
        new Creature(creatureCrit)
      })
    })
    .then(() => {
      allCrits.forEach(creature => {
        creature.render();
      })
    })

}

$(() => readJson());
