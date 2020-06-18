export class Items{
    constructor(
        public id: number,
        public type: string,
        public title: string,
        public subtitle: string,
        public slugname: string,
        public tags: string,
        public shortDesc: string,
        public txt: string,
        public headingImg: string,
        public link: string,
        public otherImg: any
    ){}
}

export const ITEMS: Items[] = [
    {
        "id": 1,
        "type": "graphic-design",
        "title": "GizmoSphere Infographic",
        "subtitle": "Which DIY development board is right for me?",
        "slugname": "gizmosphere-infographic",
        "tags": "infographic, GizmoSphere, DIY Development",
        "shortDesc": "Simple and clean informational infographic design for GizmoSphere.",
        "txt": "Where innovative DIY embedded developers come to play and exchange ideas about GizmoSphere open source designs.",
        "headingImg": "../assets/img/works/gizmosphere-infographic-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/gizmosphere-infographic.jpg"}
        ]
    },
    {
        "id": 2,
        "type": "graphic-design",
        "title": "AMD Liquid VR Infographic",
        "subtitle": "30 Days of AMD Liquid VR",
        "slugname": "amd-vr-infographic",
        "tags": "infographic, AMD, Liquid VR",
        "shortDesc": "Statistical infographic for AMD Liquid VR",
        "txt": "AMD's pioneering virtual reality technology LiquidVR™ is breaking new ground with advanced features designed to deliver stunning content, advanced comfort, and effortless compatibility.",
        "headingImg": "../assets/img/works/amd-vr-infographic-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/amd-vr-infographic.jpg"}
        ]
    },
    {
        "id": 3,
        "type": "graphic-design",
        "title": "NBG Leasing",
        "subtitle": "Things Are Possible!",
        "slugname": "nbg-leasing-posters",
        "tags": "posters, banners, NBG Leasing, Mercedes-Benz",
        "shortDesc": "Series of posters and online banners for NBG Leasing",
        "txt": "NBG LEASING was founded in 2003, having as object of activity the financing in system of financial and operational leasing of motor vehicles, equipment and buildings.",
        "headingImg": "../assets/img/works/nbg-leasing-posters-heading.png",
        "link": "",
        "otherImg": [
            {"img": "assets/img/works/nbg-leasing-posters-1.jpg"},
            {"img": "../assets/img/works/nbg-leasing-posters-2.jpg"},
            {"img": "../assets/img/works/nbg-leasing-posters-3.jpg"},
            {"img": "../assets/img/works/nbg-leasing-posters-4.jpg"},
            {"img": "../assets/img/works/nbg-leasing-posters-5.jpg"}
        ]
    },
    {
        "id": 4,
        "type": "graphic-design",
        "title": "Turkey Home",
        "subtitle": "4th Turkish film festival",
        "slugname": "turkish-film-festival",
        "tags": "poster, film festival, Turkey",
        "shortDesc": "Poster design for 4th Turkish film festival",
        "txt": "Turkey Home is a country branding project of Turkey by courtesy of Turkish Ministry of Culture and Tourism.",
        "headingImg": "../assets/img/works/tcto-poster-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/tcto-poster.png"}
        ]
    },
    {
        "id": 5,
        "type": "graphic-design",
        "title": "BC Red Star",
        "subtitle": "Season ticket design",
        "slugname": "red-star-season-ticket",
        "tags": "season ticket, sport, basketball, BC Red Star",
        "shortDesc": "Two design of season ticket for BC Red Star Belgrade",
        "txt": "BC Red Star (Crvena zvezda), is a men's professional basketball club based in Belgrade, Serbia, the major part of the Red Star multi-sports club. The club is a founding member and shareholder of the Adriatic Basketball Association, and competes in the ABA League, the EuroLeague and in the Basketball League of Serbia.",
        "headingImg": "../assets/img/works/red-star-season-ticket-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/red-star-season-ticket-1.png"},
            {"img": "../assets/img/works/red-star-season-ticket-2.png"}
        ]
    },
    {
        "id": 6,
        "type": "graphic-design",
        "title": "AMD Infographic",
        "subtitle": "The Family that Plays Together: A History of Family Entertainment Technology",
        "slugname": "history-od-family-entertainment-tech-amd-infographic",
        "tags": "timeline infographic, entertainment tech",
        "shortDesc": "Timeline infographic for a AMD",
        "txt": "AMD's pioneering virtual reality technology LiquidVR™ is breaking new ground with advanced features designed to deliver stunning content, advanced comfort, and effortless compatibility.",
        "headingImg": "../assets/img/works/amd-family-infographic-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/amd-family-infographic.jpg"}
        ]
    },
    {
        "id": 7,
        "type": "graphic-design",
        "title": "AMD Infographic",
        "subtitle": "Energy Efficient Infographic",
        "slugname": "energy-efficient-infographic",
        "tags": "infographic, energy efficient, AMD",
        "shortDesc": "Enought electricity saving infographic for AMD",
        "txt": "Developing energy efficient processors has long been a design focus at AMD. We set a bold goal in 2014 to deliver at least 25X more energy efficiency by the year 2020 with processors that combine powerful processor and graphics cores in a single chip.",
        "headingImg": "../assets/img/works/amd-energy-infographic-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/amd-energy-infographic.jpg"}
        ]
    },
    {
        "id": 8,
        "type": "web-design",
        "title": "Invictus",
        "subtitle": "Invictus Website Design",
        "slugname": "invictus-website-ui-design",
        "tags": "UI design, sport club, kickbox, crossfit, Invictus",
        "shortDesc": "Website design for Sport Club Invictus",
        "txt": "Invictus - Kickbox and Crossfit club from Belgrade, Serbia. Invictus vision is to teach as many people as possible to achieve perfect satisfaction with their bodies and fitness through proper and natural exercise.",
        "headingImg": "../assets/img/works/invictus-webdesign-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/invictus-webdesign-1.jpg"},
            {"img": "../assets/img/works/invictus-webdesign-2.jpg"}
        ]
    },
    {
        "id": 9,
        "type": "web-design",
        "title": "Vlasina water",
        "subtitle": "Vlasina Website Design",
        "slugname": "vlasina-website-ui-design",
        "tags": "UI design, water, health, rebranding, Vlasina",
        "shortDesc": "Website design for Vlasina water - vlasinawater.com",
        "txt": "Vlasina Water was founded in 2009. The bottling facility covering an area of 1,000m2 is located in southeast Serbia in the village of Preslap, the municipality of Crna Trava.It employs 10 workers in two modern production lines: 0.33l-5L PET bottle lines and a line for washing and filling 18.9L polycarbonate bottles. ",
        "headingImg": "../assets/img/works/vlasina-webdesign-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/vlasina-webdesign-1.jpg"},
            {"img": "../assets/img/works/vlasina-webdesign-2.jpg"}
        ]
    },
    {
        "id": 10,
        "type": "web-design",
        "title": "Gataric",
        "subtitle": "Gatarić Website Design",
        "slugname": "gataric-website-ui-design",
        "tags": "UI design, website, Gataric",
        "shortDesc": "The Gatarić Company website design",
        "txt": "Gataric is a leader in the production and distribution of office and school supplies and equipment. To stand ahead, to see further, to have a vision and a clear concept, to be inspired, creative and persevering, to work devotedly, to be a leader and clearly stand out and offer more… With a mission that suggests a new beginning, and a commitment to place new starting points and business standards – achieving the envisaged goals and generating new ideas for the future and for generations to come for the past 25 years.",
        "headingImg": "../assets/img/works/gataric-webdesign-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/gataric-webdesign-1.jpg"},
            {"img": "../assets/img/works/gataric-webdesign-2.jpg"}
        ]
    },
    {
        "id": 11,
        "type": "web-design",
        "title": "Portfolio design",
        "subtitle": "Personal portfolio design",
        "slugname": "personal-portfolio-design",
        "tags": "portfolio, my works, design",
        "shortDesc": "Personal portfolio design",
        "txt": "Webdesign for personal portfolio site",
        "headingImg": "../assets/img/works/portfolio-webdesign-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/portfolio-webdesign-1.jpg"},
            {"img": "../assets/img/works/portfolio-webdesign-2.jpg"},
            {"img": "../assets/img/works/portfolio-webdesign-3.jpg"},
            {"img": "../assets/img/works/portfolio-webdesign-4.jpg"}
        ]
    },
    {
        "id": 12,
        "type": "web-development",
        "title": "Invictus",
        "subtitle": "Invictus Web Development",
        "slugname": "invictus-web-development",
        "tags": "HTML, CSS, Bootstrap 3, Javascript, jQuery",
        "shortDesc": "Website for Sport Club Invictus - invictus-sportskiklub.com",
        "txt": "Invictus - Kickbox and Crossfit club from Belgrade, Serbia. Invictus vision is to teach as many people as possible to achieve perfect satisfaction with their bodies and fitness through proper and natural exercise.",
        "headingImg": "../assets/img/works/invictus-development-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/invictus-development.jpg"},
        ]
    },
    {
        "id": 13,
        "type": "web-development",
        "title": "Unlimited / AltusHost",
        "subtitle": "Unlimited & AltusHost maintenance",
        "slugname": "unlimited-altushost-maintenance",
        "tags": "hosting, domains, cloud, wordpress",
        "shortDesc": "Maintenance of this two hosting company websites that made in WP",
        "txt": "Unlimited is a premium brand created by the United Internet company, based in Belgrade. Driven by the desire present the people with a first class web hosting solution that comes with its very own infrastructure in NL, we created Unlimited. AltusHost has been providing quality Web Hosting services since 2008. For almost a decade now, one of our main goals is to provide top-notch managed web hosting services. How? By doing it with the best customer experience and reasonable pricing rates.",
        "headingImg": "../assets/img/work-preview-img.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/single-work-preview-img.png"}
        ]
    },
    {
        "id": 14,
        "type": "web-development",
        "title": "Personal portfolio",
        "subtitle": "Personal portfolio website",
        "slugname": "personal-portfolio-development",
        "tags": "portfolio, Angular 2+, my works",
        "shortDesc": "Personal portfolio development",
        "txt": "My first project in Angular 2+, more specifically in Angular 7",
        "headingImg": "../assets/img/works/portfolio-webdesign-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/portfolio-development-1.jpg"}
        ]
    },
    {
        "id": 15,
        "type": "intelligent-system",
        "title": "Scrapy Web Crawler",
        "subtitle": "Scrapy Web Crawler to get Data for ML task",
        "slugname": "scrapy-crawler",
        "tags": "scrapy, python, web crawler, k-means, machine learning",
        "shortDesc": "Web Crawler in Scrapy for get and save data in MySQL for exploratory data analysis and research",
        "txt": "Scrapy is a free and open-source web-crawling framework written in Python. Originally designed for web scraping, it can also be used to extract data using APIs or as a general-purpose web crawler.",
        "headingImg": "../assets/img/work-preview-img.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/single-work-preview-img.png"}
        ]
    },
    {
        "id": 16,
        "type": "intelligent-system",
        "title": "Questionnaire",
        "subtitle": "Questionnaire to get data for research",
        "slugname": "amd-infographic",
        "tags": "python, survey, flaks, fuzzy logic, machine learning",
        "shortDesc": "Questionnaire/Survey in Python Flask for a fresh data ",
        "txt": "",
        "headingImg": "../assets/img/work-preview-img.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/single-work-preview-img.png"}
        ]
    },
    {
        "id": 17,
        "type": "intelligent-system",
        "title": "Expert System GUI",
        "subtitle": "Expert System test version in Java, jSwing and jFuzzyLogic libraries",
        "slugname": "es-gui-in-java",
        "tags": "expert system, headaches, fuzzy logic, java libraries",
        "shortDesc": "Prototype of GUI for Expert System who recognize three primary types of headaches",
        "txt": "Some images of GUI look, and some of a code",
        "headingImg": "../assets/img/work-preview-img.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/single-work-preview-img.png"}
        ]
    },
    {
        "id": 18,
        "type": "intelligent-system",
        "title": "Data Science project",
        "subtitle": "Some visualization ",
        "slugname": "data-science",
        "tags": "data science, python, visualization, Jupyter notebook ",
        "shortDesc": "Exploatory visualization with python libraries like numpy, pandas and other from MySQL database ",
        "txt": "Images of that work",
        "headingImg": "../assets/img/work-preview-img.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/single-work-preview-img.png"}
        ]
    },
    {
        "id": 19,
        "type": "intelligent-system",
        "title": "Empty for now",
        "subtitle": "Empty for now ",
        "slugname": "mock-up",
        "tags": "data science, python, visualization, Jupyter notebook ",
        "shortDesc": "Exploatory visualization with python libraries like numpy, pandas and other from MySQL database ",
        "txt": "Images of that work",
        "headingImg": "../assets/img/work-preview-img.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/single-work-preview-img.png"}
        ]
    },
    {
        "id": 20,
        "type": "photography",
        "title": "Amateur Photography",
        "subtitle": "Personal photography",
        "slugname": "photography",
        "tags": "photography, amateur equipment",
        "shortDesc": "Some of my photos from student days before social networks.",
        "txt": "Some of my photos from student days with Canon amateur photo camera.",
        "headingImg": "../assets/img/works/photography-heading.png",
        "link": "",
        "otherImg": [
            {"img": "../assets/img/works/photography/nevreme-se-sprema.jpg"},
            {"img": "../assets/img/works/photography/refleksija.jpg"},
            {"img": "../assets/img/works/photography/trojnost.jpg"},
            {"img": "../assets/img/works/photography/bajka.jpg"},
            {"img": "../assets/img/works/photography/oblaci.jpg"},
            {"img": "../assets/img/works/photography/zraci.jpg"}
        ]
    },
];
