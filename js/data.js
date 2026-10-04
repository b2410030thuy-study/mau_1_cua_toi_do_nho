// DỮ LIỆU 29 CHỮ CÁI TIẾNG VIỆT
const ALPHABET_DATA = [
    {
        id: "a",
        name: "Chữ A",
        upper: "A",
        lower: "a",
        youtubeId: "qeVv7ApZr1I",
        description: "Chữ 'a' gồm 2 nét: Nét 1 là nét cong kín (đặt bút dưới đường kẻ 3, viết nét cong khép kín), Nét 2 là nét móc ngược phải (đặt bút trên đường kẻ 3, kéo thẳng xuống sát đường kẻ 1 rồi lượn cong hất lên đường kẻ 2)."
    },
    {
        id: "aw",
        name: "Chữ Ă",
        upper: "Ă",
        lower: "ă",
        youtubeId: "1inzb8uiVio",
        description: "Viết chữ 'a' trước, sau đó thêm dấu phụ 'á' (nét cong dưới nhỏ) ngửa lên nằm trên đầu chữ 'a'."
    },
    {
        id: "aa",
        name: "Chữ Â",
        upper: "Â",
        lower: "â",
        youtubeId: "2hjEJp9L1rM",
        description: "Viết chữ 'a' trước, sau đó thêm dấu mũ 'ô' (gồm nét xiên trái ngắn và xiên phải ngắn) úp xuống trên đầu chữ 'a'."
    },
    {
        id: "b",
        name: "Chữ B",
        upper: "B",
        lower: "b",
        youtubeId: "ZutfvPYwK40",
        description: "Nét 1 là nét khuyết trên cao 5 ô li kết hợp nét thắt trên ở đường kẻ 3."
    },
    {
        id: "c",
        name: "Chữ C",
        upper: "C",
        lower: "c",
        youtubeId: "9Xekg3rU7sc",
        description: "Đặt bút dưới đường kẻ 3 một chút, viết nét cong hở phải cao 2 ô li."
    },
    {
        id: "d",
        name: "Chữ D",
        upper: "D",
        lower: "d",
        youtubeId: "dfbBiT2aAYs",
        description: "Nét 1 là nét cong kín cao 2 ô li. Nét 2 là nét móc ngược phải cao 4 ô li dính sát vào bên phải nét cong kín."
    },
    {
        id: "dd",
        name: "Chữ Đ",
        upper: "Đ",
        lower: "đ",
        youtubeId: "LYJ_MVg5Ggs",
        description: "Viết chữ 'd' cao 4 ô li, sau đó thêm 1 nét gạch ngang ngắn trên đường kẻ 3 cắt ngang nét móc."
    },
    {
        id: "e",
        name: "Chữ E",
        upper: "E",
        lower: "e",
        youtubeId: "IEdfR38gcjo",
        description: "Đặt bút trên đường kẻ 1 một chút, viết nét cong xiên lên rồi vòng sang trái tạo nét cong hở phải cao 2 ô li."
    },
    {
        id: "ee",
        name: "Chữ Ê",
        upper: "Ê",
        lower: "ê",
        youtubeId: "OZ98t9hNipo",
        description: "Viết chữ 'e' trước, sau đó đặt thêm dấu mũ úp xuống trên đầu chữ 'e'."
    },
    {
        id: "g",
        name: "Chữ G",
        upper: "G",
        lower: "g",
        youtubeId: "oTDP5kYTd6o",
        description: "Nét 1 là nét cong kín. Nét 2 là nét khuyết dưới cao 5 ô li (2 ô li trên, 3 ô li dưới)."
    },
    {
        id: "h",
        name: "Chữ H",
        upper: "H",
        lower: "h",
        youtubeId: "KM3cqrhKeSw",
        description: "Nét 1 là nét khuyết trên cao 5 ô li. Nét 2 là nét móc hai đầu cao 2 ô li dính liền."
    },
    {
        id: "i",
        name: "Chữ I",
        upper: "I",
        lower: "i",
        youtubeId: "h7YOnn63EQU",
        description: "Nét 1 là nét xiên ngắn, Nét 2 là nét móc ngược phải cao 2 ô li. Cuối cùng thêm 1 chấm nhỏ trên đầu."
    },
    {
        id: "k",
        name: "Chữ K",
        upper: "K",
        lower: "k",
        youtubeId: "X3YNUW3q_7A",
        description: "Nét 1 là nét khuyết trên cao 5 ô li. Nét 2 là nét thắt giữa cao 2 ô li."
    },
    {
        id: "l",
        name: "Chữ L",
        upper: "L",
        lower: "l",
        youtubeId: "xVstl9bH2_o",
        description: "Đặt bút trên đường kẻ 2, viết nét khuyết trên nối liền nét móc ngược phải cao 5 ô li."
    },
    {
        id: "m",
        name: "Chữ M",
        upper: "M",
        lower: "m",
        youtubeId: "qeVv7ApZr1I",
        description: "Gồm 3 nét: 1 nét móc xuôi ngắn, 1 nét móc xuôi rộng và 1 nét móc hai đầu."
    },
    {
        id: "n",
        name: "Chữ N",
        upper: "N",
        lower: "n",
        youtubeId: "1inzb8uiVio",
        description: "Gồm 2 nét: 1 nét móc xuôi ngắn và 1 nét móc hai đầu cao 2 ô li."
    },
    {
        id: "o",
        name: "Chữ O",
        upper: "O",
        lower: "o",
        youtubeId: "2hjEJp9L1rM",
        description: "Đặt bút dưới đường kẻ 3, viết 1 nét cong khép kín tròn trịa cao 2 ô li."
    },
    {
        id: "oo",
        name: "Chữ Ô",
        upper: "Ô",
        lower: "ô",
        youtubeId: "ZutfvPYwK40",
        description: "Viết chữ 'o' trước, sau đó thêm dấu mũ úp trên đầu chữ 'o'."
    },
    {
        id: "ow",
        name: "Chữ Ơ",
        upper: "Ơ",
        lower: "ơ",
        youtubeId: "9Xekg3rU7sc",
        description: "Viết chữ 'o' trước, sau đó thêm 1 nét râu nhỏ ở phía bên phải đường kẻ 3."
    },
    {
        id: "p",
        name: "Chữ P",
        upper: "P",
        lower: "p",
        youtubeId: "dfbBiT2aAYs",
        description: "Nét 1 là nét xiên ngắn, Nét 2 là nét sổ thẳng cao 4 ô li (2 ô dưới), Nét 3 là nét móc hai đầu."
    },
    {
        id: "q",
        name: "Chữ Q",
        upper: "Q",
        lower: "q",
        youtubeId: "LYJ_MVg5Ggs",
        description: "Nét 1 là nét cong kín cao 2 ô li. Nét 2 là nét sổ thẳng cao 4 ô li (2 ô li dưới)."
    },
    {
        id: "r",
        name: "Chữ R",
        upper: "R",
        lower: "r",
        youtubeId: "IEdfR38gcjo",
        description: "Đặt bút ở đường kẻ 1, viết nét xiên có vòng thắt nhỏ ở đỉnh cao hơn 2 ô li một chút, nối liền nét cong hở phải."
    },
    {
        id: "s",
        name: "Chữ S",
        upper: "S",
        lower: "s",
        youtubeId: "OZ98t9hNipo",
        description: "Đặt bút ở đường kẻ 1, viết nét xiên tạo vòng thắt nhỏ ở đỉnh rồi viết nét cong xoắn vào trong."
    },
    {
        id: "t",
        name: "Chữ T",
        upper: "T",
        lower: "t",
        youtubeId: "oTDP5kYTd6o",
        description: "Nét 1 là nét xiên ngắn. Nét 2 là nét móc ngược phải cao 3 ô li. Nét 3 là nét gạch ngang ngắn trên đường kẻ 3."
    },
    {
        id: "u",
        name: "Chữ U",
        upper: "U",
        lower: "u",
        youtubeId: "KM3cqrhKeSw",
        description: "Nét 1 là nét xiên ngắn. Nét 2 là nét móc hai đầu rộng. Nét 3 là nét móc ngược phải."
    },
    {
        id: "uw",
        name: "Chữ Ư",
        upper: "Ư",
        lower: "ư",
        youtubeId: "h7YOnn63EQU",
        description: "Viết chữ 'u' trước, sau đó thêm nét râu nhỏ ở phía bên phải nét móc 2."
    },
    {
        id: "v",
        name: "Chữ V",
        upper: "V",
        lower: "v",
        youtubeId: "X3YNUW3q_7A",
        description: "Nét 1 là nét móc hai đầu. Nét 2 lượn lên đường kẻ 3 tạo nét thắt nhỏ ở đỉnh."
    },
    {
        id: "x",
        name: "Chữ X",
        upper: "X",
        lower: "x",
        youtubeId: "xVstl9bH2_o",
        description: "Gồm 2 nét: 1 nét cong hở phải và 1 nét cong hở trái tựa lưng vào nhau."
    },
    {
        id: "y",
        name: "Chữ Y",
        upper: "Y",
        lower: "y",
        youtubeId: "qeVv7ApZr1I",
        description: "Nét 1 là nét xiên ngắn, Nét 2 là nét móc hai đầu, Nét 3 là nét khuyết dưới cao 5 ô li."
    }
];

