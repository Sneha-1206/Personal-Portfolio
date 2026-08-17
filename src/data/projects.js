import compilerImg from '../assets/compiler.png';
import pickmyflickImg from '../assets/pickmyflick.png';
import gameEngineImg from '../assets/game-engine.png';
import spaceShooterImg from '../assets/space_shooter.png';
import tileMatchImg from '../assets/tile_match.png';
import typingImg from '../assets/typing.png';

export const projects = [
  {
    id: 'compiler-error-explainer',
    title: 'Compiler Error Explainer',
    description: 'An NLP-based web application that converts compiler errors into easy-to-understand explanations using Machine Learning, Sentence Transformers and Flask.',
    fullDescription: 'This project is an advanced NLP-based utility designed to bridge the gap between complex compiler feedback and beginner developers. It uses Sentence Transformers to perform semantic matching of error messages with a pre-indexed corpus of explanations. The backend is served via Flask, and it features real-time parsing, explanation synthesis, and suggested code corrections based on common coding slips.',
    techStack: ['NLP', 'Machine Learning', 'Sentence Transformers', 'Flask', 'Python', 'HTML/CSS'],
    image: compilerImg,
    link: 'https://github.com/Sneha-1206/Compiler-Error-Explainer-Using-NLP'
  },
  {
    id: 'pickmyflick',
    title: 'PickMyFlick',
    description: 'A collaborative movie recommendation platform that helps friends discover movies together through personalized recommendations and social features.',
    fullDescription: 'PickMyFlick is a social, collaborative movie recommendation engine designed to eliminate the "what should we watch tonight?" dilemma for groups. The application allows users to create viewing rooms, invite friends, aggregate individual movie preferences and ratings, and utilize a collaborative filtering recommendation algorithm to suggest top group-friendly films.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Collaborative Filtering', 'Socket.io'],
    image: pickmyflickImg,
    link: 'https://github.com/Sneha-1206/PickMyFlick'
  },
  {
    id: '2d-game-engine',
    title: '2D Game Engine',
    description: 'A Java-based 2D game engine featuring sprite rendering, collision detection, animation, input handling, and a reusable game loop for developing interactive games.',
    fullDescription: 'A custom, lightweight 2D game engine written from scratch in Java. It features an advanced fixed-timestep game loop, double-buffered graphics pipeline for tear-free sprite rendering, an AABB (Axis-Aligned Bounding Box) collision detection and resolution subsystem, frame-by-frame animation manager, and a customizable keyboard/mouse input dispatcher. This project serves as a showcase of core object-oriented software engineering principles.',
    techStack: ['Java', 'AWT/Swing', 'Object-Oriented Design', 'Collision Detection', 'Game Loop'],
    image: gameEngineImg,
    link: 'https://github.com/24CSB0B37/Neur'
  },
  {
    id: 'space-shooter',
    title: 'Space Shooter',
    description: 'Move the spaceship, shoot enemies and dodge asteroids. Made with JavaScript + Canvas.',
    fullDescription: 'An interactive arcade retro shooter game built using HTML5 Canvas and vanilla JavaScript. Features smooth frame-rate independent updates, sprite assets with animation sheets, sound effects integration, score tracking, responsive keyboard controls, and progressive difficulty settings.',
    techStack: ['HTML5 Canvas', 'JavaScript', 'Game Physics', 'Audio API', 'Local Storage'],
    image: spaceShooterImg,
    link: 'https://valeru-meghana.github.io/spaceshooter/'
  },
  {
    id: 'tile-puzzle',
    title: 'Tile Puzzle',
    description: 'Match tiles to solve the shuffled image puzzle. Timer and move counter included.',
    fullDescription: 'A classic 15-sliding tile puzzle implementation designed to test user logic and visual memory. Users can choose from multiple difficulty levels. The game features an active stopwatch, moves counter, grid shuffling validation algorithm (ensures solvable boards), and responsive animations.',
    techStack: ['JavaScript', 'CSS Grid', 'Solvability Theory', 'Responsive Animations'],
    image: tileMatchImg,
    link: 'https://valeru-meghana.github.io/tilematch/'
  },
  {
    id: 'typing-speed-test',
    title: 'Typing Speed Test',
    description: 'Test your typing speed in WPM. Accuracy and real-time feedback included.',
    fullDescription: 'A sleek, reactive web utility that calculates typing speed in Words Per Minute (WPM) and letter accuracy in real time. Built using raw event handling to capture keystrokes, identify typos on the fly, color-code matched text, and generate typing analytics.',
    techStack: ['JavaScript', 'HTML5', 'Event Listeners', 'WPM Analytics', 'CSS Custom Themes'],
    image: typingImg,
    link: 'https://valeru-meghana.github.io/Typingtest/'
  }
];
