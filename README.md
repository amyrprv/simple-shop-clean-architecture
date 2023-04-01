# Simple shop clean architecture

This is a simple E-commerce application built with NestJS and MySQL for my attempt to the Clean Architecture and DDD principles. The application is structured into three modules: Infrastructure, Domain, and Application.

## Infrastructure

The Infrastructure module handles the implementation details of the application, such as the database connection and repository implementations. The module contains:
* A MySQL database connection provider
* Repository implementations for each domain entity (User, Product, Order)

## Domain

The Domain module defines the business entities and rules for the application. The module contains:
* Domain entities (User, Product, Order)
* Repositories ports

## Application
The Application module provides the interfaces for the application's use cases. The module contains:
* Controllers to handle incoming HTTP requests and responses
* Services to handle the business logic of the use cases

## Getting Started
1. Clone the repository to your local machine
2. Install the dependencies with `npm install`
3. Set up a MySQL database
4. Copy the `.env.example` file and rename it to `.env,` then fill in the required information.
5. Start the application with `npm run start:dev`

## Conclusion
This simple E-commerce application demonstrates the use of NestJS, MySQL, Clean Architecture, and DDD principles to build a modular, maintainable, and scalable application.

## Disclaimer
This application is created for learning purposes and is not intended to be used in production. Use at your own risk.
