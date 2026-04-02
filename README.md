## Project Overview: Food Kraft.

This repository serves as the core engine for Food Kraft., a Food Ordering & Management System. To ensure a clean separation of concerns, the project is divided into three specialized modules:

- **Client Side** **-** A dynamic React.js interface styled with Tailwind CSS, featuring category-based menu filtering and an interactive shopping cart with real-time price calculations, and a secure checkout flow integrated with Stripe.

- **Server Side** **-**
A robust Node.js and Express backend utilizing JWT for secure authentication and MongoDB (Mongoose) for data persistence and handling complex logic for real-time order status updates with payment processing.

- **Admin Side** **-**
A protected internal dashboard with role-based access control that allows administrators to manage the digital menu via CRUD operations and track/update incoming orders through a real-time management system.

## Central Documentation
The Business Requirements Document (BRD) is maintained in the Server-Side repository to ensure a single source of truth.
  - [Business Requirements Document](<https://github.com/ThR-202IV/food-delivery-w-db-BE/blob/master/docs/BRD%20-%20Food%20Kraft.%20Food%20Ordering%20System.md>)

Related Repositories
  - Client Side: [View Client Repository](https://github.com/ThR-202IV/food-delivery-w-db-FE)
  - Server Side: [View Server Repository](https://github.com/ThR-202IV/food-delivery-w-db-BE)
