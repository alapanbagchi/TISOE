import { teachers } from '../data/teachers.js';

const courses = new Map()

courses.set('Value and Shapes for beginners', {
    title: "Value and Shapes for beginners",
    full_name: "Value and Shapes for Beginners - Learning how to apply the scale of value to shapes and objects",
    description: 'This course offers a basic introduction to the scale of value in art. Students will learn how to create light to dark hues through a pencil medium, use value in shapes and understand how light visually affects objects. Students will practice this concept through the creation of spheres, cylinders, and cones.',
    price: '$30',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890587/Tisoe/Courses/Values%20and%20Shapes%20for%20beginners.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('Landscapes', {
    title: "Landscapes",
    full_name: "Landscapes - Depicting realistic natural scenery",
    description: 'This course educates students on the concept of foreground, middleground and background in landscapes. Students will learn how to create an illusion of distance when portraying natural features.',
    price: '$20',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890725/Tisoe/Courses/Landscapes.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('Linear Perspective', {
    title: "Linear Perspective",
    full_name: "Linear Perspective - Understanding the illusion of depth",
    description: 'This course offers a basic introduction to the concept of sizing in art according to an objects position and distance from the eye. Students will learn about vanishing points and depth while applying this to their own art.',
    price: '$20',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890780/Tisoe/Courses/Linear%20Perspective.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('Portraits', {
    title: "Portraits",
    full_name: "Landscapes - Depicting realistic natural scenery",
    description: 'This course offers an introduction to the proportions of the face including in depth instruction on how to depict realistic human features through a pencil medium. Students will learn how to apply light and depth to accurately depict face shapes, eyes, noses, mouths and hair cohesively.',
    price: '$30',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890875/Tisoe/Courses/Portrait.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('Animals', {
    title: "Animals",
    full_name: "Animals - Learning how to create realistic animals",
    description: 'The course offers an introduction to the proportions and shapes of animals and applies the principles of movement and light through pencil medium. Students will learn how to accurately and realistically depict animal characteristics',
    price: '$30',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890878/Tisoe/Courses/Animals.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})


courses.set('Custom/Artwork Help', {
    title: "Custom/Artwork Help",
    full_name: "Custom/Artwork Help - Get help with your art",
    description: 'This option allows students to recieve customized feedback and individua help with their art through a variety of mediums. Whether to get help for school or to improve personally, personalized help and instruction will be given to help students achieve their best work.',
    price: '$30',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890947/Tisoe/Courses/Homework.webp',
    instructor: teachers.get('tatyana_iliev'),
    topic: 'Art and Design'
})

courses.set('Algebra 1 and Up', {
    title: "Algebra 1 & Up",
    full_name: "Algebra 1 & Up",
    description: '',
    price: '$25',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890947/Tisoe/Courses/Homework.webp',
    instructor: teachers.get('rj_reiff'),
    topic: 'Mathematics'
})

courses.set('Pre-Algebra and below', {
    title: "Pre-Algebra and below",
    full_name: "Pre-Algebra and below",
    description: '',
    price: '$20',
    image: 'https://res.cloudinary.com/alapanbagchi/image/upload/v1659890947/Tisoe/Courses/Homework.webp',
    instructor: teachers.get('rj_reiff'),
    topic: 'Mathematics'
})


export { courses }




