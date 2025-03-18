/blog-project
│
├── /public
│   ├── /images              # Images for the blog (e.g., logos, teacher photos)
│   ├── favicon.ico          # Favicon for the website
│   └── index.html           # Main HTML file
│
├── /src
│   ├── /assets              # Static assets (fonts, icons, etc.)
│   ├── /components          # Reusable components
│   │   ├── Header.tsx       # Header component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── ArticleCard.tsx   # Component for displaying individual articles
│   │   ├── TeacherCard.tsx   # Component for displaying teacher profiles
│   │   └── Loader.tsx       # Loading spinner component
│   │
│   ├── /pages               # Page components
│   │   ├── Home.tsx         # Home page
│   │   ├── Articles.tsx     # Articles listing page
│   │   ├── ArticleDetail.tsx # Individual article detail page
│   │   ├── About.tsx        # About page for teachers
│   │   └── Contact.tsx      # Contact page
│   │
│   ├── /styles              # Global styles
│   │   ├── index.css        # Main CSS file
│   │   └── variables.css     # CSS variables for theming
│   │
│   ├── /utils               # Utility functions
│   │   └── api.ts           # API calls for fetching articles
│   │
│   ├── /context             # Context API for state management
│   │   └── ArticleContext.tsx # Context for managing articles
│   │
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Entry point for React
│   └── routes.tsx           # Routing configuration
│
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation