export default function() {

  var navbar = document.getElementById('navbar'),
      sections = ['hero-area', 'about-me', 'my-work', 'contact'];

  function showNavBar(direction) {
    direction === 'down' ? navbar.classList.add('active') : navbar.classList.remove('active');
  }

  function setActiveNavItem(section) {
    sections.forEach(function(value) {
      navbar.classList.remove(value);
    });
    navbar.classList.add(section);
  }

  function newSectionInView(section, index, direction) {
    if (section === 'about-me') { showNavBar(direction); }
    direction === 'down' ? setActiveNavItem(sections[index]) : setActiveNavItem(sections[index - 1]);
  }

  function setWaypoint(elementId, elementIndex, offsetValue) {
    new Waypoint({
      element: document.getElementById(elementId),
      handler: function(direction) {
        newSectionInView(elementId, elementIndex, direction);
      },
      offset: offsetValue
    });
  }
  sections.forEach(function(value, index) {
    setWaypoint(value, index, 96);
  });
}
