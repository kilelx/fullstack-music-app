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
    // {
    //     title: "Georgia On My Mind",
    //     author: "Ray Charles",
    //     image: "/images/ray-charles.jpg",
    //     file: "/audio/georgia-on-my-mind.mp3",
    // }
]