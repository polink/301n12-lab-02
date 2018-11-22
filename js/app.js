'use strict';

// global vars
const allCrits = [];

// crit = critter
// constructors
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

Creature.prototype.rendOption = function() {
  $('select').append('<option>'+this.keyword+'</option>');
  $('option').attr('id', this.keyword);
  // let $clone = $('option[class="clone"]');

  // let creatureKeyword = $('#keyword').html();
  // $clone.html(creatureKeyword);
  // $something.attr('id',this.keyword);
  // $clone.
}

/*
how to take page-1.keyword and push into dropdown
var select = $'<select></select>')
cannot use array, or do so without adding multiple items
*/
//select box filtering - populate data from page-1 first
// $('select[name="keyword"]').on('change',function(){
//   let $selection = $(this).val();
//   $('img').hide()
//   $(`img[]`)
// }
// )

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
        creature.rendOption();
      })
    })
    

}

$(() => readJson());
