# CS50x Nepal

The CS50x Nepal website shares information about the program, its curriculum, and the people who teach and support it. Visitors can explore the course, read learner stories, review the code of conduct, and find enrollment information.

## Website

- Home page with an introduction to the program
- About, course, and full syllabus pages
- Instructor, mentor, and guest speaker profiles
- Learner stories and frequently asked questions
- Enrollment information and code of conduct
- Responsive layout with light and dark themes

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. To create and run a production build:

```bash
npm run build
npm start
```

## Content and assets

Page content is maintained in `src/data/`. Shared images are configured in `src/config/images.js` and stored in `public/images/`. To use a new image, add it under `public/images/` and update its path in the relevant data or image configuration file.

The site uses Next.js, React, and Tailwind CSS. Its pages and shared layout are in `src/app/`, and reusable page sections are in `src/components/`.

## Deployment

Deploy to a Node.js hosting provider. Set `NEXT_PUBLIC_SITE_URL` to the public site address so sitemap and social sharing metadata use the correct domain.
