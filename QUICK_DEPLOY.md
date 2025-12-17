# 🚀 Quick Deployment to Render.com

## ⚡ 5-Minute Deployment

### Step 1: Go to Render Dashboard
→ https://dashboard.render.com

### Step 2: Create Blueprint
1. Click **"New"** → **"Blueprint"**
2. Click **"Connect Repository"**
3. Search & select **`Teja_Portfolio`**
4. Authorize if needed

### Step 3: Deploy
1. Click **"Create Blueprint"**
2. Watch deployment progress (~5-10 min)
3. Get your live URL when done ✅

### Step 4: Done! 🎉
Your app is live and ready to use!

---

## 📍 Your Live Portfolio
After deployment, your app will be available at:
```
https://teja-portfolio.onrender.com
```
(Render assigns the exact domain)

---

## ✅ Deployment Features

✓ **Auto-deploy**: Every git push to `main` redeploys  
✓ **In-Memory Storage**: No database setup needed  
✓ **HTTPS**: Automatic SSL certificate  
✓ **Continuous Integration**: CI/CD pipeline built-in  
✓ **Logs**: Real-time logs in dashboard  

---

## 🔑 Key Files

- **`render.yaml`**: Infrastructure definition (DO NOT EDIT unless you know what you're doing)
- **`DEPLOYMENT.md`**: Full deployment guide with troubleshooting
- **`package.json`**: Build & start scripts for Render
- **`server/storage.ts`**: In-memory storage (no database needed)

---

## ❌ Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Build fails | Check logs; ensure `package.json` is valid |
| App won't start | Set `NODE_ENV=production` env var |
| 404 on visit | Wait for build to complete; refresh |
| Auto-suspend (free tier) | Upgrade to Starter plan for always-on |

---

## 📞 Need Help?

1. **Full Guide**: Read `DEPLOYMENT.md`
2. **Render Docs**: https://render.com/docs
3. **Check Logs**: Dashboard → Logs tab (shows errors)
4. **Support**: https://support.render.com

---

## 💡 Pro Tips

- Free tier goes to sleep after 15 min inactivity
- Upgrade to **Starter plan** ($10/mo) for always-on
- Scale up easily when needed
- In-memory storage resets when app restarts

---

**Your deployment is ready! Go to render.com and deploy now! 🚀**
