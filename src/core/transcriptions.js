export const transcriptions = [
  {
    language: "PL",
    welcomeMessage: {
      line1: "Wyszukuj wiadomości z całego świta",
      line2: "Czytaj artykuły i najświeższe nagłówki",
      line3: "Aby rozpocząć, wybierz pańtwo z lewego menu",
    },
    menu: {
      title: "Państwo",
      countries: [
        { name: "Stany Zjednoczone", symbol: "US" },
        { name: "Polska", symbol: "PL" },
        { name: "Wielka Brytania", symbol: "EN" },
        { name: "Niemcy", symbol: "DE" },
        { name: "Francja", symbol: "FR" },
      ],
    },
    footer: {
      numberArticles: "Liczba artykułów na stronie",
      currentTime: "Aktualny czas",
    },
    header: {
      infoButton: "Informacja od autora",
    },
    news: {
      loading: "Trwa ładowanie danych...",
      error: {
        line1: "Ooops! Coś poszło nie tak...",
        line2: "Sprawdź połączenie z Internetem.",
      },
      noResults: "Niestety nic nie znaleziono...",
    },
  },
  {
    language: "EN",
    welcomeMessage: {
      line1: "Search worldwide news",
      line2: "Locate articles and breaking news headlines from news",
      line3: "To start, select country from left bar.",
    },
    menu: {
      title: "Countries",
      countries: [
        { name: "United States", symbol: "US" },
        { name: "Poland", symbol: "PL" },
        { name: "Great Britain", symbol: "EN" },
        { name: "Germany", symbol: "DE" },
        { name: "France", symbol: "FR" },
      ],
    },
    footer: {
      numberArticles: "Number of articles per page",
      currentTime: "Current time",
    },
    header: {
      infoButton: "information from the author",
    },
    news: {
      loading: "Please wait, data is loading...",
      error: {
        line1: "Ooops! Something went wrong...",
        line2: "Check your internet connection.",
      },
      noResults: "Unfortunately nothing was found...",
    },
  },
];
