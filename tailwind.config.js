/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  },

function play() {
    console.log('go on')
}
function decreaseAvailableSeats() {
  var seatsElement = document.getElementById('available-seats');
  var availableSeats = parseInt(seatsElement.innerText);
  if (availableSeats > 0) {
      availableSeats--;
      seatsElement.innerText = availableSeats;
  }
}

// Function to increase booking count by 1
function increaseBookingCount() {
  var bookingCountElement = document.getElementById('booking-count');
  var bookingCount = parseInt(bookingCountElement.innerText);
  bookingCount++;
  bookingCountElement.innerText = bookingCount;
}

// Function to add booked seat to collection
function addToBookingCollection(seat) {
  var bookingCollection = document.getElementById('booking-collection');
  var newSeatElement = document.createElement('td');
  newSeatElement.innerText = seat;
  bookingCollection.appendChild(newSeatElement);
}

// Function to increase total price
function increaseTotalPrice() {
  var bookingCount = parseInt(document.getElementById('booking-count').innerText);
  var totalPriceElement = document.getElementById('total-price');
  var totalPrice = bookingCount * 550; // Assuming price per seat is 550 Taka
  totalPriceElement.innerText = totalPrice;
}

// Function to increase grand total
function increaseGrandTotal() {
  var bookingCount = parseInt(document.getElementById('booking-count').innerText);
  var grandTotalElement = document.getElementById('grand-total');
  var grandTotal = bookingCount * 550; // Assuming price per seat is 550 Taka
  grandTotalElement.innerText = grandTotal;
}

// Function to enable next button if phone number is entered
function enableNextButton() {
  var phoneNumberInput = document.getElementById('phone-number').value;
  var nextButton = document.getElementById('next-button');
  if (phoneNumberInput.length > 0) {
      nextButton.disabled = false;
  } else {
      nextButton.disabled = true;
  }
}