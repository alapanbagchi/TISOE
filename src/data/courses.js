const courses = [
    {
        name: 'Mandarin Chinese for Beginners',
        descriptiveName: 'Mandarin Chinese for Beginners',
        category: 'Language',
        price: 30,
        description: "This course is for the complete beginners to Mandarin Chinese. In view of the basic and important role of Pinyin in Mandarin, the general knowledge of Pinyin will be taught in the first period, including the pronunciation of initials, finals, different tones, and the most common rules. Generally, 3.5 to 5 hours will be cost in this period, and you could pronounce some simple monosyllabic and disyllabic words after learning. Then you move to the next period, and the HSK textbooks 1 to 3 are recommended as the learning material. You will learn the most common-used words, phrases, sentence patterns, characters, and some interesting knowledge of Chinese culture. Besides, considering Chinese is a tone language, the pronunciation practice is provided throughout the whole learning process. After this period’s learning, you will master about 900 characters and over 2000 words, and your Chinese level will reach to B1, which means that you possess the basic communicative skills to live and travel in China.",
        teacher: 'Yishan',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/yishan.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/learn-chinese.jpg'
    },
    {
        name: 'Conversation Practice',
        descriptiveName: 'Conversation Practice - Enlarging Chinese vocabulary and completing grammar',
        category: 'Language',
        price: 24,
        description: "This course is for the people who could speak some Chinese and hope to enlarge their Chinese vocabulary or improve their speaking. There are two learning patterns for you to choose, topic discussion and reading comprehension. The topics will be chosen according to your preference, and the subjects such as Chinese culture, history, folk customs, hot-spots, food, celebrities can all be involved. As for the reading comprehension, the reading materials will be selected based on your Chinese level, and every time after reading, different questions about the content will be asked, and different opinions will be talked about. By doing conversation practice, your Chinese vocabulary will be expanded and the grammar will be completed. Gradually, your communicational ability in Chinese will be developed",
        teacher: 'Yishan',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/yishan.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/chinese-conversation-practice.jpg'
    }, 
    {
        name: 'Homework Help',
        descriptiveName: 'Homework Help - Customized tutoring service to resolving your homework problems and your preference textbooks',
        category: 'Language',
        price: 24,
        description: "This course is for the people that have learned Chinese in school. Customized tutoring service will be provided to assist students with homework problems. This course is also suitable for the ones who hope to learn Chinese by using their preference textbooks.",
        teacher: 'Yishan',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/yishan.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/chinese-homework-help.jpg'
    },
    {
        name: 'Landscapes',
        descriptiveName: 'Landscapes - Depicting realistic natural scenery',
        category: 'Art',
        price: 20,
        description: "This course educates students on the concept of foreground, middleground, and background in landscapes. Students will learn how to create an illusion of distance when portraying natural features.",
        teacher: 'Tatyana',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/tatiyana.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/course/landscapes.jpg'
    },
    {
        name: 'Value and Shapes for Beginners',
        descriptiveName: 'Value and Shapes for Beginners - Learning how to apply the scale of value to shapes and objects',
        category: 'Art',
        price: 20,
        description: "This course offers a basic introduction to the scale of value in art. Students will learn how to create light to dark hues through a pencil medium, use value in shapes, and understand how light visually affects objects. Students will practice this concept through the creation of spheres, cylinders and cones.",
        teacher: 'Tatyana',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/tatiyana.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/course/values-and-shapes-for-beginners.jpg'
    },
    {
        name: 'Linear Perspective',
        descriptiveName: 'Linear Perspective - Understanding the illusion of depth',
        category: 'Art',
        price: 20,
        description: "This course offers a basic introduction to the concept of sizing in art according to an object's position and distance from the eye. Students will learn about vanishing points and depth while applying this to their own art.",
        teacher: 'Tatyana',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/tatiyana.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/course/landscapes.jpg'
    },
    {
        name: 'Portraits',
        descriptiveName: 'Portraits - Creating realistic features',
        category: 'Art',
        price: 30,
        description: "This course offers an introduction to the proportions of the face, including in depth instruction on how to depict realistic human features through a pencil medium. Students will learn how to apply light and depth to accurately depict fae shapes, eyes, noses, mouths and hair cohesively.",
        teacher: 'Tatyana',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/tatiyana.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/course/portraits.jpg'
    },
    {
        name: 'Animals',
        descriptiveName: 'Animals - Learning how to create realistic animals',
        category: 'Art',
        price: 30,
        description: "This course offers an introduction to the proportions and shapes of animals and applies the principles of movement and light through pencil medium. Students will learn how to accurately and realistically depict animal characteristics.",
        teacher: 'Tatyana',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/tatiyana.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/course/animals.jpg'
    },
    {
        name: 'Custom/Artwork help',
        descriptiveName: 'Custom/Artwork Help - Get help with your art',
        category: 'Art',
        price: 30,
        description: "This option allows to recieve customized feedback and individual help with their art through a variey of mediums. Whether to get help for school or to improve personally, personalized help and instruction will be given to help students achieve their best work.",
        teacher: 'Tatyana',
        avatar: 'https://alapanbagchi.github.io/teducal/assets/img/tatiyana.jpg',
        banner: 'https://alapanbagchi.github.io/teducal/assets/img/course/custom-artwork-help.jpg'
    },
]

export default courses