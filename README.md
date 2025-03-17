# Canteen Management System

<img src="./Images/project-2.png" width="100%">

## Overview

The Canteen Management System is a web-based application designed to streamline food ordering processes in canteens or cafeteria settings. Built with **React** and **Firebase**, this application offers an intuitive interface for users to browse products, add items to a cart, and complete purchases. Additionally, it provides order history features for users and administrators, with data visualization and PDF export options for easy record-keeping.

**[Live Demo](https://sauravrwt.github.io/Canteen-Management/)**

## Features

- **Product Catalog**: A browsable list of available food items with details like name, price, and quantity.
- **Search Functionality**: A search bar to quickly find specific products.
- **Product Details**: View in-depth details for each product by selecting an item.
- **Shopping Cart**: Add items to the cart, adjust quantities, and remove items as needed.
- **Checkout Process**: Simple, streamlined checkout process for completing purchases.
- **Real-time Updates**: Product quantities are automatically updated in real-time using Firebase.
- **Order History**: 
  - **User Order History**: Allows users to track their own past orders.
  - **Admin Order History**: Enables administrators to view the full order history of all users.
- **Data Visualization**: Using `Recharts`, users and admins can visualize order data for insights into ordering trends.
- **PDF Export**: Integrated `jspdf` to allow users and admins to export order history as PDF files for easy offline reference.
- **Advanced Reporting**: Built-in reporting with visual analytics to track weekly, monthly, and yearly sales performance in the admin panel.
- **Responsive Design**: Fully responsive layout for seamless use on desktop and mobile devices.
- **Secure Authentication**: Integrated **Firebase Authentication** for secure login and user management.

## Technologies Used

- **React.js** for front-end development
- **Firebase (Realtime Database & Authentication)** for real-time data handling, storage, and secure user management
- **Bootstrap 5** and **React Bootstrap** for UI components
- **Recharts** for data visualization
- **JSPDF** for exporting data as PDF files

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SauRavRwT/canteen-management-system.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd canteen-management-system
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Add a web app to your Firebase project
   - Enable Firebase Authentication for secure user management
   - Copy the Firebase configuration and create a `firebase.js` file in the project root with your configuration:

     ```javascript
     // firebase.js
     export const firebaseConfig = {
       apiKey: "your_api_key",
       authDomain: "your_auth_domain",
       databaseURL: "your_databaseurl",
       projectId: "your_project_id",
       storageBucket: "your_storage_bucket",
       messagingSenderId: "your_messaging_sender_id",
       appId: "your_app_id"
     };
     ```

   <img src="./Images/firebase-1.png"><img src="./Images/firebase-2.png">

5. **Start the Development Server**:
   ```bash
   npm start
   ```

6. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Changelog

### Version 1.5.0 (2025-03-17)
- Enhanced backend rules.
- Added images to sign-in/up pages.
- Restricted admin page access to admins only.
- Added Babel plugin for private properties.

### Version 1.3.0 (2025-01-25)
- Added user profile picture functionality.
- Implemented email validation.
- Improved error messages for product display issues.

### Version 1.2.0 (2024-12-27)
- Redesigned bill layout.
- Updated Firebase database structure.
- Enhanced data synchronization.

### Version 1.1.1 (2024-01-16)
- Added Changelog section.
- Updated README structure.
- Improved installation instructions.
- Enhanced Firebase setup documentation.

### Version 1.1.0 (2024-01-15)
- Added data visualization with Recharts.
- Implemented PDF export for order history.
- Enhanced admin panel with advanced reporting.
- Added user order history tracking.
- Improved responsive design.

### Version 1.0.0 (2023-12-01)
- Initial release.
- Basic product catalog and cart functionality.
- Firebase integration for real-time updates.
- User authentication system.
- Basic admin panel features.

### Version 0.1.0 (2023-07)
- Initial project setup.
- Basic cart modal implementation.
- Product image integration.
- Core functionality foundation.

## Contributing

We welcome contributions! If you'd like to help improve this project, feel free to fork the repository and submit a Pull Request.
