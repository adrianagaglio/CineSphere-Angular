import { Component } from '@angular/core';
import { iMovie } from '../interfaces/imovie';
import { iActor } from '../interfaces/iactor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  movies: iMovie[] = [
    {
      id: 1,
      title: 'Inception',
      description:
        'A skilled thief, the best in the dangerous art of extraction, steals secrets from within the subconscious during the dream state.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/43/9a/1c/439a1c4583a953c26b63d08a1d832f53.jpg',
        'https://i.pinimg.com/enabled_hi/564x/43/9a/1c/439a1c4583a953c26b63d08a1d832f53.jpg',
        'https://picfiles.alphacoders.com/469/thumb-1920-469354.jpg',
      ],
      year: 2010,
      director: 'Christopher Nolan',
      actors: [
        { name: 'Leonardo', surname: 'DiCaprio' },
        { name: 'Joseph', surname: 'Gordon-Levitt' },
        { name: 'Elliot', surname: 'Page' },
      ],
      genres: ['science fiction', 'thriller'],
      rates: [],
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/5f/fe/79/5ffe79003530da912a82acac80be1426.jpg',
        'https://i.pinimg.com/enabled_hi/564x/ea/a2/6e/eaa26e2c3bfa234c3cdd3c4d9fabad35.jpg',
        'https://images4.alphacoders.com/136/1360004.jpeg',
      ],
      year: 2008,
      director: 'Christopher Nolan',
      actors: [
        { name: 'Christian', surname: 'Bale' },
        { name: 'Heath', surname: 'Ledger' },
        { name: 'Aaron', surname: 'Eckhart' },
      ],
      genres: ['action', 'crime', 'drama'],
      rates: [],
    },
    {
      id: 3,
      title: 'Interstellar',
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg',
        'https://i.pinimg.com/enabled_hi/564x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg',
        'https://images6.alphacoders.com/590/thumb-1920-590933.jpg',
      ],
      year: 2014,
      director: 'Christopher Nolan',
      actors: [
        { name: 'Matthew', surname: 'McConaughey' },
        { name: 'Anne', surname: 'Hathaway' },
        { name: 'Jessica', surname: 'Chastain' },
      ],
      genres: ['science fiction', 'adventure', 'drama'],
      rates: [],
    },
    {
      id: 4,
      title: 'The Matrix',
      description:
        'A hacker discovers that the reality he lives in is a simulated reality created by machines, and joins a rebellion to overthrow them.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/18/d7/4e/18d74ef46e722828f75cca91b009f4a5.jpg',
        'https://i.pinimg.com/enabled_hi/564x/18/d7/4e/18d74ef46e722828f75cca91b009f4a5.jpg',
        'https://images7.alphacoders.com/135/thumb-1920-1356883.png',
      ],
      year: 1999,
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: [
        { name: 'Keanu', surname: 'Reeves' },
        { name: 'Laurence', surname: 'Fishburne' },
        { name: 'Carrie-Anne', surname: 'Moss' },
      ],
      genres: ['science fiction', 'action'],
      rates: [],
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      description:
        'The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg',
        'https://i.pinimg.com/enabled_hi/564x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg',
        'https://images2.alphacoders.com/132/thumb-1920-1324762.jpeg',
      ],
      year: 1994,
      director: 'Quentin Tarantino',
      actors: [
        { name: 'John', surname: 'Travolta' },
        { name: 'Uma', surname: 'Thurman' },
        { name: 'Samuel L.', surname: 'Jackson' },
      ],
      genres: ['crime', 'drama'],
      rates: [],
    },
    {
      id: 6,
      title: 'The Godfather',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/23/7e/ba/237eba645be9dcccf5d09f1e7037d5f3.jpg',
        'https://i.pinimg.com/enabled_hi/564x/23/7e/ba/237eba645be9dcccf5d09f1e7037d5f3.jpg',
        'https://images4.alphacoders.com/217/thumb-1920-217234.jpg',
      ],
      year: 1972,
      director: 'Francis Ford Coppola',
      actors: [
        { name: 'Marlon', surname: 'Brando' },
        { name: 'Al', surname: 'Pacino' },
        { name: 'James', surname: 'Caan' },
      ],
      genres: ['crime', 'drama'],
      rates: [],
    },
    {
      id: 7,
      title: 'Fight Club',
      description:
        'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/de/1b/80/de1b8002fd9024279fccc4ccc96f18f6.jpg',
        'https://i.pinimg.com/enabled_hi/564x/de/1b/80/de1b8002fd9024279fccc4ccc96f18f6.jpg',
        'https://images.alphacoders.com/535/thumb-1920-53563.jpg',
      ],
      year: 1999,
      director: 'David Fincher',
      actors: [
        { name: 'Brad', surname: 'Pitt' },
        { name: 'Edward', surname: 'Norton' },
        { name: 'Helena', surname: 'Bonham Carter' },
      ],
      genres: ['drama', 'thriller'],
      rates: [],
    },
    {
      id: 8,
      title: 'Forrest Gump',
      description:
        'The story of Forrest Gump, a man with low intelligence, whose accidental good fortune takes him through extraordinary events.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/13/98/2a/13982aedfb82420cbcf1b44f616539f4.jpg',
        'https://i.pinimg.com/enabled_hi/564x/13/98/2a/13982aedfb82420cbcf1b44f616539f4.jpg',
        'https://images.alphacoders.com/802/thumb-1920-802591.jpg',
      ],
      year: 1994,
      director: 'Robert Zemeckis',
      actors: [
        { name: 'Tom', surname: 'Hanks' },
        { name: 'Robin', surname: 'Wright' },
        { name: 'Gary', surname: 'Sinise' },
      ],
      genres: ['drama', 'romance'],
      rates: [],
    },
    {
      id: 9,
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg',
        'https://i.pinimg.com/enabled_hi/564x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg',
        'https://images5.alphacoders.com/338/thumb-1920-338840.jpg',
      ],
      year: 1994,
      director: 'Frank Darabont',
      actors: [
        { name: 'Tim', surname: 'Robbins' },
        { name: 'Morgan', surname: 'Freeman' },
        { name: 'Bob', surname: 'Gunton' },
      ],
      genres: ['drama'],
      rates: [],
    },
    {
      id: 10,
      title: 'Gladiator',
      description:
        'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/49/22/6c/49226cc2be5cb537218993fa89d075a8.jpg',
        'https://i.pinimg.com/enabled_hi/564x/49/22/6c/49226cc2be5cb537218993fa89d075a8.jpg',
        'https://artfiles.alphacoders.com/101/thumb-1920-101935.jpg',
      ],
      year: 2000,
      director: 'Ridley Scott',
      actors: [
        { name: 'Russell', surname: 'Crowe' },
        { name: 'Joaquin', surname: 'Phoenix' },
        { name: 'Connie', surname: 'Nielsen' },
      ],
      genres: ['action', 'drama', 'adventure'],
      rates: [],
    },
    {
      id: 11,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description:
        'A meek Hobbit and eight companions set out on a journey to destroy the One Ring and save Middle-earth.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/4d/8c/eb/4d8ceb7c6e967c8c7948475e43791a2b.jpg',
        'https://i.pinimg.com/enabled_hi/564x/4d/8c/eb/4d8ceb7c6e967c8c7948475e43791a2b.jpg',
        'https://images7.alphacoders.com/434/thumb-1920-434809.jpg',
      ],
      year: 2001,
      director: 'Peter Jackson',
      actors: [
        { name: 'Elijah', surname: 'Wood' },
        { name: 'Ian', surname: 'McKellen' },
        { name: 'Orlando', surname: 'Bloom' },
      ],
      genres: ['fantasy', 'adventure'],
      rates: [],
    },
    {
      id: 12,
      title: 'The Silence of the Lambs',
      description:
        'A young FBI cadet must confide in an incarcerated and manipulative killer to help catch another serial killer.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/50/8e/3e/508e3ee54eea242f5c80e80837bb4c45.jpg',
        'https://i.pinimg.com/enabled_hi/564x/50/8e/3e/508e3ee54eea242f5c80e80837bb4c45.jpg',
        'https://images7.alphacoders.com/340/thumb-1920-340960.jpg',
      ],
      year: 1991,
      director: 'Jonathan Demme',
      actors: [
        { name: 'Jodie', surname: 'Foster' },
        { name: 'Anthony', surname: 'Hopkins' },
        { name: 'Lawrence A.', surname: 'Bonney' },
      ],
      genres: ['thriller', 'crime', 'drama'],
      rates: [],
    },
    {
      id: 13,
      title: 'Saving Private Ryan',
      description:
        'In the midst of World War II, a group of U.S. soldiers must retrieve a paratrooper whose brothers have been killed in action.',
      coverImage: [
        'https://i.pinimg.com/236x/26/2e/40/262e405482be6b7383d59ece8e677242.jpg',
        'https://i.pinimg.com/564x/26/2e/40/262e405482be6b7383d59ece8e677242.jpg',
        'https://images7.alphacoders.com/133/thumb-1920-1330047.jpeg',
      ],
      year: 1998,
      director: 'Steven Spielberg',
      actors: [
        { name: 'Tom', surname: 'Hanks' },
        { name: 'Matt', surname: 'Damon' },
        { name: 'Tom', surname: 'Sizemore' },
      ],
      genres: ['war', 'drama', 'action'],
      rates: [],
    },
    {
      id: 14,
      title: 'Jurassic Park',
      description:
        'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/3d/48/8a/3d488a47ecb36ae33375f787a857b74c.jpg',
        'https://i.pinimg.com/enabled_hi/564x/3d/48/8a/3d488a47ecb36ae33375f787a857b74c.jpg',
        'https://images7.alphacoders.com/564/thumb-1920-564248.png',
      ],
      year: 1993,
      director: 'Steven Spielberg',
      actors: [
        { name: 'Sam', surname: 'Neill' },
        { name: 'Laura', surname: 'Dern' },
        { name: 'Jeff', surname: 'Goldblum' },
      ],
      genres: ['adventure', 'sci-fi', 'thriller'],
      rates: [],
    },
    {
      id: 15,
      title: 'Titanic',
      description:
        'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/79/4d/9a/794d9ab3e478ef693d0e08f3d4388c96.jpg',
        'https://i.pinimg.com/enabled_hi/564x/79/4d/9a/794d9ab3e478ef693d0e08f3d4388c96.jpg',
        'https://images4.alphacoders.com/223/thumb-1920-223196.jpg',
      ],
      year: 1997,
      director: 'James Cameron',
      actors: [
        { name: 'Leonardo', surname: 'DiCaprio' },
        { name: 'Kate', surname: 'Winslet' },
        { name: 'Billy', surname: 'Zane' },
      ],
      genres: ['drama', 'romance', 'history'],
      rates: [],
    },
    {
      id: 16,
      title: 'Avatar',
      description:
        'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/5e/3e/06/5e3e06e2328ed4b5f78d0deec5aa1d0f.jpg',
        'https://i.pinimg.com/enabled_hi/564x/5e/3e/06/5e3e06e2328ed4b5f78d0deec5aa1d0f.jpg',
        'https://images6.alphacoders.com/439/thumb-1920-439052.jpg',
      ],
      year: 2009,
      director: 'James Cameron',
      actors: [
        { name: 'Sam', surname: 'Worthington' },
        { name: 'Zoe', surname: 'Saldana' },
        { name: 'Sigourney', surname: 'Weaver' },
      ],
      genres: ['science fiction', 'action', 'adventure'],
      rates: [],
    },
    {
      id: 17,
      title: 'The Social Network',
      description:
        'As Harvard students create the social networking site that would become known as Facebook, they feud with each other and with the law.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg',
        'https://i.pinimg.com/enabled_hi/564x/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg',
        'https://images6.alphacoders.com/353/thumb-1920-353685.jpg',
      ],
      year: 2010,
      director: 'David Fincher',
      actors: [
        { name: 'Jesse', surname: 'Eisenberg' },
        { name: 'Andrew', surname: 'Garfield' },
        { name: 'Justin', surname: 'Timberlake' },
      ],
      genres: ['biography', 'drama'],
      rates: [],
    },
    {
      id: 18,
      title: "Schindler's List",
      description:
        'In German-occupied Poland during World War II, industrialist Oskar Schindler saves the lives of more than a thousand Jewish refugees.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/16/dc/f0/16dcf03b7244c896d4c149b250913f0f.jpg',
        'https://i.pinimg.com/enabled_hi/564x/16/dc/f0/16dcf03b7244c896d4c149b250913f0f.jpg',
        'https://images3.alphacoders.com/626/thumb-1920-626354.jpg',
      ],
      year: 1993,
      director: 'Steven Spielberg',
      actors: [
        { name: 'Liam', surname: 'Neeson' },
        { name: 'Ben', surname: 'Kingsley' },
        { name: 'Ralph', surname: 'Fiennes' },
      ],
      genres: ['biography', 'drama', 'history'],
      rates: [],
    },
    {
      id: 19,
      title: 'The Lion King',
      description:
        'Lion cub and future king Simba flees his kingdom after the death of his father, but returns as an adult to reclaim his throne.',
      coverImage: [
        'https://i.pinimg.com/236x/fd/0c/44/fd0c44fd41b80385b1a21999a42195f9.jpg',
        'https://i.pinimg.com/564x/fd/0c/44/fd0c44fd41b80385b1a21999a42195f9.jpg',
        'https://images.alphacoders.com/901/thumb-1920-901621.jpg',
      ],
      year: 1994,
      director: 'Roger Allers, Rob Minkoff',
      actors: [
        { name: 'Matthew', surname: 'Broderick' },
        { name: 'James', surname: 'Earl Jones' },
        { name: 'Jeremy', surname: 'Irons' },
      ],
      genres: ['animation', 'adventure', 'drama'],
      rates: [],
    },
    {
      id: 20,
      title: 'Star Wars: A New Hope',
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and two droids to save the galaxy from the Empire's world-destroying battle station.",
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/4e/c7/d4/4ec7d4eb64eee96ab5f34ec9d96f8273.jpg',
        'https://i.pinimg.com/enabled_hi/564x/4e/c7/d4/4ec7d4eb64eee96ab5f34ec9d96f8273.jpg',
        'https://images2.alphacoders.com/523/thumb-1920-523274.jpg',
      ],
      year: 1977,
      director: 'George Lucas',
      actors: [
        { name: 'Mark', surname: 'Hamill' },
        { name: 'Harrison', surname: 'Ford' },
        { name: 'Carrie', surname: 'Fisher' },
      ],
      genres: ['science fiction', 'adventure'],
      rates: [],
    },
    {
      id: 21,
      title: 'The Godfather Part II',
      description:
        'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      coverImage: [
        'https://i.pinimg.com/236x/e5/9b/cc/e59bccfece0b81592e33c23f5a8f012b.jpg',
        'https://i.pinimg.com/564x/e5/9b/cc/e59bccfece0b81592e33c23f5a8f012b.jpg',
        'https://images6.alphacoders.com/617/thumb-1920-617286.jpg',
      ],
      year: 1974,
      director: 'Francis Ford Coppola',
      actors: [
        { name: 'Al', surname: 'Pacino' },
        { name: 'Robert', surname: 'De Niro' },
        { name: 'Robert', surname: 'Duvall' },
      ],
      genres: ['crime', 'drama'],
      rates: [],
    },
    {
      id: 22,
      title: 'The Departed',
      description:
        'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/f2/47/75/f2477527d8e2412aa9a84cfda5e4e30f.jpg',
        'https://i.pinimg.com/enabled_hi/736x/f2/47/75/f2477527d8e2412aa9a84cfda5e4e30f.jpg',
        'https://images4.alphacoders.com/131/thumb-1920-1317836.jpg',
      ],
      year: 2006,
      director: 'Martin Scorsese',
      actors: [
        { name: 'Leonardo', surname: 'DiCaprio' },
        { name: 'Matt', surname: 'Damon' },
        { name: 'Jack', surname: 'Nicholson' },
      ],
      genres: ['crime', 'drama', 'thriller'],
      rates: [],
    },
    {
      id: 23,
      title: 'Goodfellas',
      description:
        'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/40/7f/ba/407fbabc044a23cfbf19f3d32206d013.jpg',
        'https://i.pinimg.com/enabled_hi/564x/40/7f/ba/407fbabc044a23cfbf19f3d32206d013.jpg',
        'https://images7.alphacoders.com/341/thumb-1920-341191.jpg',
      ],
      year: 1990,
      director: 'Martin Scorsese',
      actors: [
        { name: 'Ray', surname: 'Liotta' },
        { name: 'Robert', surname: 'De Niro' },
        { name: 'Joe', surname: 'Pesci' },
      ],
      genres: ['crime', 'drama', 'biography'],
      rates: [],
    },
    {
      id: 24,
      title: 'The Prestige',
      description:
        'In the end, the rivalry between two magicians leads to obsession and murder.',
      coverImage: [
        'https://i.pinimg.com/236x/4c/91/6e/4c916efb190643a7946f9a41630f0e4b.jpg',
        'https://i.pinimg.com/564x/4c/91/6e/4c916efb190643a7946f9a41630f0e4b.jpg',
        'https://images8.alphacoders.com/520/thumb-1920-520885.jpg',
      ],
      year: 2006,
      director: 'Christopher Nolan',
      actors: [
        { name: 'Christian', surname: 'Bale' },
        { name: 'Hugh', surname: 'Jackman' },
        { name: 'Michael', surname: 'Caine' },
      ],
      genres: ['drama', 'mystery', 'thriller'],
      rates: [],
    },
    {
      id: 25,
      title: '12 Angry Men',
      description:
        'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
      coverImage: [
        'https://i.pinimg.com/enabled_hi/236x/ca/38/da/ca38dacb6584c1eb204b052b6ee796cf.jpg',
        'https://i.pinimg.com/enabled_hi/564x/ca/38/da/ca38dacb6584c1eb204b052b6ee796cf.jpg',
        'https://images6.alphacoders.com/342/thumb-1920-342216.jpg',
      ],
      year: 1957,
      director: 'Sidney Lumet',
      actors: [
        { name: 'Henry', surname: 'Fonda' },
        { name: 'Lee', surname: 'Cobb' },
        { name: 'Ed', surname: 'Begley' },
      ],
      genres: ['drama'],
      rates: [],
    },
  ];

  actors: Partial<iActor>[] = [
    { name: 'Jack', surname: 'Nicholson' },
    { name: 'Robert', surname: 'Duvall' },
    { name: 'Sam', surname: 'Worthington' },
    { name: 'Leonardo', surname: 'DiCaprio' },
    { name: 'Joseph', surname: 'Gordon-Levitt' },
    { name: 'Elliot', surname: 'Page' },
    { name: 'Christian', surname: 'Bale' },
    { name: 'Heath', surname: 'Ledger' },
    { name: 'Aaron', surname: 'Eckhart' },
    { name: 'Matthew', surname: 'McConaughey' },
    { name: 'Anne', surname: 'Hathaway' },
    { name: 'Jessica', surname: 'Chastain' },
    { name: 'Keanu', surname: 'Reeves' },
    { name: 'Laurence', surname: 'Fishburne' },
    { name: 'Carrie-Anne', surname: 'Moss' },
    { name: 'John', surname: 'Travolta' },
    { name: 'Uma', surname: 'Thurman' },
    { name: 'Samuel', surname: 'Jackson' },
    { name: 'Marlon', surname: 'Brando' },
    { name: 'Al', surname: 'Pacino' },
    { name: 'James', surname: 'Caan' },
    { name: 'Brad', surname: 'Pitt' },
    { name: 'Edward', surname: 'Norton' },
    { name: 'Helena', surname: 'Bonham Carter' },
    { name: 'Tom', surname: 'Hanks' },
    { name: 'Robin', surname: 'Wright' },
    { name: 'Gary', surname: 'Sinise' },
    { name: 'Tim', surname: 'Robbins' },
    { name: 'Morgan', surname: 'Freeman' },
    { name: 'Bob', surname: 'Gunton' },
    { name: 'Russell', surname: 'Crowe' },
    { name: 'Joaquin', surname: 'Phoenix' },
    { name: 'Connie', surname: 'Nielsen' },
    { name: 'Elijah', surname: 'Wood' },
    { name: 'Ian', surname: 'McKellen' },
    { name: 'Orlando', surname: 'Bloom' },
    { name: 'Jodie', surname: 'Foster' },
    { name: 'Anthony', surname: 'Hopkins' },
    { name: 'Lawrence', surname: 'Bonney' },
    { name: 'Matt', surname: 'Damon' },
    { name: 'Tom', surname: 'Sizemore' },
    { name: 'Sam', surname: 'Neill' },
    { name: 'Laura', surname: 'Dern' },
    { name: 'Jeff', surname: 'Goldblum' },
    { name: 'Kate', surname: 'Winslet' },
    { name: 'Billy', surname: 'Zane' },
    { name: 'Zoe', surname: 'Saldana' },
    { name: 'Sigourney', surname: 'Weaver' },
    { name: 'Jesse', surname: 'Eisenberg' },
    { name: 'Andrew', surname: 'Garfield' },
    { name: 'Justin', surname: 'Timberlake' },
    { name: 'Liam', surname: 'Neeson' },
    { name: 'Ben', surname: 'Kingsley' },
    { name: 'Ralph', surname: 'Fiennes' },
    { name: 'Matthew', surname: 'Broderick' },
    { name: 'James', surname: 'Earl Jones' },
    { name: 'Jeremy', surname: 'Irons' },
    { name: 'Mark', surname: 'Hamill' },
    { name: 'Harrison', surname: 'Ford' },
    { name: 'Carrie', surname: 'Fisher' },
    { name: 'Robert', surname: 'De Niro' },
    { name: 'Ray', surname: 'Liotta' },
    { name: 'Joe', surname: 'Pesci' },
    { name: 'Hugh', surname: 'Jackman' },
    { name: 'Michael', surname: 'Caine' },
    { name: 'Henry', surname: 'Fonda' },
    { name: 'Lee', surname: 'Cobb' },
    { name: 'Ed', surname: 'Begley' },
  ];

  load() {
    for (let i = 0; i < this.movies.length; i++) {
      let movie: iMovie = this.movies[i];
      fetch('http://localhost:8000/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      })
        .then((response) => {
          console.log(response);
        })
        .then((response) => {
          console.log(response);
        });
    }
  }

  loadActors() {
    for (let i = 0; i < this.actors.length; i++) {
      let actor: Partial<iActor> = this.actors[i];
      fetch('http://localhost:8000/actors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(actor),
      })
        .then((res) => console.log(res))
        .then((response) => console.log(response));
    }
  }
}
