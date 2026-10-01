const USERS = {
    HS: [
        { username: 'HS001', password: '123', name: 'Bé Minh Anh' }
    ],
    GV: [
        { username: 'GV001', password: '123', name: 'Cô Nguyễn Thị Hoa' }
    ]
};

const ALPHABET_DATA = [
    { 
        letter: 'a', 
        youtubeId: 'drneBN4t2_0', 
        description: 'Chữ a cao 2 ô ly, gồm 2 nét: Nét cong tròn khép kín và nét móc ngược phải.' 
    },
    { 
        letter: 'ă', 
        youtubeId: 'bLXsG53AhTs', 
        description: 'Chữ ă được viết như chữ a, thêm dấu á (nét cong ngửa nhỏ) đặt cân đối trên đầu.' 
    },
    { 
        letter: 'â', 
        youtubeId: 'cLR8LSAUvNc', 
        description: 'Chữ â được viết như chữ a, thêm dấu ớ (dấu mũ úp nhỏ) đặt cân đối trên đầu.' 
    },
    { 
        letter: 'b', 
        youtubeId: 'AYMEFsV8oGU', 
        description: 'Chữ b cao 5 ô ly, gồm 2 nét: Nét khuyết trên và nét thắt.' 
    },
    { 
        letter: 'c', 
        youtubeId: 'qpPFGkoc08c', 
        description: 'Chữ c cao 2 ô ly, gồm 1 nét cong hở phải.' 
    },
    { 
        letter: 'd', 
        youtubeId: 'G8vQXirNegE', 
        description: 'Chữ d cao 4 ô ly, gồm 2 nét: Nét cong tròn khép kín và nét móc ngược phải dài.' 
    },
    { 
        letter: 'đ', 
        youtubeId: '_fts0DF3gtU', 
        description: 'Chữ đ được viết như chữ d, thêm 1 nét ngang ngắn ở đường kẻ 4.' 
    },
    { 
        letter: 'e', 
        youtubeId: 'd-mj2hECWK0', 
        description: 'Chữ e cao 2 ô ly, gồm 1 nét cong phải kết hợp nét cong hở phải.' 
    },
    { 
        letter: 'ê', 
        youtubeId: 'OIC5GXgs4uw', 
        description: 'Chữ ê được viết như chữ e, thêm dấu mũ (nét thẳng xiên ngắn) trên đầu.' 
    },
    { 
        letter: 'g', 
        youtubeId: '1MMZTptnvsY', 
        description: 'Chữ g cao 5 ô ly (2 ô trên, 3 ô dưới), gồm nét cong kín và nét khuyết dưới.' 
    },
    { 
        letter: 'h', 
        youtubeId: 'OpG20bE7NZ0', 
        description: 'Chữ h cao 5 ô ly, gồm 2 nét: Nét khuyết trên và nét móc hai đầu.' 
    },
    { 
        letter: 'i', 
        youtubeId: 'CzBUM3_f8fk', 
        description: 'Chữ i cao 2 ô ly, gồm nét xiên ngắn, nét móc ngược và một chấm nhỏ trên đầu.' 
    },
    { 
        letter: 'k', 
        youtubeId: 'ToZWCbg2f0I', 
        description: 'Chữ k cao 5 ô ly, gồm nét khuyết trên và nét thắt giữa.' 
    },
    { 
        letter: 'l', 
        youtubeId: 'v2pnFK4UU0s', 
        description: 'Chữ l cao 5 ô ly, gồm 1 nét kết hợp giữa nét khuyết trên và nét móc ngược.' 
    },
    { 
        letter: 'm', 
        youtubeId: 'vu88TNi_KTU', 
        description: 'Chữ m cao 2 ô ly, gồm 3 nét: Nét móc xuôi rộng, nét móc xuôi hẹp và nét móc hai đầu.' 
    },
    { 
        letter: 'n', 
        youtubeId: '5eO7cXuRtHA', 
        description: 'Chữ n cao 2 ô ly, gồm 2 nét: Nét móc xuôi và nét móc hai đầu.' 
    },
    { 
        letter: 'o', 
        youtubeId: 'VmzS2fVnaps', 
        description: 'Chữ o cao 2 ô ly, gồm 1 nét cong tròn khép kín.' 
    },
    { 
        letter: 'ô', 
        youtubeId: 'OegGW9Jh74k', 
        description: 'Chữ ô được viết như chữ o, thêm dấu mũ úp nhỏ đặt cân đối trên đầu.' 
    },
    { 
        letter: 'ơ', 
        youtubeId: 'RiIuI2oeSbk', 
        description: 'Chữ ơ được viết như chữ o, thêm 1 nét râu nhỏ ở góc trên bên phải.' 
    },
    { 
        letter: 'p', 
        youtubeId: 'Gx6lrk82KpM', 
        description: 'Chữ p cao 4 ô ly (2 ô trên, 2 ô dưới), gồm nét thẳng và nét móc hai đầu.' 
    },
    { 
        letter: 'q', 
        youtubeId: 'Dym_rJGrWt4', 
        description: 'Chữ q cao 4 ô ly, gồm nét cong tròn khép kín và nét thẳng đứng.' 
    },
    { 
        letter: 'r', 
        youtubeId: '5sxO_HuKLBs', 
        description: 'Chữ r cao hơn 2 ô ly một chút, gồm nét thắt đầu và nét móc ngược phải.' 
    },
    { 
        letter: 's', 
        youtubeId: 'hwVH_zQJAzU', 
        description: 'Chữ s cao hơn 2 ô ly một chút, gồm nét thắt trên và nét cong hở trái.' 
    },
    { 
        letter: 't', 
        youtubeId: 'GSb75pRz84k', 
        description: 'Chữ t cao 3 ô ly, gồm nét xiên ngắn, nét móc ngược dài và nét ngang.' 
    },
    { 
        letter: 'u', 
        youtubeId: 'F1qJatFXTG0', 
        description: 'Chữ u cao 2 ô ly, gồm nét xiên ngắn, nét móc ngược rộng và nét móc ngược hẹp.' 
    },
    { 
        letter: 'ư', 
        youtubeId: 'JXezsFHBWEg', 
        description: 'Chữ ư được viết như chữ u, thêm 1 nét râu nhỏ ở nét móc thứ hai.' 
    },
    { 
        letter: 'v', 
        youtubeId: 'kOa3b-DcESE', 
        description: 'Chữ v cao 2 ô ly, gồm nét móc hai đầu kết hợp nét thắt trên.' 
    },
    { 
        letter: 'x', 
        youtubeId: 'pZv6sY5ev2c', 
        description: 'Chữ x cao 2 ô ly, gồm 2 nét: Nét cong hở phải và nét cong hở trái lưng tựa vào nhau.' 
    },
    { 
        letter: 'y', 
        youtubeId: '_7Lm6jJR-1s', 
        description: 'Chữ y cao 5 ô ly (2 ô trên, 3 ô dưới), gồm nét xiên ngắn, nét móc ngược và nét khuyết dưới.' 
    }
];
