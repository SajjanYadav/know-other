
# 🌐 letMeDetails

A React application that fetches user data from an external API and displays user profile cards with key information like contact, address, and company details. The UI features a clean card layout over a looping video background.

---

## ✨ Features

- Fetches and displays 50 user profiles from a public API.
- Responsive card layout using custom CSS.
- Smooth hover zoom effect on each card.
- Background video integrated into the main layout.
- Displays important user details: name, email, phone, company, crypto info, etc.

---

## 🖼 Preview
![image](https://github.com/user-attachments/assets/3e83fa1f-bd75-4583-af2f-fee83a09ce3e)
![image](https://github.com/user-attachments/assets/6e903376-c9a4-479b-874b-406ee9b510f3)




---

## 🔧 Technologies Used

- React
- CSS (custom styling via `index.css`)
- [DummyJSON API](https://dummyjson.com/)
- HTML5 `<video>` tag for background video

---

# 🎬 User Cards with Background Video

This React project displays user cards fetched from a public API with a fullscreen background video.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/letmedetails.git
cd letmedetails
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add a Background Video

Place your background video file in the `public/` folder and name it `background.mp4`, or update the filename accordingly in the component where it's used.

### 4. Run the App

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
/public
  └── background.mp4          # Background video

/src
  ├── components
  │   ├── Card.js             # Displays individual user card
  │   └── Details.js          # Loops through users and renders cards
  ├── App.js                  # Fetches API and sends props
  ├── index.css               # All custom styling
  └── index.js                # App entry point
```

---

## 📦 API Used

**Endpoint**: `https://dummyjson.com/users?limit=50&skip=0`  
Free to use — no API key or authentication required.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify it as you like.

---

## 🙌 Acknowledgements

- [DummyJSON](https://dummyjson.com) for free mock user data.
- The React community for helpful docs and patterns.

---

Created with ❤️ by Sajjan
