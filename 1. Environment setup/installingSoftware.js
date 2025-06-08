/**
 * Installing Basic Software for Web Development
 */

// 1. Overview
const overview = {
  description: "Hướng dẫn cài đặt phần mềm cơ bản cần thiết cho lập trình web",
  includes: ["Code Editor", "Web Browsers", "Local Server", "Graphics Tools", "Deployment Options"]
};

// 2. Requirements
const prerequisites = ["Hiểu biết cơ bản về hệ điều hành đang sử dụng"];

// 3. Learning Outcomes
const learningOutcomes = [
  "Biết phần mềm cần thiết để bắt đầu lập trình web",
  "Cài đặt trình soạn thảo mã, trình duyệt hiện đại, và máy chủ cục bộ",
  "Khám phá các ứng dụng hỗ trợ khác"
];

// 4. Code Editor
const codeEditor = {
  recommended: "Visual Studio Code",
  reasons: ["Miễn phí", "Đa nền tảng", "Nhiều tính năng", "Hỗ trợ mạnh mẽ"]
};

// 5. Web Browsers
const browsers = {
  purpose: "Kiểm tra website trên nhiều trình duyệt",
  updateNote: "Trình duyệt thường tự cập nhật khi khởi động lại",
  desktop: {
    chromium: ["Chrome", "Opera", "Brave", "Edge", "Vivaldi"],
    gecko: ["Firefox"],
    webkit: ["Safari"]
  },
  mobile: {
    android: ["Chrome", "Firefox", "Opera", "Brave", "Edge", "Samsung Internet", "Vivaldi"],
    ios: ["Safari", "Chrome (WebKit)", "Firefox (WebKit)"]
  },
  note: "Các trình duyệt iOS dùng WebKit; có thể thay đổi trong tương lai"
};

// 6. Local Testing Server
const localServer = {
  method: "Sử dụng Live Preview trong VS Code",
  steps: [
    "Mở View > Extensions",
    "Tìm 'live preview'",
    "Cài đặt Live Preview từ Microsoft",
    "Mở file HTML và nhấn 'Show Preview'"
  ],
  advanced: "Thiết lập máy chủ cục bộ riêng nếu muốn kiểm thử linh hoạt hơn"
};

// 7. Graphics Tools
const graphicsTools = {
  tasks: ["Cắt", "Chỉnh kích thước", "Nén ảnh", "Chuyển định dạng"],
  freeTools: {
    mac: "Preview",
    windows: "Photos app",
    web: "https://tinypng.com"
  },
  advancedTools: ["GIMP", "Paint.NET", "Adobe Express", "Canva", "Figma", "Affinity", "Sketch", "Photoshop"]
};

// 8. Version Control Tools
const versionControl = {
  tools: ["Git", "GitHub", "GitLab"],
  note: "Chưa cần cài ngay, sẽ học ở phần sau"
};

// 9. Deployment Options
const deployment = {
  methods: ["Hosting + SFTP", "GitHub Pages", "Netlify", "Glitch", "CodePen"],
  note: "Sẽ học trong module 'Your first website'"
};
