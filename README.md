
# Dynamic Portfolio Website

This repository contains the source code for the Dynamic Portfolio Website, a modern and responsive portfolio website built with Next.js and Sanity CMS. The site is designed to showcase projects and blog posts dynamically, with content managed through Sanity Studio.

## Project Overview

The Dynamic Portfolio Website is designed to provide a seamless way to manage and display portfolio projects and blog posts. It leverages the power of Next.js for fast and SEO-friendly web pages and Sanity CMS for flexible content management.

## Features

- **Next.js Integration**: Utilizes Next.js for server-side rendering and static site generation, ensuring fast load times and improved SEO.
- **Sanity CMS**: Provides a powerful content management system for creating and updating projects and blog posts.
- **Dynamic Content**: Easily manage and update content through Sanity Studio.
- **Responsive Design**: Fully responsive design to ensure the site looks great on all devices.
- **Project Listings**: Dynamic project listing page with detailed project pages.
- **Blog Functionality**: Includes a blog with category archives and search functionality.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Sanity CMS](https://www.sanity.io/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Sanity CLI

### Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/yourusername/dynamic-portfolio-website.git
   cd dynamic-portfolio-website
   \`\`\`

2. **Install dependencies:**

   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up Sanity CMS:**

   If you haven't already, install the Sanity CLI:

   \`\`\`bash
   npm install -g @sanity/cli
   \`\`\`

   Initialize a new Sanity project:

   \`\`\`bash
   sanity init
   \`\`\`

   Follow the prompts to create your Sanity project. Once set up, replace the default \`sanity.json\` file with your project's settings.

4. **Create a \`.env.local\` file in the root directory and add your Sanity project ID and dataset:**

   \`\`\`env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_dataset
   \`\`\`

### Running the Development Server

To start the development server, run:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

### Building for Production

To create an optimized production build, run:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

Then, to serve the production build locally:

\`\`\`bash
npm start
# or
yarn start
\`\`\`

## Deployment

The site can be easily deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, feel free to reach out:

- Portfolio: [yassirimzi.com](https://www.yassirimzi.com)
- Email: [your.email@example.com](mailto:your.email@example.com)
