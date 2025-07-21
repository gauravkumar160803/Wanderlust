//Bootstrap js logic for the validation of the new form input fields ....
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();


//LOGIC OF ALL FORM VALIDATION OF EVERY FIELD....

const newListingForm = document.getElementById('listingForm');
if (newListingForm) {
  newListingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // validation for new listing form
    const form = e.target;

    let isFormValid = true;

    // for the input field price in the create new form or edit....

    const priceInput = document.getElementById('price');
    const priceValue = parseInt(priceInput.value);

    priceInput.classList.remove('is-valid', 'is-invalid');

    if (!isNaN(priceValue) && priceValue >= 1000) {
      priceInput.classList.add('is-valid');
    } else {
      priceInput.classList.add('is-invalid');
      isFormValid = false;
    }

    // for the input field title in the create new form or edit..

    const titleInput = document.getElementById('title');
    const titleValue = titleInput.value.trim();
    titleInput.classList.remove('is-valid', 'is-invalid');
    if (titleValue.length >= 5) {
      titleInput.classList.add('is-valid');
    } else {
      titleInput.classList.add('is-invalid');
      isFormValid = false;
    }

    //for the input field Description in the create new form or edit..

    const descriptionInput = document.getElementById('description');
    const discriptionValue = descriptionInput.value.trim();
    descriptionInput.classList.remove('is-valid', 'is-invalid');

    if (discriptionValue.length > 0) {
      descriptionInput.classList.add('is-valid');
    } else {
      descriptionInput.classList.add('is-invalid');
      isFormValid = false;
    }

    //for the input field Country in the create new form or edit.

    const countryInput = document.getElementById('country');
    const countryValue = countryInput.value.trim();
    countryInput.classList.remove('is-valid', 'is-invalid');

    if (countryValue.length > 0) {
      countryInput.classList.add('is-valid');
    } else {
      countryInput.classList.add('is-invalid');
      isFormValid = false;
    }

    //for the input field location in the create new form or edit.

    const locationInput = document.getElementById('location');
    const locationValue = locationInput.value.trim();
    locationInput.classList.remove('is-valid', 'is-invalid');

    if (locationValue.length > 0) {
      locationInput.classList.add('is-valid');
    } else {
      locationInput.classList.add('is-invalid');
      isFormValid = false;
    }

    form.classList.add('was-validated');

    if (isFormValid) {
      form.submit();
      //submit the form if there is no problem in any form field..
    }

  });
}



// logic for review validation...

const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
  reviewForm.addEventListener('submit', function (e) {
    // validation for review form
    e.preventDefault();

    const form = e.target;
    const commentInput = document.getElementById('comment');
    const commentValue = commentInput.value.trim();
    commentInput.classList.remove('is-valid', 'is-invalid');

    const ratingInput = document.getElementById('rating-value');
    const ratingValue = parseInt(ratingInput.value);
    ratingInput.classList.remove('is-valid', 'is-invalid');


    let isFormValid = true;


    if (commentValue.length > 0) {
      commentInput.classList.add('is-valid');
    } else {
      commentInput.classList.add('is-invalid');
      isFormValid = false;
    }

    if (ratingValue < 1) {
      ratingInput.classList.add('is-invalid');
    } else {
      ratingInput.classList.add('is-valid');
    }


    form.classList.add('was-validated');

    if (isFormValid) {
      setTimeout(() => {
        form.submit();
      }, 1000);
    }
  });
}

// logic for the star based input for rating 

const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
if (stars && ratingValue) {

  let selectedRating = 0;

  stars.forEach(star => {
    const val = parseInt(star.dataset.value);

    star.addEventListener('click', () => {
      selectedRating = val;
      ratingValue.value = val;
      updateStars(val);
    });

    star.addEventListener('mouseover', () => {
      updateStars(val);
    });

    star.addEventListener('mouseout', () => {
      updateStars(selectedRating);
    });
  });

  function updateStars(rating) {
    stars.forEach(star => {
      const val = parseInt(star.dataset.value);
      star.classList.toggle('selected', val <= rating);
    });
  }
}

// map


