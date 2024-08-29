# Tayai Chatbot

Tayai Chatbot is an AI-powered chatbot application built with React, Firebase, and OpenAI's API. It enables users to interact with an AI chatbot in real-time, offering a seamless chat experience. This application supports user authentication, real-time messaging, chat history storage, and the ability to view chat statistics and user information.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Running the Application](#running-the-application)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
7. [Acknowledgements](#acknowledgements)
8. [Contact](#contact)

## Features

- **User Authentication:** Secure user sign-in using Firebase Authentication.
- **Real-time Chat:** Instantaneous messaging with Firebase Realtime Database.
- **AI Conversations:** Powered by OpenAI's API to handle chatbot responses.
- **Chat History:** Logs and stores user interactions for review.
- **User Stats:** Displays statistics related to chat interactions.
- **Scalable and Maintainable:** Built with React for a modern, scalable, and easy-to-maintain codebase.

## Technologies Used

- **React**: Front-end library for building the user interface.
- **Firebase**: Used for authentication, real-time database, and hosting.
- **OpenAI API**: Provides AI-driven conversational capabilities.
- **Recharts**: Library for rendering charts and graphs for user stats.
- **React Router DOM**: For handling routing within the application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase project set up (instructions provided below).
- OpenAI API key, which you can obtain from [OpenAI](https://openai.com/).

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/TetuM7/TayAIChatAPP.git
    cd TayAIChatAPP
    ```

2. **Install Dependencies:**

    Run the following command to install the required npm packages:

    ```bash
    npm install
    ```

### Environment Variables

You need to set up environment variables to configure Firebase and OpenAI API keys. Create a `.env` file in the root of your project and add the following configurations, replacing placeholders with your actual Firebase and OpenAI credentials:

```env
REACT_APP_OPEN_AI_API_KEY=your_openai_api_key
REACT_APP_API_KEY=your_firebase_api_key
REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id
x
