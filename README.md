# Hangman API

## Introduction

The Hangman API is a RESTful web service designed to facilitate user registration, authentication, and game management for a Hangman game. This API is built with Express.js, MongoDB, and utilizes JSON Web Tokens (JWT) for secure authentication. Socket.io is used to communicate with players while playing the game.

## About Game

Hangman is a classic word-guessing game that has been enjoyed by players of all ages for decades. The objective of the game is to guess the hidden word, one letter at a time, before a certain number of incorrect guesses result in a "hanging."

### Example

Let's say the secret word is "apple." There will be a given hint for it and users will guess it.

The game board starts as: _ _ _ _ _

The player guesses the letter "e":

Correct guess: _ _ _ _ e

The player guesses the letter "x":

Incorrect guess: Part of the hangman is drawn (e.g., the gallows).

The player continues guessing until either the word is fully revealed or the hangman drawing is completed.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Socket.io

## Authentication

For the authentication of users of the application, JWT (JSON Web Tokens) have been used. It is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with HMAC algorithm) or a public/private key pair using RSA.

## Communication

For connecting the players with different players in the same game room, Socket.io has been used. It is a popular library for enabling real-time, bidirectional communication between web clients and servers. It is used to manage real-time updates between the server and the clients. For example, when a player makes a guess, the server processes the guess and immediately broadcasts the updated game state to all connected clients. This ensures that all players see the same game state in real-time.

## Setting up the Project

1. Clone the GitHub repo: [Hangman-Backend](https://github.com/furiousluck/Hangman-Backend)
2. Create `.env` files with `MONGO_URI` and `JWT_SECRET`.
3. On the terminal, run `npm install`.
4. To start the project, run `npm start`.

## Features

- Secure authentication and storage of passwords of users using JWT.
- Real-time updates for rival moves in the game.
- Ability to connect with multiple players at the same time.

## Future Improvements

- Add a password feature for rooms so that unknown players are not able to join.
- A new game mode which randomly changes the word making the game more interesting.