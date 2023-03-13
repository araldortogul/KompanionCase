import { createServer, Model, Registry, Server } from "miragejs"
import { AnyFactories, AnyModels } from "miragejs/-types";

export let server: Server<Registry<AnyModels, AnyFactories>>;

// Mock API for development purposes
// -- Provided by miragejs


const data = [
    {
        username: "user1",
        date: "2023-03-12T20:30:53",
        likes: 26,
        comments: 4,
        content: [
            "https://lp-cms-production.imgix.net/features/2017/09/RS-shutterstock_314150237-2cae9a76a618.jpg",
            "https://www.zuerich.com/sites/default/files/styles/1920_1244_focal_scale_crop/public/frontpage/web_zurich_viewport_scheffold-icon1_1600x900_03.jpg?h=1597416073"
        ]
    },
    {
        username: "user1",
        date: "2023-03-12T15:23:11",
        likes: 123,
        comments: 12,
        content: [
            "https://static01.nyt.com/images/2018/10/19/obituaries/19GULER2/merlin_145480005_cf1eac94-240d-4ac5-bb43-81d93131c51f-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            "https://live.staticflickr.com/2579/3995178982_ed812c9330_b.jpg"
        ]
    },
    {
        username: "user1",
        date: "2023-03-11T18:25:01",
        likes: 3029,
        comments: 5,
        content: [
            "https://yolgunlukleri.net/wp-content/uploads/2020/06/Kapadokya-_-Nevşehir.jpg",
            "https://i4.hurimg.com/i/hurriyet/75/1110x740/59e9ad147152d83b24393916.jpg"
        ]
    },
    {
        username: "user1",
        date: "2023-03-11T14:14:54",
        likes: 155,
        comments: 10,
        content: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
        username: "user1",
        date: "2023-03-10T11:43:01",
        likes: 178,
        comments: 9,
        content: [
            "https://images.pexels.com/photos/2880504/pexels-photo-2880504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/2668725/pexels-photo-2668725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ]
    },
    {
        username: "user1",
        date: "2023-03-10T08:22:11",
        likes: 294,
        comments: 25,
        content: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        username: "user1",
        date: "2023-03-09T15:32:59",
        likes: 102,
        comments: 6,
        content: [
            "https://lp-cms-production.imgix.net/features/2017/09/RS-shutterstock_314150237-2cae9a76a618.jpg",
            "https://www.zuerich.com/sites/default/files/styles/1920_1244_focal_scale_crop/public/frontpage/web_zurich_viewport_scheffold-icon1_1600x900_03.jpg?h=1597416073"
        ]
    },
    {
        username: "user1",
        date: "2023-03-09T12:54:32",
        likes: 324,
        comments: 10,
        content: "https://images.all-free-download.com/footage_preview/mp4/closeup_of_wild_butterfly_in_nature_6891908.mp4"
    },
    {
        username: "user1",
        date: "2023-03-08T20:57:29",
        likes: 112,
        comments: 7,
        content: [
            "https://sample-videos.com/img/Sample-jpg-image-10mb.jpg",
            "https://www.zuerich.com/sites/default/files/styles/1920_1244_focal_scale_crop/public/frontpage/web_zurich_viewport_scheffold-icon1_1600x900_03.jpg?h=1597416073"
        ]
    },
    {
        username: "user1",
        date: "2023-03-08T19:43:11",
        likes: 32,
        comments: 4,
        content: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
]

const search = [
    ...data,
    {
        username: "user1",
        date: "2023-03-08T19:43:11",
        likes: 32,
        comments: 4,
        content: [
            "https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
            "https://images.unsplash.com/photo-1594476664296-8c552053aef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        ]
    },
    {
        username: "user1",
        date: "2023-03-08T19:43:11",
        likes: 32,
        comments: 4,
        content: [
            "https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
            
        ]
    },
    {
        username: "user1",
        date: "2023-03-08T19:43:11",
        likes: 32,
        comments: 4,
        content: [
            "https://images.unsplash.com/photo-1594476664296-8c552053aef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        ]
    },
    {
        username: "user1",
        date: "2023-03-08T19:43:11",
        likes: 32,
        comments: 4,
        content: [
            "https://images.unsplash.com/photo-1551368321-dddf8a05c459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
            "https://images.unsplash.com/photo-1588815375466-e7d21013ddd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
        ]
    },
    {
        username: "user1",
        date: "2023-03-08T19:43:11",
        likes: 32,
        comments: 4,
        content: [
            "https://images.unsplash.com/photo-1607550771570-047519cab086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
            "https://images.unsplash.com/photo-1534175262708-ebf71ac916c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        ]
    },
    {
        username: "user1",
        date: "2023-03-08T19:43:11",
        likes: 32,
        comments: 4,
        content: [
            "https://images.unsplash.com/photo-1565281591019-d39b86984487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
            "https://images.unsplash.com/photo-1614359197212-e7f9abde6e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        ]
    }
]

export const mockAPI: (environment?: ("development" | "test")) => Server<Registry<AnyModels, AnyFactories>> = (environment="development") => {
    if (server) {
        server.shutdown()
    }

    server = createServer({
        environment: environment,

        routes() {
            this.namespace = "api"
            this.timing = 1000
            this.post("/login", (schema, request) => {
                return ({
                    info: "success"
                })
            })
            this.get("/search", () => {
                return search
            })
            this.get("/posts", () => {
                return data
            },
                { timing: 300 }
            )
        },
    })
    return server;
}