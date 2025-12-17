# Deployment Guide: SkillShowcase to Render.com

## Prerequisites
- GitHub account with repository: https://github.com/baymaxx08/Teja_Portfolio.git
- Render.com account (free tier available)
- No credit card required for free tier

---

## Step 1: Sign Up / Log In to Render.com

1. Go to [render.com](https://render.com)
2. Sign up with GitHub or email
3. If you sign up with GitHub, authorize Render to access your repositories

---

## Step 2: Create a New Blueprint (Infrastructure as Code)

The `render.yaml` file in this repository defines your entire infrastructure:

### What's Configured:
- **Web Service**: Node.js backend (port automatically assigned)
- **PostgreSQL Database**: For persistent data storage
- **Auto-deployment**: Deploys automatically on git push to main

---

## Step 3: Deploy Using Render Blueprint

### Option A: Deploy from Render Dashboard (Recommended)

1. **Go to Render Dashboard**
   - Click "New" → "Blueprint"
   - Or go to https://dashboard.render.com/blueprints

2. **Connect GitHub Repository**
   - Click "Connect Repository"
   - Search for `Teja_Portfolio`
   - Click "Connect"

3. **Configure Deployment**
   - Service Name: `teja-portfolio` (or your preferred name)
   - Branch: `main`
   - Auto-deploy: Enable (recommended)

4. **Deploy**
   - Click "Create Blueprint"
   - Render will start building and deploying automatically
   - Wait for the build to complete (~5-10 minutes)

### Option B: Deploy Manually (No Blueprint)

If Option A doesn't work:

1. **Create Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub repository: `Teja_Portfolio`
   - Configuration:
     ```
     Build Command: npm install && npm run build
     Start Command: npm start
     ```

2. **Add Environment Variables**
   - Click "Environment" → "Add Environment Variable"
   - Set `NODE_ENV = production`
   - Set `DATABASE_URL` (will be automatically set by PostgreSQL service)

3. **Create PostgreSQL Database**
   - Click "New" → "PostgreSQL"
   - Name: `portfolio-db`
   - Plan: Free tier
   - After creation, copy the connection string

4. **Link Database to Web Service**
   - Go back to your web service
   - In "Environment" section, find/update `DATABASE_URL`
   - Paste your PostgreSQL connection string

---

## Step 4: Post-Deployment Setup

### Run Database Migrations

After deployment, you need to run migrations to set up your database schema:

1. **Via Render Shell**
   - In your Web Service dashboard, click "Shell"
   - Run: `npm run db:push`

2. **Via SSH/Terminal (Advanced)**
   - Connect to your service via the provided credentials

### Initialize Database (If Needed)

If tables don't exist, Drizzle will create them based on [shared/schema.ts](shared/schema.ts)

---

## Step 5: Access Your Application

Once deployment is complete:

- **Frontend & API**: `https://teja-portfolio.onrender.com` (your assigned domain)
- **API Endpoints**: `https://teja-portfolio.onrender.com/api/*`
- **Status**: Check deployment logs in Render Dashboard

---

## Environment Variables Explained

| Variable | Purpose | Auto-set? |
|----------|---------|-----------|
| `NODE_ENV` | Set to `production` for optimizations | ✓ Configure manually |
| `DATABASE_URL` | PostgreSQL connection string | ✓ Auto-linked from DB service |
| `PORT` | Port number (5000) | ✓ Auto-assigned by Render |

---

## Troubleshooting

### Deployment Failed
- Check logs in Render Dashboard (Logs tab)
- Common issues:
  - Missing `NODE_ENV` variable
  - Database not connected
  - Build script failure

### Database Connection Error
1. Verify `DATABASE_URL` is set
2. Check PostgreSQL service is running
3. Run migrations: `npm run db:push`

### Port Already in Use
- Render automatically assigns ports; no configuration needed

### Application Running but Shows 404
- Frontend build may have failed
- Check `npm run build` output in logs
- Verify `dist/` directory is created

---

## Development vs Production

**Development** (`npm run dev`):
- Runs Vite on port 5001 + Express on port 5000
- Hot module reloading enabled
- Uses in-memory storage

**Production** (`npm start`):
- Builds React frontend once
- Serves frontend from Express
- Uses PostgreSQL database
- Single port (PORT env var)

---

## Continuous Deployment

With `render.yaml`, every push to `main` branch triggers:
1. Code checkout
2. `npm install`
3. `npm run build` (builds client + bundles server)
4. `npm start` (starts production server)

---

## Costs

**Free Tier**:
- Web Service: Free (auto-suspends after 15 min of inactivity)
- PostgreSQL: Free (500MB storage, auto-suspend)

**Paid Tiers**: Available when you need continuous uptime

---

## Next Steps

1. ✅ Push changes with `render.yaml` to GitHub
   ```bash
   git add render.yaml
   git commit -m "Add Render deployment configuration"
   git push origin main
   ```

2. Go to Render Dashboard → New Blueprint
3. Select your repository and deploy
4. Wait for build to complete
5. Run database migrations in Shell tab
6. Access your portfolio!

---

## Useful Links

- Render Docs: https://render.com/docs
- Node.js on Render: https://render.com/docs/deploy-node
- PostgreSQL on Render: https://render.com/docs/databases
- Drizzle ORM: https://orm.drizzle.team/

---

## Support

For issues:
1. Check Render Dashboard Logs
2. Review this guide's Troubleshooting section
3. Contact Render Support: https://support.render.com
