// Dữ liệu 29 chữ cái tiếng Việt
const ALPHABET = [
  { id: 'a', letter: 'a', height: 'Cao 2 ô li', emoji: '👕', word: 'áo', desc: 'Đặt bút dưới đường kẻ 3 một chút, viết nét cong kín. Từ điểm dừng của nét cong kín, bút rê lên đường kẻ 3 rồi viết nét móc ngược phải.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'a_hat', letter: 'ă', height: 'Cao 2 ô li', emoji: '🥭', word: 'ăn', desc: 'Viết chữ a trước, sau đó thêm dấu nón ngửa (nét cong dưới) nhỏ phía trên chữ a.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'a_dau', letter: 'â', height: 'Cao 2 ô li', emoji: '🍄', word: 'ấm', desc: 'Viết chữ a trước, sau đó thêm dấu mũ (gồm 2 nét xiên ngắn nối nhau) trên đầu chữ a.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'b', letter: 'b', height: 'Cao 5 ô li', emoji: '🎈', word: 'bóng', desc: 'Đặt bút trên đường kẻ 2, viết nét khuyết trên nối liền với nét thắt trên cao 5 ô li.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'c', letter: 'c', height: 'Cao 2 ô li', emoji: '🦮', word: 'chó', desc: 'Đặt bút dưới đường kẻ 3 một chút, viết nét cong hở phải cao 2 ô li.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
  // Các chữ cái khác tiếp tục ở đây...
];

// Dữ liệu câu hỏi đố vui
const QUIZ_QUESTIONS = [
  {
    question: "Chữ cái nào bắt đầu cho từ 'Áo'?",
    options: ["a", "b", "c", "d"],
    answer: "a"
  },
  {
    question: "Chữ 'b' cao bao nhiêu ô li?",
    options: ["2 ô li", "4 ô li", "5 ô li", "3 ô li"],
    answer: "5 ô li"
  },
  {
    question: "Từ nào dưới đây bắt đầu bằng chữ 'c'?",
    options: ["Bóng", "Chó", "Áo", "Cá"],
    answer: "Cá"
  }
];
