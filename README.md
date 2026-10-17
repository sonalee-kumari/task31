# 🫧 FreshWash Laundry - Vanilla Node.js HTTP Server

A lightweight, robust, and beginner-friendly web server built exclusively with **native Node.js modules** (`http`, `fs`, `path`). This project serves a complete multi-page responsive website for a local laundry & dry-cleaning service without using any external frameworks (such as Express.js).

---

## 📁 Folder Structure

```text
node/
├── public/
│   ├── home.html         # Homepage: hero banner, service cards, live status
│   ├── about.html        # About page: eco-friendly mission, metrics, statistics
│   ├── contact.html      # Contact page: responsive booking form, address, hours
│   └── 404.html          # Custom error page: user-friendly message & return button
├── server.js             # Native Node.js HTTP server and router logic
├── package.json          # Project metadata and start scripts
└── README.md             # Project documentation and verification guide
```

---

## ⚙️ Prerequisites

- **Node.js**: `v14.0.0` or higher (recommended: LTS `v18.x` or `v20.x`)
- No third-party packages or `npm install` steps required!

To check your installed Node.js version, run:
```bash
node -v
```

---

## 🚀 Installation & How to Run

1. Open your terminal in the project directory:
   ```bash
   cd c:\Users\Sonali\Desktop\sonalee_Task\animate\node
   ```

2. Start the server using Node:
   ```bash
   node server.js
   ```
   *Alternatively, run with npm:*
   ```bash
   npm start
   ```

3. You will see the server startup banner in your terminal:
   ```text
   ======================================================
   🫧  FreshWash Laundry Server running successfully!
   📍  URL: http://localhost:3000
   ------------------------------------------------------
   👉  Home page:    http://localhost:3000/
   👉  About page:   http://localhost:3000/about
   👉  Contact page: http://localhost:3000/contact
   👉  404 test:     http://localhost:3000/random-route
   ======================================================
   ```

4. Open your web browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

---

## 🌐 Available Routes & Status Codes

| Route | HTTP Method | Target File | Status Code | Description |
| :--- | :---: | :--- | :---: | :--- |
| `/` or `/home` | `GET` | `public/home.html` | `200 OK` | Displays laundry hero, services, and CTAs |
| `/about` | `GET` | `public/about.html` | `200 OK` | Highlights company mission and eco-friendly stats |
| `/contact` | `GET` | `public/contact.html` | `200 OK` | Interactive booking form, contact details, hours |
| `/*` *(any undefined)* | `GET` | `public/404.html` | `404 Not Found` | Custom laundry-themed missing page screen |
| *(Internal read failure)*| `GET` | N/A | `500 Server Error`| Fallback error message if file reading fails |

---

## 🧪 Manual Testing & Verification Commands

### 1. Verification via Browser
- Open `http://localhost:3000/` &rarr; Verify Home page loads with status 200.
- Open `http://localhost:3000/home` &rarr; Verify Home page loads with status 200.
- Open `http://localhost:3000/about` &rarr; Verify About page loads with status 200.
- Open `http://localhost:3000/contact` &rarr; Verify Contact page loads with status 200.
- Open `http://localhost:3000/any-unknown-path` &rarr; Verify 404 page loads with status 404 and clicking "Return to Safe Ground" navigates back to `/home`.

### 2. Verification via cURL (Terminal / PowerShell)

```powershell
# Test Home Route (200 OK)
curl -I http://localhost:3000/home

# Test About Route (200 OK)
curl -I http://localhost:3000/about

# Test Contact Route (200 OK)
curl -I http://localhost:3000/contact

# Test Undefined Route (404 Not Found)
curl -I http://localhost:3000/random-invalid-page
```

---

## 📸 Screenshots & Testing Logs

*(Placeholder: Paste your terminal run logs and browser screenshots below)*

```text
[Terminal Execution Log Sample]
[3:55:00 PM] GET request received for: / -> Normalized: /
[3:55:05 PM] GET request received for: /about -> Normalized: /about
[3:55:10 PM] GET request received for: /contact -> Normalized: /contact
[3:55:15 PM] GET request received for: /doesnotexist -> Normalized: /doesnotexist
```

---

## 📄 License
ISC License. Educational project for learning vanilla Node.js server architectures.
