const eventsData = [
  {
    id: 1,
    title: 'Έναρξη Πατρινού Καρναβαλιού',
    startDate: '2024-01-18',
    endDate: '2024-01-18',
    shortDescription: 'Έναρξη του διάσημου Πατρινού Καρναβαλιού.',
    description: 'Η έναρξη του Πατρινού Καρναβαλιού είναι μια από τις πιο σημαντικές εκδηλώσεις στην Πάτρα και προσελκύει χιλιάδες επισκέπτες από όλη την Ελλάδα.',
    location: 'Πλατεία Γεωργίου',
    address: 'Πλατεία Γεωργίου Α΄, Πάτρα',
    artist: 'Διάφοροι καλλιτέχνες',
    curator: 'Δήμος Πατρέων',
    type: 'Καραναβάλι',
    reviews: [
      {
        user: 'Μαρία Παπαδοπούλου',
        date: '2024-01-20',
        text: 'Υπέροχη εκδήλωση! Το καρναβάλι ήταν φανταστικό και οι καλλιτέχνες έδωσαν τον καλύτερό τους εαυτό.',
        rating: 5,
      },
      {
        user: 'Γιάννης Κωνσταντίνου',
        date: '2024-01-21',
        text: 'Πολύ διασκεδαστικό! Οι στολές και η ατμόσφαιρα ήταν καταπληκτικά.',
        rating: 4,
      },
    ],
    rating: 4.9,
    image: '/projectReact/assets/events/Karnavali-Patras-scaled.jpg',
  },
  {
    id: 2,
    title: 'Συναυλία στο Αρχαίο Ωδείο',
    startDate: '2024-07-15',
    endDate: '2024-07-15',
    shortDescription: 'Συναυλία στο ιστορικό Αρχαίο Ωδείο της Πάτρας.',
    description: 'Απολαύστε μια μοναδική συναυλία στο ιστορικό Αρχαίο Ωδείο, ένα από τα πιο σημαντικά πολιτιστικά μνημεία της πόλης.',
    location: 'Ρωμαϊκό Αρχαίο Ωδείο',
    address: 'Ρωμαϊκό Αρχαίο Ωδείο, Πάτρα',
    artist: 'Διάφοροι καλλιτέχνες',
    curator: 'Μουσική Κοινότητα',
    type: 'Συναυλία',
    reviews: [
      {
        user: 'Ελένη Νικολάου',
        date: '2024-07-16',
        text: 'Η συναυλία ήταν εκπληκτική! Η ατμόσφαιρα στο Αρχαίο Ωδείο ήταν μαγική.',
        rating: 5,
      },
      {
        user: 'Κώστας Παπαδόπουλος',
        date: '2024-07-17',
        text: 'Εξαιρετική διοργάνωση και υπέροχη μουσική.',
        rating: 4,
      },
    ],
    rating: 4.8,
    image: '/projectReact/assets/events/RomaikoOdeio-2.jpg',
  },
  {
    id: 3,
    title: 'Θεατρική Παράσταση',
    startDate: '2024-01-26',
    endDate: '2024-01-26',
    shortDescription: 'Θεατρική παράσταση στο Δημοτικό Θέατρο Απόλλων.',
    description: 'Μια συγκλονιστική θεατρική παράσταση στο εμβληματικό Δημοτικό Θέατρο Απόλλων.',
    location: 'Δημοτικό Θέατρο Απόλλων',
    address: 'Πλατεία Γεωργίου Α΄, Πάτρα',
    artist: 'Θεατρική ομάδα Πάτρας',
    curator: 'Δήμος Πατρέων',
    type: 'Θέατρο',
    reviews: [
      {
        user: 'Ανδρέας Μιχαήλ',
        date: '2024-01-27',
        text: 'Εξαιρετική παράσταση με φοβερή υποκριτική απόδοση από όλους τους ηθοποιούς.',
        rating: 5,
      },
      {
        user: 'Σοφία Δημητρίου',
        date: '2024-01-28',
        text: 'Πολύ καλή παράσταση, αλλά η διάρκεια ήταν λίγο μεγάλη.',
        rating: 4,
      },
    ],
    rating: 4.7,
    image: '/projectReact/assets/events/Θέατρο-Απόλλων-7.jpg',
  },
  {
    id: 4,
    title: 'Έκθεση Ζωγραφικής Νεωραίων',
    startDate: '22-06-2024',
    endDate: '24-06-2024',
    shortDescription: 'Έκθεση ζωγραφικής νεαρών καλλιτεχνών στην Αγορά Αργύρη.',
    description: 'Η τέχνη μας… ένας κρυμμένος θησαυρός» είναι ο τίτλος της έκθεσης ζωγραφικής, κεραμικής, κοσμήματος, κατασκευών που θα εγκαινιαστεί το Σάββατο 22 Ιουνίου και ώρα 17.30 στην Αγορά Αργύρη.',
    location: 'Αγορά Αργύρη',
    address: 'Αγορά Αργύρη, Πάτρα',
    artist: 'Νεαροί καλλιτέχνες',
    curator: 'Δήμος Πατρέων',
    type: 'Έκθεση',
    reviews: [
      {
        user: 'Μαργαρίτα Βλάχου',
        date: '2024-05-23',
        text: 'Πολύ ενδιαφέρουσα έκθεση με εξαιρετικά έργα τέχνης.',
        rating: 5,
      },
      {
        user: 'Νίκος Παναγιωτίδης',
        date: '2024-05-24',
        text: 'Τα έργα ήταν καταπληκτικά, αλλά ο χώρος ήταν λίγο περιορισμένος.',
        rating: 4,
      },
    ],
    rating: 4.6,
    image: '/projectReact/assets/events/agoraArgiri-1.jpg',
  },
  {
    id: 5,
    title: 'Έκθεση και δοκιμή οίνων Patras Wine Fair 2023',
    startDate: '2024-10-04',
    endDate: '2024-10-04',
    shortDescription: 'Έκθεση και δοκιμή οίνων στην Achaia Clauss.',
    description: 'Παρακολουθήστε την έκθεση και δοκιμάστε τα καλύτερα κρασιά της περιοχής στην Achaia Clauss.',
    location: 'Achaia Clauss',
    address: 'Achaia Clauss, Πάτρα',
    artist: 'Οινοπαραγωγοί της περιοχής',
    curator: 'Achaia Clauss',
    type: 'Έκθεση',
    reviews: [
      {
        user: 'Πέτρος Γεωργίου',
        date: '2024-10-05',
        text: 'Εξαιρετική ποικιλία κρασιών και πολύ καλή οργάνωση της έκθεσης.',
        rating: 5,
      },
      {
        user: 'Ειρήνη Καραγιάννη',
        date: '2024-10-06',
        text: 'Υπέροχη εμπειρία και πολύ ωραία γεύση στα κρασιά.',
        rating: 4,
      },
    ],
    rating: 4.9,
    image: '/projectReact/assets/events/Αχαϊά-Κλάους-6.jpg',
  },
  {
    id: 6,
    title: 'Διαβάζοντας ποίηση" στο Πολύεδρο',
    startDate: '2024-04-29',
    endDate: '2024-04-29',
    shortDescription: 'Βραδιά ποίησης στο Πολύεδρο.',
    description: 'Απολαύστε μια βραδιά ποίησης στο Πολύεδρο, με τη συμμετοχή τοπικών ποιητών.',
    location: 'Πολύεδρο',
    address: 'Πολύεδρο, Πάτρα',
    artist: 'Τοπικοί ποιητές',
    curator: 'Πολύεδρο',
    type: 'Ποίηση',
    reviews: [
      {
        user: 'Μαρία Κωνσταντίνου',
        date: '2024-04-30',
        text: 'Υπέροχη βραδιά με καταπληκτική ποίηση.',
        rating: 5,
      },
      {
        user: 'Αλέξανδρος Διονυσίου',
        date: '2024-05-01',
        text: 'Πολύ καλή οργάνωση και εξαιρετικοί ποιητές.',
        rating: 4,
      },
    ],
    rating: 4.8,
    image: '/projectReact/assets/events/863440.jpg',
  },
];

export default eventsData;
