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

// DỮ LIỆU 14 NÉT CƠ BẢN
const BASIC_STROKES_DATA = [
    { id: "sothang", name: "Nét sổ thẳng", youtubeId: "qeVv7ApZr1I", guide: "Đặt bút trên đường kẻ 3, kéo thẳng xuống đường kẻ 1 rồi dừng bút." },
    { id: "ngang", name: "Nét ngang", youtubeId: "1inzb8uiVio", guide: "Đặt bút trên đường kẻ 2, đưa bút từ trái sang phải." },
    { id: "xientrai", name: "Nét xiên trái", youtubeId: "2hjEJp9L1rM", guide: "Đặt bút ở đường kẻ 3, kéo chéo xuống góc trái đường kẻ 1." },
    { id: "xienphai", name: "Nét xiên phải", youtubeId: "ZutfvPYwK40", guide: "Đặt bút ở đường kẻ 3, kéo chéo xuống góc phải đường kẻ 1." },
    { id: "mocxuoi", name: "Nét móc xuôi", youtubeId: "9Xekg3rU7sc", guide: "Đặt bút giữa ô li 2 và 3, vòng cong lên đường kẻ 3 rồi kéo thẳng xuống đường kẻ 1." },
    { id: "mocnguoc", name: "Nét móc ngược", youtubeId: "dfbBiT2aAYs", guide: "Đặt bút ở đường kẻ 3, kéo thẳng xuống đường kẻ 1 rồi lượn cong hất lên." },
    { id: "moc2dau", name: "Nét móc hai đầu", youtubeId: "LYJ_MVg5Ggs", guide: "Đặt bút ở đường kẻ 2, lượn cong lên đường kẻ 3 rồi kéo xuống móc hất lên." },
    { id: "conghotrai", name: "Nét cong hở trái", youtubeId: "IEdfR38gcjo", guide: "Đặt bút dưới đường kẻ 3, lượn cong sang phải rồi vòng xuống đường kẻ 1." },
    { id: "conghophai", name: "Nét cong hở phải", youtubeId: "OZ98t9hNipo", guide: "Đặt bút dưới đường kẻ 3, lượn cong sang trái rồi vòng xuống đường kẻ 1." },
    { id: "congkin", name: "Nét cong khép kín", youtubeId: "oTDP5kYTd6o", guide: "Đặt bút dưới đường kẻ 3, viết nét cong từ phải sang trái khép kín thành hình tròn." },
    { id: "khuyettren", name: "Nét khuyết trên", youtubeId: "KM3cqrhKeSw", guide: "Đặt bút đường kẻ 2, kéo xiên lên đường kẻ 6, lượn cong vòng xuống kéo thẳng về đường kẻ 1." },
    { id: "khuyetduoi", name: "Nét khuyết dưới", youtubeId: "h7YOnn63EQU", guide: "Đặt bút đường kẻ 3, kéo thẳng xuống dưới đường kẻ 1 (3 ô li), lượn cong hất xiên lên." },
    { id: "thattren", name: "Nét thắt trên", youtubeId: "X3YNUW3q_7A", guide: "Đặt bút đường kẻ 1, đưa lên đường kẻ 3 xoắn một vòng nhỏ thắt lại." },
    { id: "thatgiua", name: "Nét thắt giữa", youtubeId: "xVstl9bH2_o", guide: "Đặt bút viết nét khuyết, đến đường kẻ 2 xoắn vòng thắt nhỏ rồi kéo ra." }
];
