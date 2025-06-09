document.getElementById('bookingForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const booking = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('service').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    staff: document.getElementById('staff').value,
    referral: document.getElementById('referral').value,
  };
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));
  alert('Booking confirmed!');
  this.reset();
});