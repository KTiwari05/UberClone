# Backend API Documentation

## User Registration

### POST `/user/register`

Registers a new user.

#### Request Body

- **fullname**: object
  - **firstname** (string, required): First name of the user (minimum 3 characters).
  - **lastname** (string, optional): Last name of the user (minimum 3 characters).
- **email** (string, required): Valid email address of the user.
- **password** (string, required): Password for the account (minimum 6 characters).

#### Example Response

- `user`: (object)
- `fullname`: (object)
  - `firstname` (string): First name of the user (minimum 3 characters).
  - `lastname` (string): Last name of the user (minimum 3 characters).
- `email` (string): Valid email address of the user.
- `password` (string): Password for the account (minimum 6 characters).
- `token` (String): jwt token
