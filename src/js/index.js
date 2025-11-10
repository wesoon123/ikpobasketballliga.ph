document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    events: [
      { title: 'manokan vs ikpo', start: '2025-11-05', time: '8:00pm' },
      { title: 'river side vs manokan', start: '2025-11-10', time: '7:00pm' },
      { title: 't-padilla vs sagrada', start: '2025-11-15', time: '4:00pm' },
      { title: 'ikpo vs river side', start: '2025-11-20', time: '10:00pm' }
    ],
    eventClick(info) {
      info.jsEvent.preventDefault();

      // Fill modal
      document.getElementById('modalTitle').textContent = info.event.title;
      document.getElementById('modalDate').textContent = info.event.start.toLocaleDateString();
      document.getElementById('modalBody').innerHTML += info.event.extendedProps.time 
        ? `<p>${info.event.extendedProps.time}</p>` 
        : "";

      // Show modal
      document.getElementById('eventModal').classList.add('show');
    }
  });

  calendar.render();

  // Close modal
  const modal = document.getElementById('eventModal');
  const closeBtn = document.querySelector('.close-btn');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Close when clicking outside modal
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'eventModal') {
      modal.classList.remove('show');
    }
  });
});

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
    });
    splide.mount();
  } );