// Dữ liệu 14 nét cơ bản
const BASIC_STROKES = [
    {
        id: "net-ngang",
        name: "Nét ngang",
        symbol: "一",
        youtubeId: "J8mY7vU_N8Y",
        description: "Đặt bút trên đường kẻ 2, rê bút từ trái sang phải dừng lại trên đường kẻ 2."
    },
    {
        id: "net-so",
        name: "Nét sổ",
        symbol: "丨",
        youtubeId: "7L8N_Q3nKso",
        description: "Đặt bút trên đường kẻ 3, kéo thẳng đứng xuống dưới dừng lại ở đường kẻ 1."
    },
    {
        id: "net-xien-phai",
        name: "Nét xiên phải",
        symbol: "╱",
        youtubeId: "Bkx9Y8cW9I0",
        description: "Đặt bút ở đường kẻ 3, kéo xiên xuống dưới nghiêng về phía bên phải."
    },
    {
        id: "net-xien-trai",
        name: "Nét xiên trái",
        symbol: "╲",
        youtubeId: "M3xW-vX9UuM",
        description: "Đặt bút ở đường kẻ 3, kéo xiên xuống dưới nghiêng về phía bên trái."
    },
    {
        id: "net-moc-xuoi",
        name: "Nét móc xuoi",
        symbol: "∩",
        youtubeId: "wL4G2sN-Jv8",
        description: "Đặt bút ở đường kẻ 2, rê bút lên uốn cong rồi kéo thẳng xuống dừng ở đường kẻ 1."
    },
    {
        id: "net-moc-nguoc",
        name: "Nét móc ngược",
        symbol: "∪",
        youtubeId: "P_z-sT2u9vA",
        description: "Đặt bút trên đường kẻ 3, kéo thẳng xuống gần đường kẻ 1 thì lượn cong móc lên."
    },
    {
        id: "net-moc-hai-dau",
        name: "Nét móc hai đầu",
        symbol: "∿",
        youtubeId: "3mE5G9X_uY4",
        description: "Kết hợp nét móc xuôi ở đầu và nét móc ngược ở cuối."
    },
    {
        id: "net-cong-ho-phai",
        name: "Nét cong hở phải",
        symbol: "⊂",
        youtubeId: "8K_xT1eH_k0",
        description: "Đặt bút dưới đường kẻ 3, lượn cong sang trái xuống đường kẻ 1 rồi hất nhẹ lên."
    },
    {
        id: "net-cong-ho-trai",
        name: "Nét cong hở trái",
        symbol: "⊃",
        youtubeId: "K1p9yX5T2uI",
        description: "Đặt bút dưới đường kẻ 3, lượn cong sang phải xuống đường kẻ 1 rồi hất nhẹ lên."
    },
    {
        id: "net-cong-kin",
        name: "Nét cong kín",
        symbol: "O",
        youtubeId: "vL7X82qZ_m0",
        description: "Đặt bút dưới đường kẻ 3 một chút, viết đường cong khép kín tròn trịa như quả trứng."
    },
    {
        id: "net-khuyet-tren",
        name: "Nét khuyết trên",
        symbol: "ℓ",
        youtubeId: "N8vU_9XmP3k",
        description: "Đặt bút ở đường kẻ 2, rê xiên lên uốn cong đầu khuyết rồi kéo thẳng xuống đường kẻ 1."
    },
    {
        id: "net-khuyet-duoi",
        name: "Nét khuyết dưới",
        symbol: "g",
        youtubeId: "4Rz_9xI1Sno",
        description: "Kéo thẳng từ đường kẻ 3 xuống qua đường kẻ 1, uốn cong vòng sang trái rồi xiên lên."
    },
    {
        id: "net-that",
        name: "Nét thắt",
        symbol: "ɤ",
        youtubeId: "V5xW9M2u8Yo",
        description: "Viết nét uốn cong có vòng xoắn thắt nhỏ ở giữa."
    },
    {
        id: "net-xoan",
        name: "Nét xoắn",
        symbol: "🌀",
        youtubeId: "Z7mY8xP2N3A",
        description: "Tạo nét vòng xoắn khi đổi hướng đường nét."
    }
];
