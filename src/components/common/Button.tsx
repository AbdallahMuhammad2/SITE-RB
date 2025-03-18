/blog-project
│
├── /public
│   ├── /images                # Images for the blog
│   ├── favicon.ico            # Favicon for the website
│   └── index.html             # Main HTML file
│
├── /src
│   ├── /assets                # Static assets (fonts, icons, etc.)
│   ├── /components            # Reusable components (buttons, headers, footers)
│   ├── /pages                 # Page components
│   │   ├── Home.tsx           # Home page
│   │   ├── Teacher1.tsx       # Teacher 1's articles page
│   │   ├── Teacher2.tsx       # Teacher 2's articles page
│   │   └── Article.tsx        # Individual article page
│   ├── /context                # Context API for state management
│   ├── /hooks                  # Custom hooks
│   ├── /styles                 # Global styles and theme
│   ├── /utils                  # Utility functions
│   ├── App.tsx                 # Main App component
│   └── index.tsx              # Entry point of the application
│
├── /data                      # Sample data for articles
│   ├── articlesTeacher1.json   # Articles for Teacher 1
│   └── articlesTeacher2.json   # Articles for Teacher 2
│
├── .gitignore                  # Git ignore file
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation