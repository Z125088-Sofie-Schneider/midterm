// Wait until the entire HTML document has been loaded and parsed
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("reveal-btn");
  const book = document.getElementById("current-book");

  // When the "Reveal" button is clicked
  button.addEventListener("click", function () {
    // Show the book text and hide the button
    book.classList.remove("hidden", "fade-out");
    button.classList.add("hidden");

    // After 5 seconds, fade out the book
    setTimeout(() => {
      book.classList.add("fade-out");

      // After fade-out (0.5s), hide the book and show the button again
      setTimeout(() => {
        book.classList.add("hidden");
        book.classList.remove("fade-out");
        button.classList.remove("hidden");
      }, 500);
    }, 5000);
  });

  // Handle genre box toggle logic
  const genreBoxes = document.querySelectorAll(".genre-box");
  genreBoxes.forEach(box => {
    box.addEventListener("click", function (event) {
      // If a book or its info is clicked, do nothing (prevent toggle)
      if (event.target.closest(".book-info") || event.target.closest(".book")) {
        return;
      }

      // Toggle visibility of books in the clicked genre
      this.classList.toggle("show-books");

      // Hide books from other genre boxes
      genreBoxes.forEach(other => {
        if (other !== this) {
          other.classList.remove("show-books");
        }
      });
    });
  });

  // Mobile-specific: show/hide author info when book is clicked
  document.querySelectorAll(".book").forEach(bookItem => {
    bookItem.addEventListener("click", function (event) {
      // Only apply this on small screens (mobile)
      if (window.innerWidth <= 991) {
        event.stopPropagation();
        // Toggle visibility of this book's info
        this.classList.toggle("show-info");

        // Hide info from all other books
        document.querySelectorAll(".book").forEach(other => {
          if (other !== this) {
            other.classList.remove("show-info");
          }
        });
      }
    });
  });
});

// Add typewriter effect when "Reveal" button is clicked
document.getElementById("reveal-btn").addEventListener("click", function () {
  const bookText = "The House of the Dead – Fyodor Dostoevsky";
  const currentBook = document.getElementById("current-book");
  
  // Ensure book element is visible and empty before typing begins
  currentBook.classList.remove("hidden");
  currentBook.textContent = ""; 

  let index = 0;

  // Typewriter effect: add one character at a time
  const typeInterval = setInterval(() => {
    currentBook.textContent += bookText.charAt(index);
    index++;
    // Stop when the full text has been typed out
    if (index === bookText.length) {
      clearInterval(typeInterval);
    }
  }, 60); // Typing speed in milliseconds per letter
});
