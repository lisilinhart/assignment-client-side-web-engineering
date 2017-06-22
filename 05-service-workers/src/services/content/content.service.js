/**
* service.content Module
*
* Description
*/
angular.
    module('service.content').
    service('contentService', contentService);

function contentService () {
    this.testData = function () {
        return {
            skills: [
                {
                    skill: 'HTML',
                    percent: 66,
                    type: 'programming',
                    framework: false,
                    color: '#EE5F29'
                },
                {
                    skill: 'JavaScript',
                    percent: 73,
                    type: 'programming',
                    framework: false,
                    color: '#76B416'
                },
                {
                    skill: 'CSS',
                    percent: 70,
                    type: 'programming',
                    framework: false,
                    color: '#0086C7'
                },
                {
                    skill: 'PHP',
                    percent: 50,
                    type: 'programming',
                    framework: false,
                    color: '#7091CB'
                },
                {
                    skill: 'NodeJS',
                    percent: 62,
                    type: 'programming',
                    framework: false,
                    color: '#83cd29'
                },
                {
                    skill: 'Laravel',
                    percent: 40,
                    type: 'programming',
                    framework: true,
                    color: '#f4645f'
                },
                {
                    skill: 'AngularJS',
                    percent: 70,
                    type: 'programming',
                    framework: true,
                    color: '#f4645f'
                },
                {
                    skill: 'Lightroom',
                    percent: 68,
                    type: 'design',
                    framework: false,
                },
                {
                    skill: 'Photoshop',
                    percent: 40,
                    type: 'design',
                    framework: false,
                    color: '#2c3674'
                },
                {
                    skill: 'Illustrator',
                    percent: 21,
                    type: 'design',
                    framework: false,
                    color: '#ff9101'
                },
                {
                    skill: 'Sketch',
                    percent: 60,
                    type: 'design',
                    framework: false,
                    color: '#061524'
                },
            ], // /skills

            projects: [
                {
                    title: 'JPeer.at',
                    href: 'https://github.com/JPeer264/JPeer.at',
                    img: 'assets/img/github-logo.png',
                    tags: [
                        'wordpress',
                        'design',
                        'angular'
                    ],
                    cover: false
                },
                {
                    title: 'SchwarzKönig',
                    href: 'http://www.schwarz-koenig.at',
                    img: 'assets/img/projects/schwarzkoenig.png',
                    tags: [
                        'wordpress',
                        'design',
                        'deploy'
                    ],
                    cover: false
                },
                {
                    title: 'et-grunt',
                    href: 'https://github.com/JPeer264/et-grunt',
                    img: 'assets/img/github-logo.png',
                    tags: [
                        'nodejs',
                        'grunt'
                    ],
                    cover: false
                },
                {
                    title: 'hasten prototype',
                    href: 'https://github.com/JPeer264/hasten',
                    img: 'assets/img/github-logo.png',
                    tags: [
                        'nodejs'
                    ],
                    cover: false
                },
                {
                    title: 'Somnia',
                    href: '#http://somnia.jpeer.at/',
                    img: 'assets/img/projects/somnia.jpg',
                    tags: [
                        '48h project',
                        'design',
                        'concept',
                        'frontend'
                    ],
                    cover: false
                },
                {
                    title: 'Prazna Bikes',
                    href: 'http://www.prazna.at/',
                    img: 'assets/img/projects/prazna.jpg',
                    tags: [
                        'joomla',
                        'design'
                    ]
                },
                {
                    title: 'Volxpop',
                    href: 'http://www.volxpop-music.at/',
                    img: 'assets/img/projects/volxpop.jpg',
                    tags: [
                        'wordpress',
                        'design',
                        'concept'
                    ]
                },
                {
                    title: 'ProtonJS',
                    href: 'https://a-jie.github.io/Proton/',
                    img: 'assets/img/github-logo.png',
                    tags: [
                        'documentation'
                    ],
                    cover: false
                },
                {
                    title: 'Railroad Barcelona',
                    href: 'https://projects.jpeer.at/railroad/',
                    img: 'assets/img/projects/railroad.png',
                    tags: [
                        'angular',
                        'lumen',
                        'database',
                        'documentation',
                        'concept'
                    ],
                    cover: false
                }
            ], // /projects

            slider: [
               {
                    href: 'assets/img/slider/hoverfly.jpg',
                    alt: 'Hoverfly slider'
               },
               {
                    href: 'assets/img/slider/fish.jpg',
                    alt: 'Fish slider'
               }
            ] // /slider
        };
    };
}
