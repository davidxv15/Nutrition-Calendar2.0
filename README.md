# Nutrition Calendar: Track Your Daily Food Intake

## How to Use the App?

* **View the Calendar:**  
  - The app opens automatically to the **current month**, with **today's date highlighted**.  
  - Each date displays the **Daily Total** for calorie intake.  
  - The top of each column shows the **day of the week (Sun-Sat)**.  
  - Use the **"Prev. Month"** and **"Next Month"** buttons to navigate.  

* **Add Food Entries:**  
  - Click on any date to open a **Food Entry Modal**.  
  - Enter the **food name** and **calories** in the provided input fields.  
  - Press **Enter** or click **"Add Entry"** to save your meal.  
  - All entries appear in a list below, along with a **running calorie total**.  

* **Delete Entries:**  
  - Click the **trash icon** next to an entry to remove it.  

### Additional Features:  

* **Persistent Tracking**: Your entries are stored using **localStorage**, so your data stays saved even after closing the browser.  
* **Pattern Recognition**: The calendar view helps you **spot trends in eating habits** and their impact on your well-being.  
* **Calorie Summaries**: Each day shows a **Daily Total** of calories consumed.  
* **Month Navigation**: View past or future months to track long-term progress.  

### Technology Used:  

**Frontend:**  
* **React**: Handles UI and state management for dynamic updates.  
* **Moment.js**: Provides easy date and time formatting for the calendar.  
* **CSS**: Custom styling for a clean and intuitive user experience.  

**State Management:**  
* **useState & useEffect**: Tracks food entries and updates localStorage automatically.  

**Storage:**  
* **localStorage**: Ensures user data persists across sessions (future upgrade: MongoDB).  

### Future Features:  

* **More Nutrition Data**: Track **macros (carbs, protein, fat), vitamins, and hydration**.  
* **Food Awareness Cards**: Display random **nutrition facts** to help users make informed choices.  
* **API Integration**: Pull verified nutritional data from **USDA Food Database**.  
* **Custom Meal Categories**: Organize entries beyond calories (e.g., **breakfast, lunch, dinner, snacks**).  
* **Database Integration**: Shift from localStorage to **MongoDB** for multi-device access and analytics.  
* **User Insights & Trends**: Graph historical data for better decision-making.  
* **Themes**: Change theme to fit your personality.

### Use Case:  

The **Nutrition Calendar** is designed for **everyone**—from athletes to casual users—who want to **track food intake and learn proper nutrition**.  

As a **former chef** with extensive experience working alongside **nutritionists, dietitians, and medical professionals**, I designed this app to **help users develop food awareness, build healthier habits, and recognize patterns between diet and well-being**.  


### How to Run Locally:  

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/YOUR_USERNAME/nutrition-calendar.git
   cd nutrition-calendar
   ```  
2. **Install dependencies:**  
   ```sh
   npm install
   ```  
3. **Start the development server:**  
   ```sh
   npm start
   ```  
4. **Open your browser and visit:**  
   ```
   http://localhost:3000
   ```  

### Deployment:  

This app is **deployed on Netlify** and can be accessed here:  
🔗 **[Live App]()**  

### Screenshots:  

