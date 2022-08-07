import { teachers } from '../data/teachers.js';

const courses = new Map()

courses.set('1', {
    title: "Value and Shapes for beginners",
    full_name: "Value and Shapes for Beginners - Learning how to apply the scale of value to shapes and objects",
    description: 'This course offers a basic introduction to the scale of value in art. Students will learn how to create light to dark hues through a pencil medium, use value in shapes and understand how light visually affects objects. Students will practice this concept through the creation of spheres, cylinders, and cones.',
    price: '$30',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890587/Tisoe/Courses/Values%20and%20Shapes%20for%20beginners.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('2', {
    title: "Landscapes",
    full_name: "Landscapes - Depicting realistic natural scenery",
    description: 'This course educates students on the concept of foreground, middleground and background in landscapes. Students will learn how to create an illusion of distance when portraying natural features.',
    price: '$20',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890725/Tisoe/Courses/Landscapes.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('3', {
    title: "Linear Perspective",
    full_name: "Linear Perspective - Understanding the illusion of depth",
    description: 'This course offers a basic introduction to the concept of sizing in art according to an objects position and distance from the eye. Students will learn about vanishing points and depth while applying this to their own art.',
    price: '$20',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890780/Tisoe/Courses/Linear%20Perspective.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('4', {
    title: "Portraits",
    full_name: "Landscapes - Depicting realistic natural scenery",
    description: 'This course offers an introduction to the proportions of the face including in depth instruction on how to depict realistic human features through a pencil medium. Students will learn how to apply light and depth to accurately depict face shapes, eyes, noses, mouths and hair cohesively.',
    price: '$30',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890875/Tisoe/Courses/Portrait.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('5', {
    title: "Animals",
    full_name: "Animals - Learning how to create realistic animals",
    description: 'The course offers an introduction to the proportions and shapes of animals and applies the principles of movement and light through pencil medium. Students will learn how to accurately and realistically depict animal characteristics',
    price: '$30',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890878/Tisoe/Courses/Animals.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})


courses.set('6', {
    title: "Custom/Artwork Help",
    full_name: "Custom/Artwork Help - Get help with your art",
    description: 'This option allows students to recieve customized feedback and individua help with their art through a variety of mediums. Whether to get help for school or to improve personally, personalized help and instruction will be given to help students achieve their best work.',
    price: '$30',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890947/Tisoe/Courses/Homework.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('7', {
    title: "Algebra 1 & Up",
    full_name: "Algebra 1 & Up",
    description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ',
    price: '$25',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659895829/Tisoe/Courses/Algaebra%201%20and%20Up.webp',
    instructor: teachers.get('rj_reiff'),
    topic: 'Mathematics'
})

courses.set('8', {
    title: "Pre-Algebra and Below",
    full_name: "Pre-Algebra and Below",
    description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ',
    price: '$20',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659895898/Tisoe/Courses/Pre%20algaebra.webp',
    instructor: teachers.get('rj_reiff'),
    topic: 'Mathematics'
})

courses.set('9', {
    title: "Abstract Math and Proofs",
    full_name: "Intro to Abstract Math and Proofs",
    description: 'This introduction to abstract math is an introduction to what "real" mathematicians do. This course will introduce logic, logical arguments, mathematical proofs, and concepts like infinity.This course is suitable for any curious students who have taken Algebra 1 (one full year of algebra).',
    price: '$20',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659896077/Tisoe/Courses/Abstract%20Math%20and%20Proof.avif',
    instructor: teachers.get('rj_reiff'),
    topic: 'Mathematics'
})

courses.set('10', {
    title: "Mandarin Chinese for the Beginners",
    full_name: "Mandarin Chinese for the Beginners-Laying a solid foundation and learning authentic and practical Chinese",
    description: "This course is for the complete beginners to Mandarin Chinese. In view of the basic and important role of Pinyin in Mandarin, the general knowledge of Pinyin will betaught in the first period, including the pronunciation of initials, finals, different tones,and the most common rules. Generally, 3.5 to 5 hours will be cost in this period, andyou could pronounce some simple monosyllabic and disyllabic words after learning.Then you move to the next period, and the HSK textbooks 1 to 3 are recommended asthe learning material. You will learn the most common-used words, phrases, sentencepatterns, characters, and some interesting knowledge of Chinese culture. Besides, considering Chinese is a tone language, the pronunciation practice is provided throughout the whole learning process.After this period's learning, you will master about 900 characters and over 2000 words, and your Chinese level will reach to B1, which means that you possess the basic communicative skills to live and travel in C",
    price: '$15',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659897242/Tisoe/Courses/Conversation%20practice.jpg',
    instructor: teachers.get('yishan'),
    topic: 'Language'
})

courses.set('11', {
    title: "Conversation Practice",
    full_name: "Conversation Practice - Enlarging Chinese vocabulary and completing grammar",
    description: 'This course is for the people who could speak some Chinese and hope to enlarge their Chinese vocabulary or improve their speaking. There are two learning patterns for you to choose, topic discussion and reading comprehension. The topics will be chosen according to your preference, and the subjects such as Chinese culture, history, folk customs, hot-spots, food, celebrities can all be involved. As for the reading comprehension, the reading materials will be selected based on your Chinese level, and every time after reading, different questions about the content will be asked, and different opinions will be talked about. By doing conversation practice, your Chinese vocabulary will be expanded and the grammar will be completed. Gradually, your communicational ability in Chinese will be developed',
    price: '$12',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659897306/Tisoe/Courses/mandarin%20for%20beginners.webp',
    instructor: teachers.get('yishan'),
    topic: 'Language'
})

courses.set('12', {
    title: "Homework Help",
    full_name: "Homework Help - Customized tutoring service to resolving your homework problems and your preference textbook",
    description: 'This course is for the people that have learned Chinese in school. Customized tutoring service will be provided to assist students with homework problems. This course is also suitable for the ones who hope to learn Chinese by using their preference textbooks.',
    price: '$12',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659897422/Tisoe/Courses/Chinese%20Homework.jpg',
    instructor: teachers.get('yishan'),
    topic: 'Language'
})

courses.set('13', {
    title: "Japanese reading and writing",
    full_name: " Japanese reading and writing (Hiragana, Katakana)",
    description: 'You will learn how to read hiragana and katakana with some words. After reading Hiragana and Katakana, let’s practice to write your name in Japanese.',
    price: '$20',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659899452/Tisoe/Courses/japanese%20Writing.webp',
    instructor: teachers.get('erina'),
    topic: 'Language'
})


courses.set('14', {
    title: "Japanese speaking",
    full_name: "Japanese speaking",
    description: 'You will learn how to start conversation. And let’s learn some phrases we frequently use. Also we can practice conversations in particular situations like an airport or restaurant.',
    price: '$12',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659899594/Tisoe/Courses/Japanese%20Speaking.webp',
    instructor: teachers.get('erina'),
    topic: 'Language'
})


export { courses }




