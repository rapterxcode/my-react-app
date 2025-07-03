# 📝 React Todo App

A modern, feature-rich Todo application built with React, TypeScript, and Vite. Manage your tasks with advanced filtering, sorting, and real-time statistics.

![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.0.0-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎯 Core Features
- ✅ **Add, Edit, Delete** todos
- 🔄 **Toggle completion** status
- 📅 **Creation timestamps**
- 🏷️ **Category management**
- ⭐ **Priority levels** (High, Medium, Low)

### 🔍 Advanced Features
- 🔍 **Smart filtering** by status, priority, and category
- 📊 **Multiple sorting** options (date, priority, alphabetical)
- 📈 **Real-time statistics** dashboard
- ✏️ **Inline editing** capability
- 🎨 **Visual priority indicators**

### 🎨 UI/UX
- 📱 **Responsive design**
- 🎯 **Modern interface**
- 🌈 **Color-coded priorities**
- ⚡ **Fast performance**

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-react-app.git
   cd my-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## 🏗️ Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # App header with statistics
│   │   ├── TodoItem.tsx        # Individual todo item
│   │   ├── TodoList.tsx        # List of todos
│   │   ├── TodoFilter.tsx      # Filtering and sorting
│   │   └── AddTodo.tsx         # Add new todo form
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── App.tsx                # Main application component
│   ├── App.css               # Global styles
│   └── main.tsx              # Application entry point
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎯 Usage Guide

### Adding a Todo
1. Click the "Add Todo" button
2. Enter your todo text
3. Select priority level (High/Medium/Low)
4. Choose or create a category
5. Click "Add" to save

### Managing Todos
- **Toggle**: Click the checkbox to mark as complete/incomplete
- **Edit**: Click the edit icon to modify the todo text
- **Delete**: Click the delete icon to remove the todo
- **Filter**: Use the filter bar to show specific todos
- **Sort**: Choose sorting options from the dropdown

### Categories
- Create custom categories to organize your todos
- Filter todos by category for better organization
- Categories are automatically saved

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=My Todo App
VITE_API_URL=http://localhost:3000
```

### TypeScript Configuration
The project uses strict TypeScript configuration for better type safety and development experience.

## 📊 Features Comparison

| Feature | v1.0 | v2.0 |
|---------|------|------|
| Basic CRUD | ✅ | ✅ |
| TypeScript | ✅ | ✅ |
| Filtering | ❌ | ✅ |
| Sorting | ❌ | ✅ |
| Categories | ❌ | ✅ |
| Priorities | ❌ | ✅ |
| Statistics | ❌ | ✅ |
| Inline Editing | ❌ | ✅ |

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3
- **State Management**: React Hooks
- **Package Manager**: npm

---

# 📚 Git Version Control Guide

## React Vite TypeScript Project: GitHub Version Control v1.0 - v2.0

### เตรียมพร้อมและตั้งค่าเริ่มต้น

#### 1. ติดตั้ง Dependencies
```bash
# ติดตั้ง Node.js (v18+)
# ติดตั้ง Git
# สร้าง GitHub Account
```

#### 2. สร้างโปรเจกต์ใหม่
```bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
```

## Version 1.0 - Setup และ Basic Features

#### 3. Initialize Git Repository
```bash
# เริ่มต้น Git repository
git init

# สร้าง .gitignore
echo "node_modules/
dist/
.env
.DS_Store
*.log" > .gitignore

# เพิ่มไฟล์ทั้งหมด
git add .

# Commit แรก
git commit -m "feat: initial project setup with Vite React TypeScript"
```

#### 4. สร้าง GitHub Repository
```bash
# สร้าง repository บน GitHub ชื่อ "my-react-app"
# จากนั้นเชื่อมต่อ local กับ GitHub

git remote add origin https://github.com/yourusername/my-react-app.git
git branch -M main
git push -u origin main
```

#### 5. โครงสร้างโปรเจกต์ v1.0
```
my-react-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── public/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

#### 11. Commit v1.0
```bash
# เพิ่มไฟล์ทั้งหมด
git add .

# Commit v1.0
git commit -m "feat: implement basic todo app functionality

- Add Header, TodoItem, TodoList components
- Implement add, toggle, delete todo features
- Setup TypeScript interfaces
- Basic styling and layout"

# สร้าง tag v1.0
git tag -a v1.0 -m "Release version 1.0 - Basic Todo App"

# Push ไปยัง GitHub
git push origin main
git push origin v1.0
```

## Version 2.0 - Enhanced Features

#### 12. สร้าง Branch สำหรับ v2.0
```bash
git checkout -b feature/v2.0-enhancements
```

#### 20. Commit v2.0 Features
```bash
# เพิ่มไฟล์ทั้งหมด
git add .

# Commit features ทีละส่วน
git commit -m "feat: add enhanced todo filtering and sorting

- Add TodoFilter component with status, priority, category filters
- Implement sorting by date, priority, alphabetical
- Add filter state management
- Update todo display with priority indicators"

git commit -m "feat: add advanced todo creation form

- Add AddTodo component with priority and category selection
- Support for creating new categories
- Enhanced form validation
- Improved user experience"

git commit -m "feat: enhance todo item with editing capability

- Add inline editing functionality
- Improve visual design with priority colors
- Add edit, toggle, delete actions
- Show creation date and category info
- Better responsive layout"

git commit -m "feat: add comprehensive statistics dashboard

- Display total, completed, pending, high priority counts
- Add real-time statistics updates
- Improve app header with better stats display
- Enhanced visual feedback"
```

#### 21. Merge และ Tag v2.0
```bash
# กลับไปยัง main branch
git checkout main

# Merge feature branch
git merge feature/v2.0-enhancements

# สร้าง tag v2.0
git tag -a v2.0 -m "Release version 2.0 - Enhanced Todo App

New Features:
- Advanced filtering by status, priority, category
- Multiple sorting options (date, priority, alphabetical)
- Inline editing of todos
- Priority levels with visual indicators
- Category management
- Real-time statistics dashboard
- Enhanced UI/UX design
- TypeScript improvements"

# Push ทั้งหมดไปยัง GitHub
git push origin main
git push origin v2.0

# ลบ feature branch (optional)
git branch -d feature/v2.0-enhancements
```

## การจัดการ Release บน GitHub

#### 22. สร้าง Release บน GitHub
```bash
# ไปที่ GitHub repository
# คลิก "Releases" -> "Create a new release"
# เลือก tag v2.0
# เขียน Release Notes:
```

### Release Notes v2.0:
```markdown
## 🚀 Todo App v2.0 - Major Enhancement

### ✨ New Features
- **Advanced Filtering**: Filter todos by status, priority, and category
- **Multiple Sorting**: Sort by date, priority, or alphabetical order  
- **Inline Editing**: Edit todos directly without opening forms
- **Priority Levels**: High, Medium, Low priority with color indicators
- **Category Management**: Organize todos with custom categories
- **Statistics Dashboard**: Real-time stats for total, completed, pending todos

### 🎨 UI/UX Improvements  
- Enhanced visual design with priority colors
- Better responsive layout
- Improved form interactions
- Real-time statistics display

### 🛠️ Technical Improvements
- Enhanced TypeScript interfaces
- Better component architecture  
- Improved state management
- Code organization and modularity

### 📦 Migration from v1.0
- Backward compatible with existing todos
- Automatic priority assignment (medium) for old todos
- Enhanced data structure with timestamps
```

## การใช้งาน Git Commands ที่สำคัญ

#### 23. Git Commands สำคัญสำหรับโปรเจกต์
```bash
# ดู commit history
git log --oneline --graph

# ดูความแตกต่างระหว่าง version
git diff v1.0 v2.0

# ดู tag ทั้งหมด
git tag

# ดู branch ทั้งหมด  
git branch -a

# สลับไปยัง version ใดก็ได้
git checkout v1.0
git checkout v2.0
git checkout main

# ดู status ปัจจุบัน
git status

# ดูไฟล์ที่เปลี่ยนแปลง
git diff

# Rollback ไปยัง commit ก่อนหน้า
git reset --hard HEAD~1

# สร้าง branch ใหม่จาก tag
git checkout -b hotfix/v2.0.1 v2.0
```

## ตัวอย่างการใช้งาน

#### 24. การรัน Development Server
```bash
# รัน development server
npm run dev

# เปิด browser ไปที่ http://localhost:5173
```

#### 25. การ Build สำหรับ Production
```bash
# Build โปรเจกต์
npm run build

# Preview build
npm run preview

# Deploy ไปยัง hosting service (Vercel, Netlify, etc.)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- TypeScript team for type safety
- All contributors and users

## 📞 Support

If you have any questions or need help:

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/my-react-app/issues)
- 📖 Documentation: [Wiki](https://github.com/yourusername/my-react-app/wiki)

---

<div align="center">
  <p>Made with ❤️ by [Your Name]</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>