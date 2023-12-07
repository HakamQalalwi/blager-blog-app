#  Blager-Blog-App

<p align="center">
  <img src="client/src/img/logo.png" alt="Project Logo" width="500">
</p>

## HOME PAGE

<p align="center">
  <img src="client/src/img/homePage.jpeg" alt="Home Page" width="1000">
</p>

> A full-stack blogging platform built with React, Node.js, Express, and MySQL.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Database Schema](#database-schema)


## Introduction

The **Blogging Platform** is a full-stack application that allows users to register, create, edit, and delete blog posts. It provides a user-friendly interface for blogging and categorizes posts into different categories.

## Features

- **User Authentication:** Register and log in securely.

- **Create and Edit Posts:** Write and edit blog posts with a rich text editor.

- **Categorize Posts:** Organize posts into categories like Art, Science, Technology, Cinema, Design, and Food.

- **Responsive Design:** Access the platform seamlessly on various devices.

## Technologies Used

- **Frontend:** React, React Quill

- **Backend:** Node.js, Express

- **Database:** MySQL

- **Image Upload:** Multer

- **Authentication:** JWT

## Prerequisites

- [Node.js and npm](https://nodejs.org/): Make sure you have Node.js and npm installed.

- [MySQL](https://www.mysql.com/): Install MySQL locally or use a cloud-based MySQL service.


## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
2. **Navigate to the project directory:**
   ```sh
    cd blager-blog-app
3. **Install server dependencies:**
   ```sh
    cd api
    npm install
4. **Install client dependencies:**
   ```sh
    cd client
    npm install
5. **Create a .env file in the server directory with the following environment variables:**
   ```sh
    DB_KEY=<your-mysql-password>
6. **Start the api:**
   ```sh
    npm start
7. **Start the client:**
   ```sh
    npm start

## Usage

- **Register or log in to your account.**

- **View others posts.**

- **Write your own article and publish it.**

## Folder Structure

- client
  - public
  - src
    - assets
    - components
    - context
    - img
    - pages
- api
  - controllers
  - routes
 
## Database Schema

If you want to set up the database manually, you can use the following SQL schemas:

- **Posts table.**

  ```sql
  CREATE TABLE `posts` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `desc` varchar(10000) NOT NULL,
    `img` varchar(1000) NOT NULL,
    `date` datetime NOT NULL,
    `uid` int NOT NULL,
    `cat` varchar(45) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `uid_idx` (`uid`),
    CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );

- **Users table.**
  ```sql
  CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(45) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `img` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
  );



