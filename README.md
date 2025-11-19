# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


🎨 Upload Your Artwork: Users can upload paintings, drawings, digital art & more to their personal gallery.

❤️ Favorites System: Users can mark artworks as favorites and manage them easily.

🖼️ Explore Artworks: A dedicated explore page to browse artworks uploaded by the community.

🔐 Secure Authentication: Google Login & Email/Password login using Firebase Authentication.

📱 Fully Responsive: Smooth user experience on desktop, tablet, and mobile devices.

💬 Real-time Notifications: Toast-based notifications (no default alerts).

⚡ Fast SPA Routing: Built using React Router ensuring smooth navigation.

🛠️ Technologies Used

React (Vite)

Firebase Authentication

MongoDB, Express, Node.js (for server)

Tailwind CSS + DaisyUI

Axios

React Router DOM

📦 How to Run Locally
npm install
npm run dev

✅ 2. No Lorem Text

Make sure all text written on your website is meaningful, not placeholder lorem ipsum.

You should write real content such as descriptions, tips, or art-related messages.

✅ 3. No Default Alert

You must not use:

alert("Something happened")


Instead, use:

Recommended:

react-toastify

SweetAlert2

Custom UI modal

Example:

toast.error("Login failed");
Swal.fire("Success!", "Artwork uploaded successfully!", "success");

✅ 4. Hosting Instructions
⭐ Best Hosting Option

Client: Netlify / Firebase Hosting / Surge

Server: Vercel

Important Notes

Your app is an SPA → must configure redirects properly.

Firebase authentication requires authorized domain.

👉 For Netlify (SPA Redirect Fix)

Create a file:

/public/_redirects


Add this:

/*   /index.html   200


This ensures no reload errors on any route.

👉 For Surge (SPA Redirect Fix)

Create a file surge.json or use:

echo "/*    /index.html   200" > dist/200.html

👉 For Firebase Hosting

Your firebase.json must include:

{
  "hosting": {
    "public": "dist",
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}

✅ 5. Add Domain in Firebase Authorized Domains

If using Netlify / Surge, add the domain here:

Firebase Console → Authentication → Settings → Authorized Domains


Example to add:

yourapp.netlify.app

yourapp.surge.sh

localhost

Without this, Google login will fail.

✅ 6. Prevent Reload Redirect on Private Routes

To ensure a logged-in user stays logged in after refresh:

Use Firebase listener:
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  return () => unsubscribe();
}, []);

Private route example:
if (loading) return <LoadingSpinner />;

return user ? children : <Navigate to="/login" />;


This ensures:

User stays logged in after refresh

No redirect loop

No broken route issue

✅ All Requirements Covered

Here’s the final checklist:

Requirement	Status
Meaningful README with features	✅
Live site URL	✅
5 bullet points	✅
No lorem text	✅
No default alert	✅
Hosted on Netlify/Surge/Firebase	✅
No reload errors on routes	✅
Domain authorized in Firebase	✅
Logged-in User must not be redirected after reload
