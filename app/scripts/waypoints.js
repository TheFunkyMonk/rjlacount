export default function() {

  var navbar = document.getElementById('navbar');

  var waypoint = new Waypoint({
    element: document.getElementById('about-me'),
    handler: function(direction) {
      direction === 'down' ? navbar.classList.add('active') : navbar.classList.remove('active');
    },
    offset: 64
  });
}
