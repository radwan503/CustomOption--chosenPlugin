$('.chosen-select').chosen({
  no_results_text: 'Oops, nothing found!',
  width: '100%',
});


// add new category in project
function addNewCategory(){
  const categoryNew = document.querySelector('#categoryAdd');
  categoryNew.classList.toggle('show');
}

function addNewCategoryValue(){
  const chosenChoices = document.querySelector('.chosen-choices');
  const searchField =  document.querySelector('.search-field');
  const categoryNew = document.querySelector('#categoryNewValue');

  if(categoryNew.value !== ''){
      console.log(categoryNew);
      const html = `
      <li class="search-choice"><span>${categoryNew.value}</span><a class="search-choice-close" onclick={$(this).parent().remove();}></a></li>
      `
      $(searchField).before(html);
      categoryNew.value = '';
      console.log(chosenChoices.childNodes.length);
      const categoryAddHide = document.querySelector('#categoryAdd');
      categoryAddHide.classList.remove('show');
      console.log(chosenChoices.childNodes.length);
  
  }
}