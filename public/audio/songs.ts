interface Song {
    title: string;
    author: string;
    image: string;
    file: string;
}

export const songsData: Song[] = [
    {
        title: "I got a woman",
        author: "Ray Charles",
        image: "/artists/ray-charles.jpg",
        file: "/audio/i-got-a-woman.mp3",
    },
    {
        title: "Hit the Road Jack",
        author: "Ray Charles",
        image: "/artists/ray-charles.jpg",
        file: "/audio/hit-the-road-jack.mp3",
    },
    // {
    //     title: "Georgia On My Mind",
    //     author: "Ray Charles",
    //     image: "/images/ray-charles.jpg",
    //     file: "/audio/georgia-on-my-mind.mp3",
    // }
]