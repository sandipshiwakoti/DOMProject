const features = [
    {
        id: 1,
        title: "Snow Leopard",
        category: "animal",
        img: "./img/animals/snowleopard.jpg",
        info: "Snow leopard is the apex predator of the Himalayan ecosystem and are found in the high mountains of the Central and South Asia. In Nepal, potential snow leopard habitat is estimated to be about 13,000 km2, with a large number of snow leopards found to be occurring outside protected areas."
    },
    {
        id: 2,
        title: "Dashain",
        category: "festival",
        img: "./img/festivals/dashain.jpg",
        info: "Dashain is the festival which is celebrated by the Hindus to mark the victory good over the evil. According to Hindu Mythology, Dashain is celebrated because Goddess Durga brutally destroyed the demon Mahisasur who was creating havoc in the world and Ram the incarnation of Lord Vishnu killed the demon lord Ravana."
    },
    {
        id: 3,
        title: "Gundruk",
        category: "food",
        img: "./img/foods/gundruk.jpg",
        info: "Gundruk is a fermented leafy green vegetable and a popular food in Nepal, and it is claimed to be one of the national dishes. It is popular not only in Nepal but also in Gorkhali or Nepalese diaspora households."
    },
    {
        id: 4,
        title: "Teej",
        category: "festival",
        img: "./img/festivals/teej.jpg",
        info: "Teej festival is a traditionally observed by women to celebrate the monsoons during the months of Shravan and Bhadrapada in the Hindu calendar. Women often pray to Parvati and Shiva during Teej."
    },
    {
        id: 5,
        title: "Selroti",
        category: "food",
        img: "./img/foods/selroti.jpg",
        info: "Sel roti is a traditional homemade ring-shaped rice bread originating from Nepal which is sweet in taste. It is made mainly of Rice flour, water, sugar, cooking oil and ghee."
    },
    {
        id: 6,
        title: "Red Panda",
        category: "animal",
        img: "./img/animals/panda.jpg",
        info: "Red Panda is one of the most beautiful and wonderful creatures. This species of Panda is found in the Himalayan region of Nepal. The main location of their habitat is the Himalayan region of eastern Nepal. The name “Red Panda” has been taken from Nepali word “Nigalya Ponya or Habre” which means Bamboo Eater."
    },
    {
        id: 7,
        title: "Holi",
        category: "festival",
        img: "./img/festivals/holi.jpg",
        info: "Holi, also known as Festival of Colors, is one of the most popular festivals in Nepal. It takes place on the full moon day in Nepali Fagu month (February to March in Solar Calendar) and lasts for 2 days."
    },
    {
        id: 8,
        title: "Yomari",
        category: "food",
        img: "./img/foods/yomari.jpg",
        info: "Yomari is a delicacy of the Newar community in Nepal. It is a steamed dumpling that consists of an external covering of rice flour with sweet fillings such as chaku. The delicacy plays a very important role in Newaa society, and is a key part of the festival of Yomari punhi."
    },
    {
        id: 9,
        title: "Danphe",
        category: "animal",
        img: "./img/animals/danphe.jpg",
        info: "Danphe is a bird of the genus Lophophorus of the pheasant family, Phasianidae. It is the national bird of Nepal, where it is known as the danfe in Nepali."
    },
    {
        id: 10,
        title: "Tihar",
        category: "festival",
        img: "./img/festivals/tihar.jpg",
        info: "Tihar, also known as Deepawali and Yamapanchak or Swanti, is a five-day-long Hindu festival celebrated in Nepal. It is the most celebrated festival after Dashain in Nepal. It is a five-day festival celebrated in late autumn. It has its unique ways of celebration. "
    },
];

const featureCards = document.querySelector(".feature-cards");
const btnContainer = document.querySelector(".feature-btns");

const displayFeatureCards = (features) => {
    let featureItems = features.map(item => {
        return `<div class="feature-card">
        <div class="feature-img-container">
        <img class="feature-img" src= ${item.img} alt="snow leopard" class="feature-img">
        </div>
        <div class="feature-details">
        <h1 class="feature-title">${item.title}</h1>
        <p class="feature-info">${item.info}</p>
        </div>
        </div>`;
    }).join("");
    featureCards.innerHTML = featureItems;
}

const displayFeatureBtns = () => {
    let categories = features.reduce((values, item) => {
        if(!values.includes(item.category))
        values.push(item.category);
        return values;
    }, ["all"]);
    categories = categories.map(category => {
        return `<button class="feature-btn" data-category=${category}>${category}</button>`;
    }).join("");
    btnContainer.innerHTML = categories;
    const btns = document.querySelectorAll(".feature-btn");
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.category;
            const filteredFeatures = features.filter(item => {
                if(item.category == category){
                    return item;
                }
            });
            if(category == "all")
                displayFeatureCards(features);
            else
                displayFeatureCards(filteredFeatures);
        });
    });
};


window.addEventListener("DOMContentLoaded", () => {
    displayFeatureCards(features);
    displayFeatureBtns();
});


