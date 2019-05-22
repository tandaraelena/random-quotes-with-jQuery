let quotes = [
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch"
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde"
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    quote:
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "Oscar Wilde"
  },
  {
    quote:
      "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Learning never exhausts the mind.",
    author: "Jane Austen"
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  },
  {
    quote:
      "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.",
    author: "Thomas Carlyle"
  }
];

const $btn = $("#btn");

$btn.click(function() {
  let number = Math.floor(Math.random() * quotes.length);

  $("#qoute").html("<span>" + quotes[number].quote + "</span>");
  $("#author").html("<span>--</span>" + quotes[number].author);
});
