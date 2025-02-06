export interface Song {
    id: number;
    title: string;
    author: string;
    image: string;
    file: string;
    duration: number
}

export const songsData: Song[] = [
    {
        id: 1,
        title: "I got a woman",
        author: "Ray Charles",
        image: "/artists/ray-charles.jpg",
        file: "/audio/i-got-a-woman.mp3",
        duration: 175,
    },
    {
        id: 2,
        title: "Hit the Road Jack",
        author: "Ray Charles",
        image: "/artists/ray-charles.jpg",
        file: "/audio/hit-the-road-jack.mp3",
        duration: 122,
    },
    {
        id: 3,
        title: "I've got you under my skin",
        author: "Frank Sinatra",
        image: "/artists/frank-sinatra.jpg",
        file: "/audio/ive-got-you-under-my-skin.mp3",
        duration: 227,
    },
    {
        id: 4,
        title: "I wanna be loved by you",
        author: "Marylin Monroe",
        image: "/artists/marylin-monroe.jpg",
        file: "/audio/i-wanna-be-loved-by-you.mp3",
        duration: 177,
    },
    {
        id: 5,
        title: "What a wonderful world",
        author: "Louis Amrstrong",
        image: "/artists/louis-armstrong.jpg",
        file: "/audio/what-a-wonderful-world.mp3",
        duration: 149,
    },
    // {
    //     title: "Georgia On My Mind",
    //     author: "Ray Charles",
    //     image: "/images/ray-charles.jpg",
    //     file: "/audio/georgia-on-my-mind.mp3",
    // }
]