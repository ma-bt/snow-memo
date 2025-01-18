# SnowMemo App

A simple and efficient memo app built with React, powered by **pnpm** for package management, and **Dockerized** for seamless deployment.

## Features

- Create, edit, and delete memos.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=16)
- [pnpm](https://pnpm.io/installation) (>=8)
- [Docker](https://www.docker.com/get-started)

---

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:ma-bt/snow-memo.git
   cd showmemo
   ```

2. Install dependencies using **pnpm**:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Docker Setup

### Using Docker Compose

1. Build and run the app using Docker Compose:

   ```bash
   docker compose -f docker-compose.yml up -d --build
   ```

2. Open [http://localhost:3001](http://localhost:3001) in your browser.

3. To stop the containers:
   ```bash
   docker-compose down
   ```

## Scripts

- **Start Development Server**: `pnpm dev`
- **Build for Production**: `pnpm build`

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b <feat-or-fix>/your-name/feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.
