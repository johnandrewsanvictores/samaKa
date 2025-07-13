# Server Configuration Guide

## Environment Variables

Create a `.env` file in the `server/` directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/samaka

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
SESSION_SECRET=your_session_secret_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback

# Frontend URL
FRONTEND_BASE_URL=http://localhost:5173

# Cookie Configuration
COOKIE_DOMAIN=localhost
```

## Database Setup

### MongoDB Installation

1. **Install MongoDB**:

   - [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Or use MongoDB Atlas (cloud service)

2. **Start MongoDB**:

   ```bash
   # Local installation
   mongod

   # Or with specific data directory
   mongod --dbpath /path/to/data/directory
   ```

3. **Create Database**:
   ```bash
   mongo
   use samaka
   ```

### Database Models

The application includes the following models:

- **User**: User accounts with role-based access
- **Event**: Community events and activities
- **Reward**: Rewards and incentives
- **Barangay**: Barangay information
- **Join**: Event participation tracking

## Google OAuth Setup

1. **Create Google OAuth Credentials**:

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials

2. **Configure OAuth**:
   - Authorized redirect URIs: `http://localhost:3000/auth/google/callback`
   - Add your domain for production

## File Upload Configuration

The server supports file uploads for:

- Event cover images
- Reward cover images

### Upload Directories

Create the following directories in the `server/` folder:

```bash
mkdir -p uploads/eventCover
mkdir -p uploads/rewards
```

### File Upload Limits

- **Max file size**: 5MB
- **Allowed formats**: jpg, jpeg, png, gif
- **Storage**: Local file system

## Development Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set environment variables**:

   - Copy the example above to `.env`
   - Update all values according to your setup

3. **Start development server**:
   ```bash
   npm run dev
   ```

## Production Deployment

1. **Environment variables**:

   - Set `NODE_ENV=production`
   - Use strong, unique secrets
   - Configure proper domain names

2. **Database**:

   - Use MongoDB Atlas or production MongoDB instance
   - Set up proper authentication and network access

3. **File storage**:
   - Consider using cloud storage (AWS S3, Google Cloud Storage)
   - Update upload middleware accordingly

## API Endpoints

### Authentication Routes

- `POST /auth/signin` - User login
- `POST /auth/signup` - User registration
- `POST /auth/logout` - User logout
- `GET /auth/user/profile` - Get user profile
- `PATCH /auth/update` - Update user profile

### Event Routes

- `GET /event` - Get all events
- `POST /event/create` - Create new event
- `PATCH /event/update` - Update event
- `DELETE /event/delete/:id` - Delete event

### Reward Routes

- `GET /reward` - Get all rewards
- `POST /reward/create` - Create new reward
- `PATCH /reward/update` - Update reward
- `DELETE /reward/delete/:id` - Delete reward

### Barangay Routes

- `GET /barangay` - Get all barangays
- `POST /barangay/create` - Create new barangay

## Security Considerations

1. **JWT Secrets**: Use strong, unique secrets
2. **CORS**: Configure properly for your domains
3. **File Uploads**: Validate file types and sizes
4. **Input Validation**: All inputs are validated
5. **Rate Limiting**: Consider adding rate limiting for production

## Troubleshooting

### Common Issues

1. **MongoDB Connection**:

   - Check if MongoDB is running
   - Verify connection string
   - Check network access

2. **Google OAuth**:

   - Verify client ID and secret
   - Check redirect URI configuration
   - Ensure Google+ API is enabled

3. **File Uploads**:
   - Check upload directory permissions
   - Verify file size limits
   - Check allowed file types
