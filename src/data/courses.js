// Course copy and syllabus. Content is taken from the official site's About and Syllabus pages.
export const course = {
  title: "CS50 AI with Python",
  intro:
    "CS50 AI is a specialized adaptation of Harvard University's CS50 Introduction to Artificial Intelligence with Python, designed to introduce students to the fundamentals of artificial intelligence. Guided by instructors from Purwanchal Campus, it covers core AI concepts through hands-on projects and real-world examples.",
  aboutHeading: "Following a very successful adaptation of CS50x in Nepal, we are back with CS50 AI.",
  aboutBody:
    "The course is ideal for those who want fundamental knowledge in AI, equipping them with the skills needed to pursue further studies or careers in this transformative field.",
};

export const outcomes = [
  { title: "Machine learning", text: "Understand supervised and unsupervised learning, from regression to clustering." },
  { title: "Neural networks", text: "Learn the concepts behind neural networks and how intelligent systems are built." },
  { title: "Natural language processing", text: "Explore how machines work with human language." },
  { title: "Search algorithms", text: "Study the core search techniques behind problem solving in AI." },
  { title: "Data skills", text: "Prepare, explore and visualize data with Python tooling." },
  { title: "Hands-on projects", text: "Build an end-to-end machine learning project and a team-based project." },
];


export const syllabus = [
  {
    week: 1,
    title: "Python and Database Foundations and Setup",
    summary: "Python foundations and data management, setting up the groundwork for AI learning.",
    days: [
      { title: "Python Foundation", topics: ["Setting up a development environment", "Introduction to Python for Data Science", "Object-Oriented Programming in Python (overview)", "Best practices and advanced Python concepts", "Error handling and debugging", "Assessment and feedback"] },
      { title: "Data Management", topics: ["Introduction to SQL", "Database design", "Database querying", "Practical"] },
    ],
  },
  {
    week: 2,
    title: "Mathematics and Statistics",
    summary: "The mathematical and statistical concepts essential for machine learning and AI.",
    days: [
      { title: "Mathematics for ML", topics: ["Linear algebra", "Vectors and matrices", "Calculus", "Set theory and logic", "Graph theory"] },
      { title: "Statistics for ML", topics: ["Introduction to statistics with Python for AI", "Descriptive statistics", "Inferential statistics", "Probability distributions", "Practical"] },
    ],
  },
  {
    week: 3,
    title: "Data Preprocessing and Exploration",
    summary: "Web scraping, preprocessing and visualization to prepare and analyze data for AI applications.",
    days: [
      { title: "Web Scraping", topics: ["Finding information in HTML pages", "Extracting and structuring web data", "Preparing collected data for analysis"] },
      { title: "Data Preprocessing Techniques", topics: ["Advanced data preprocessing with Python", "Handling missing values", "Feature engineering", "PCA", "Outlier detection and treatment", "Normalisation and scaling"] },
      { title: "Data Visualization", topics: ["Understanding data visualization", "Introduction to Matplotlib", "Introduction to Seaborn", "Advanced data visualization techniques", "Storytelling with data", "Visualization tools: Tableau, Power BI and more"] },
    ],
  },
  {
    week: 4,
    title: "Machine Learning",
    summary: "Core machine learning: supervised learning and unsupervised methods.",
    days: [
      { title: "Supervised Learning: Regression and Classification", topics: ["Introduction to regression", "Linear regression", "Polynomial regression", "Mean absolute error and mean squared error"] },
      { title: "Unsupervised Learning: Clustering and Dimensionality Reduction", topics: ["K-Means clustering", "Hierarchical clustering", "DBSCAN", "PCA"] },
    ],
  },
  {
    week: 5,
    title: "Practical Applications",
    summary: "Apply your knowledge to real-world scenarios with an end-to-end project and a team project.",
    days: [
      { title: "End to End Project", topics: ["Machine learning project"] },
      { title: "Supervised Project", topics: ["Team-based project implementation"] },
    ],
  },
];
