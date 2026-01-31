# Valentine Interactive Website

This project is a web application built using React, Styled Components, and Redux. It is designed to be deployed on Vercel and uses Node.js for server-side operations.

## Tech Stack

- **React**: 18.0.0
- **Styled Components**: 5.3.0
- **Redux**: 4.2.0
- **Node.js**: 18.0.0
- **Vercel**: latest

## Prerequisites

- Node.js (version 18.0.0)
- npm (comes with Node.js)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Valentine_Interactive_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Development

To start the development server, run:

```bash
npm start
```

This will start the application on `http://localhost:3000`.

## Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate a `build` folder containing the optimized production build.

## Deployment

The application is designed to be deployed on Vercel. Follow these steps to deploy:

1. **Login to Vercel**
   - If you don't have a Vercel account, [sign up here](https://vercel.com/signup).
   - Install Vercel CLI if not already installed:
     ```bash
     npm install -g vercel
     ```
   - Login to your Vercel account:
     ```bash
     vercel login
     ```

2. **Deploy the application**
   - Run the following command in the project directory:
     ```bash
     vercel
     ```
   - Follow the prompts to complete the deployment.

## Usage

Once deployed, the application will be accessible via the Vercel-provided URL. You can share this URL with others to allow them to access the application.

## Contributing

If you wish to contribute to the project, please fork the repository and submit a pull request. We welcome all contributions that improve the project.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
