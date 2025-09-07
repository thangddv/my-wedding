const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Việt Thắng & Hải Yến",
    // Opening message/description of the invitation
    description:
      "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
    // Groom's name
    groomName: "Thắng",
    // Bride's name
    brideName: "Yến",
    // Groom's parents names
    parentGroom: "Đồng Văn Viết & Nguyễn Thị Nhàn",
    // Bride's parents names
    parentBride: "Trần Văn Tài & Đỗ Thu Hường",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-11-01",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d706.9384991270489!2d106.382803898823!3d20.93038811510843!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1757056374084!5m2!1sen!2s",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "10:00 - 11:00",
    // Venue/building name
    location: "Nhà văn hóa Thiếu Nhi Hải Phòng",
    // Full address of the wedding venue
    address: "Hoàng Xá 1, P.Ái Quốc, TP.Hải Phòng",
    // Image that appears when link is shared on social media
    ogImage: "./images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "./favicon.png",
    // Google Apps Script Web App key for handling wishes submission
    appScriptKey: "AKfycbx3GP6TIo5plNswZybfWm25YwQtx6G7D3k5Qp8kLpxShdJVzXUNVg7Em9YA7c1rwOsT",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Lễ cưới nhà Trai",
        date: "2025-11-23",
        startTime: "10:00",
        endTime: "12:30",
        location: "Hoàng Xá 1, P.Ái Quốc, TP.Hải Phòng",
        address: "Nhà văn hóa Thiếu Nhi Hải Phòng",
        // Google Maps link for location (short clickable link)
        maps_url: "https://maps.app.goo.gl/2H1jpf9CxzMMdo1K7",
      },
      {
        title: "Lễ cưới nhà Gái",
        // Event date (format: YYYY-MM-DD)
        date: "2025-10-26",
        // Start time (format: HH:MM)
        startTime: "10:00",
        // End time (format: HH:MM)
        endTime: "12:30",
        // Event venue
        location: "Thịnh Lang, TP.Hòa Bình",
        // Full address
        address: "Khách Sạn Mường Thanh Luxury Hòa Bình",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "./audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: false,
      // Whether music repeats continuously
      loop: true,
      // Duration for which the toast message is displayed
      toastDuration: 1000
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "VietinBank",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "DONG VIET THANG",
      },
      {
        bank: "VIB",
        accountNumber: "0987654321",
        accountName: "TRAN THI HAI YEN",
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;