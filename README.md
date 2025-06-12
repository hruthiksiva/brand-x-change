# BrandXChange

A marketplace for buying and selling brand identities, built with React, Firebase, and Tailwind CSS.

## Features

- User authentication (sign up, sign in, sign out)
- Create and manage brand identity listings
- Browse and search listings
- Request consultations with brand experts
- Responsive design for all devices

## Tech Stack

- React (with Vite)
- Firebase (Authentication, Firestore, Storage)
- Tailwind CSS
- React Router

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brand-x-change.git
   cd brand-x-change
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Firebase Setup

1. Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Enable Storage
5. Get your Firebase configuration from Project Settings
6. Add the configuration to your `.env` file

## Project Structure

```
src/
├── components/         # Reusable components
├── context/           # React context providers
├── pages/             # Page components
├── styles/            # Global styles
├── App.jsx           # Main App component
├── main.jsx          # Entry point
└── firebase.js       # Firebase configuration
```

## Deployment

The application is configured for deployment on Hostinger. To deploy:

1. Build the application:
   ```bash
   npm run build
   ```

2. Upload the contents of the `build` directory to your Hostinger hosting space.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@brandxchange.com or create an issue in the repository. 