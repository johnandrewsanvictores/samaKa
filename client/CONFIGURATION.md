# Client Configuration Guide

## Environment Variables

Create a `.env` file in the `client/` directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:3000

# Optional: Google OAuth (if using Google login)
# VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## API Configuration

The client uses Axios for API communication. The configuration is in `axious.js`:

- **Base URL**: Points to your backend server
- **Credentials**: Automatically includes cookies for authentication
- **Headers**: Sets proper content type for JSON requests

## Development Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set environment variables**:

   - Copy the example above to `.env`
   - Update `VITE_API_URL` to match your backend server

3. **Start development server**:
   ```bash
   npm run dev
   ```

## Production Build

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Preview the build**:
   ```bash
   npm run preview
   ```

## API Integration

The client includes a comprehensive API service (`src/utils/api.js`) that provides:

- Centralized API calls
- Automatic error handling
- File upload support
- Authentication headers

### Usage Example

```javascript
import { eventsAPI, authAPI } from "../utils/api";

// Fetch events
const events = await eventsAPI.getAllEvents();

// Create event
const newEvent = await eventsAPI.createEvent(eventData);
```
