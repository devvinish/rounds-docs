// The link beside the search box goes to Rounds HMS on vinish.dev. The theme calls it a repository
// link ("Go to repository"); say where it really goes, and open it in a new tab so the reader keeps
// their place in the guide.
function roundsOwnerLink() {
  document.querySelectorAll('a.md-source').forEach((a) => {
    a.title = 'Rounds HMS on vinish.dev';
    a.target = '_blank';
    a.rel = 'noopener';
  });
}
if (typeof document$ !== 'undefined') {
  document$.subscribe(roundsOwnerLink); // every page, with instant navigation too
} else {
  document.addEventListener('DOMContentLoaded', roundsOwnerLink);
}
