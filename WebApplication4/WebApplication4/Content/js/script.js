var menuTarget;
var docNameLength = null;
var acHeadingLength = null;
//var aboutAcHeadingLength=8;


var blogFeaturedHeading = [
    "Heading",
    "Heading",
    "Heading"
];

var blogFeaturedPic = [
    "img/future1.jpg",
    "img/future2.jpg",
    "img/future3.jpg"
];

var blogFeaturedText = [
    "printing and typesetting industry. Lorem Ipsum has been the industry.",
    "printing and typesetting industry. Lorem Ipsum has been the industry.",
    "printing and typesetting industry. Lorem Ipsum has been the industry."
]

var blogTags = [
    "Health",
    "Medical",
    "UI",
    "Treatment",
    "Dental",
    "X-Ray"
];

var blogNewsHeading = [
    "Blog Heading here One line",
    "Blog Heading here One line",
    "Blog Heading here One line",
    "Blog Heading here One line",
    "Blog Heading here One line",
    "Blog Heading here One line"
]

var blogNewsPics = [
    "img/post.jpg",
    "img/post2.jpg",
    "img/post3.jpg",
    "img/post2.jpg",
    "img/post3.jpg",
    "img/post.jpg"
];

var blogNewsText = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
];

var blogNewsDate = [
    "3-07-15",
    "3-07-15",
    "3-07-15",
    "3-07-15",
    "3-07-15",
    "3-07-15"
];

var blogNewsAuthor = [
    "admin",
    "admin",
    "admin",
    "admin",
    "admin",
    "admin"
];

var blogNewsTags = [
    "Health, Medical, Hospitality",
    "Health, Medical, Hospitality",
    "Health, Medical, Hospitality",
    "Health, Medical, Hospitality",
    "Health, Medical, Hospitality",
    "Health, Medical, Hospitality"
];

var blogNewsSMIcons = [
    "img/facevar.png",
    "img/twittvar.png",
    "img/googvar.png"
];

doctorSelect = [
    "Select Departments",
    "USA",
    "Canada",
    "France",
    "Spain",
    "Bulgaria",
    "Greece"
];


newsTop = 360; //newsTop dəyişəni news bölməsində slider istifadə olunarsa aşağı-yuxarı hərəkət üçün dəyişən
newsSlideNumber = 0;   //newsSlideNumber dəyişəni slider istifadə olunduğu zaman xəbərləri üç-üç qruplaşdırmaqla onların sayını bildirir
docLeft = 0;
docSlideNumber = 0;

(function mainFunc() {


    if (location.pathname.search("index.html") > -1) {
        var li, newsDateDiv, span, newsDayMonth, newsTextDiv, heading, text, doctorsLi, doctors, whiteBox, doctorImage, docNameDiv, docName, docProfession, docSocialMedia, docMedia, mediaIcons;
        var a = 0;

        var newsDay = [
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
        ];  //news bölməsində xəbərlərin gün tarixi massivi

        var newsMonth = [
            "10",
            "10",
            "10",
            "10",
            "10",
            "10"
        ]; //news bölməsində xəbərlərin ay tarixi massivi

        var newsYear = [
            2012,
            2013,
            2014,
            2015,
            2016,
            2017
        ];  //news bölməsində xəbərlərin il tarixi massivi

        var newsHeading = [
            "The Best Medical Clinic",
            "Medical Services",
            "Questions And Answers About Neurostimulation",
            "What's Parkinson's Disease",
            "Obesity Surgery",
            "What's Kidney Stone"
        ];  //news bölməsində xəbərlərin başlığı massivi

        var newsText = [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        ];  //news bölməsində xəbərlərin text'i

        var doctorNames = [
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew",
            "Dr. Anakha Mathew"
        ];

        var doctorProfessions = [
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental",
            "Specializes in Dental"
        ];

        var doctorPictures = [
            "img/doctor2-1.png",
            "img/doctor2-2.png",
            "img/doctor2-3.png",
            "img/doctor2-4.png",
            "img/doctor2-1.png",
            "img/doctor2-2.png",
            "img/doctor2-3.png",
            "img/doctor2-4.png",
            "img/doctor2-1.png",
            "img/doctor2-2.png",
            "img/doctor2-3.png",
            "img/doctor2-4.png"
        ];


        var doctorSocialMediaIcons = [
            "img/face.png",
            "img/twitter.png",
            "img/google.png"
        ];

        var accordionHeading = [
            "Dental Clinic",
            "Medicine Department",
            "Pregnancy Center"
        ];

        var accordionIcon = [
            "img/dent.png",
            "img/med.png",
            "img/pre.png"
        ];

        var accordionPics = [
            "img/accordian2.jpg",
            "img/accordian3.jpg",
            "img/accordian4.jpg"
        ];

        var accordionText = [
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
        ];

        var serviceHeading = [
            "Medical Service",
            "24 hours Service",
            "emergency departments",
            "x-ray",
            "cardiology",
            "neurology",
            "pregnancy",
            "dental"
        ];

        var servicePics = [
            "img/icon-med-var2.png",
            "img/icon-serv-var2.png",
            "img/icon-emerg-var2.png",
            "img/icon-xray-var2.png",
            "img/icon-card-var2.png",
            "img/icon-neur-var2.png",
            "img/icon-preg-var2.png",
            "img/icon-dent-var2.png"
        ];

        var serviceText = [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        ];



        docNameLength = doctorNames.length;
        acHeadingLength = accordionHeading.length;

        for (var i = 0; i < newsDay.length; i++) {
            li = document.createElement("li");

            newsDateDiv = document.createElement("div");
            newsDateDiv.setAttribute("class", "newsDate");

            span = document.createElement("span");
            span.innerHTML = newsDay[i] + "<br>"

            newsDayMonth = document.createElement("p");

            newsDayMonth.innerHTML += "10-15";

            newsTextDiv = document.createElement("div");
            newsTextDiv.setAttribute("class", "newsText");

            heading = document.createElement("h2");
            heading.innerHTML = newsHeading[i];

            text = document.createElement("p");
            text.innerHTML = newsText[i];

            document.getElementById("homePage").getElementsByClassName("disast")[0].appendChild(li);
            li.appendChild(newsDateDiv);
            li.appendChild(newsTextDiv);

            newsDateDiv.appendChild(span);
            newsDateDiv.appendChild(newsDayMonth);

            newsTextDiv.appendChild(heading);
            newsTextDiv.appendChild(text);
        }


        for (var i = 0; i < doctorNames.length / 4; i++) {
            doctorsLi = document.createElement("li");
            document.getElementById("homePage").getElementsByClassName("docSlide")[0].appendChild(doctorsLi);

            for (var j = 0; j < 4; j++) {
                doctors = document.createElement("div");
                doctors.setAttribute("class", "col-sm-6");
                doctorsLi.appendChild(doctors);

                whiteBox = document.createElement("div");
                whiteBox.setAttribute("class", "whiteBox");
                doctors.appendChild(whiteBox);

                doctorImage = document.createElement("img");
                doctorImage.setAttribute("src", doctorPictures[a + j]);
                doctorImage.setAttribute("class", "docPics");
                whiteBox.appendChild(doctorImage);

                docNameDiv = document.createElement("div");
                docNameDiv.setAttribute("class", "docName");
                whiteBox.appendChild(docNameDiv);

                docProfession = document.createElement("h2");
                docNameDiv.appendChild(docProfession);

                docName = document.createElement("span");
                docName.innerHTML = doctorNames[a + j];
                docProfession.appendChild(docName);
                docProfession.innerHTML += doctorProfessions[a + j];



                docSocialMedia = document.createElement("div");
                docSocialMedia.setAttribute("class", "docSocialMedia");
                whiteBox.appendChild(docSocialMedia);

                for (var z = 0; z < 4; z++) {
                    docMedia = document.createElement("a");
                    docSocialMedia.appendChild(docMedia);
                    if (z < 3) {
                        docMedia.setAttribute("href", "#");
                        mediaIcons = document.createElement("img");
                        mediaIcons.setAttribute("src", doctorSocialMediaIcons[z]);
                        docMedia.appendChild(mediaIcons);
                    }
                    else {
                        docMedia.setAttribute("href", "#");
                        docMedia.innerHTML = "More";
                        docMedia.setAttribute("class", "bg");
                    }
                }

            }
            a = a + 4;
        }


        for (var i = 0; i < accordionHeading.length; i++) {
            accordion = document.createElement("li");
            if (i > 0)
                accordion.setAttribute("id", "flip2");
            document.getElementById("homePage").getElementsByClassName("depAccordion")[0].appendChild(accordion);

            acHeading = document.createElement("h3");
            acHeading.onclick = accordionFunction;

            acIcon = document.createElement("img");
            acIcon.setAttribute("src", accordionIcon[i]);

            acHeadingText = document.createElement("span");
            acHeadingText.innerHTML = accordionHeading[i];

            acHeading.appendChild(acIcon);
            acHeading.appendChild(acHeadingText);
            accordion.appendChild(acHeading);

            acContent = document.createElement("div");
            accordion.appendChild(acContent);

            if (i == 0) {
                acHeading.setAttribute("class", "minus");
                acContent.setAttribute("id", "panel1");
            }
            else {
                acHeading.setAttribute("class", "plus");
                acContent.setAttribute("id", "panel2");
            }

            acImage = document.createElement("img");
            acImage.setAttribute("src", accordionPics[i]);
            acContent.appendChild(acImage);

            acText = document.createElement("p");
            acText.innerHTML = accordionText[i];

            acDetails = document.createElement("a");
            acDetails.setAttribute("class", "bg");
            acDetails.setAttribute("href", "#");
            acDetails.innerHTML = "Details";

            acContent.appendChild(acText);
            acContent.appendChild(acDetails);

        }

        for (var i = 0; i < serviceHeading.length; i++) {
            serviceDiv = document.createElement("div");
            serviceDiv.setAttribute("class", "col-md-3 col-sm-6");
            document.getElementById("homePage").getElementsByClassName("services")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0].appendChild(serviceDiv);

            serviceBox = document.createElement("div");
            serviceBox.setAttribute("class", "serviceBox");
            serviceDiv.appendChild(serviceBox);

            serviceImage = document.createElement("img");
            serviceImage.setAttribute("src", servicePics[i]);
            serviceBox.appendChild(serviceImage);

            servHeading = document.createElement("h2");
            servHeading.innerHTML = serviceHeading[i];
            serviceBox.appendChild(servHeading);

            servText = document.createElement("p");
            servText.innerHTML = serviceText[i];
            serviceBox.appendChild(servText);

            servLink = document.createElement("a");
            servLink.setAttribute("href", "#");
            servLink.setAttribute("class", "bg");
            servLink.innerHTML = "Read More";
            serviceBox.appendChild(servLink);
        }

        function newsSize() {

            if (window.innerWidth >= 1200) {
                document.getElementsByClassName("updatesViewport")[0].style.height = "363px";
                document.getElementsByClassName("docViewPort")[0].style.height = "352px";

                for (var j = 0; j < doctorNames.length / 4; j++) {
                    document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.width = "750px";
                    document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.left = -docSlideNumber * 750 + "px";

                }
            }

            else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
                document.getElementsByClassName("updatesViewport")[0].style.height = "420px";
                document.getElementsByClassName("docViewPort")[0].style.height = "292px";
                for (var j = 0; j < doctorNames.length / 4; j++) {
                    document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.width = "617px";
                    document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.left = -docSlideNumber * 617 + "px";

                }



            }


            else if (window.innerWidth >= 800 && window.innerWidth < 992) {
                document.getElementsByClassName("updatesViewport")[0].style.height = "534px";

                for (var j = 0; j < doctorNames.length / 4; j++) {
                    document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.width = "470px";
                    document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.left = -docSlideNumber * 470 + "px";
                }


            }
            else if (window.innerWidth > 619 && window.innerWidth < 800) {
                document.getElementsByClassName("updatesViewport")[0].style.height = "306px";

                if (window.innerWidth < 800 && window.innerWidth > 767) {
                    for (var j = 0; j < doctorNames.length / 4; j++) {
                        document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.width = "720px";
                        document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.left = -docSlideNumber * 720 + "px";
                    }
                }

            }
            else if (window.innerWidth > 385 && window.innerWidth <= 619) {
                document.getElementsByClassName("updatesViewport")[0].style.height = "363px";
            }
            else if (window.innerWidth >= 320 && window.innerWidth <= 385) {
                document.getElementsByClassName("updatesViewport")[0].style.height = "420px";
            }
            else if (window.innerWidth > 285 && window.innerWidth < 320) {
                document.getElementsByClassName("updatesViewport")[0].style.height = "612px";
            }
            else if (window.innerWidth <= 285) {
                document.getElementsByClassName("updatesViewport")[0].style.height = "669px";
            }


            if (window.innerWidth > 768 && window.innerWidth < 992) {
                document.getElementsByClassName("docViewPort")[0].style.height = "246px";

            }

            else if (window.innerWidth > 738 && window.innerWidth < 768) {
                document.getElementsByClassName("docViewPort")[0].style.height = "210px";
            }

            else if (window.innerWidth == 768 || (window.innerWidth > 667 && window.innerWidth <= 738)) {
                document.getElementsByClassName("docViewPort")[0].style.height = "224px";
            }

            else if (window.innerWidth > 640 && window.innerWidth <= 667) {
                document.getElementsByClassName("docViewPort")[0].style.height = "604px";
            }

            else if (window.innerWidth > 480 && window.innerWidth <= 640) {
                document.getElementsByClassName("docViewPort")[0].style.height = "620px";
            }

            if (window.innerWidth > 360 && window.innerWidth <= 480) {
                document.getElementsByClassName("docViewPort")[0].style.height = "1844px";
            }

            else if (window.innerWidth <= 360) {
                document.getElementsByClassName("docViewPort")[0].style.height = parseInt(window.innerWidth * 5.264) + "px";
            }



            if (window.innerWidth >= 266 && window.innerWidth < 768) {
                for (var j = 0; j < doctorNames.length / 4; j++) {
                    document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.width = window.innerWidth - 47 + "px";
                    document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[j].style.left = -docSlideNumber * (window.innerWidth - 47) + "px";
                }
            }


        }

        docSlideTimer = setInterval(function () {
            doctorsLeftFunction();
        }, 3000);

        $(document).ready(function () {

            $(window).resize(function () {
                clearInterval(docSlideTimer);

                newsSize();


            });


        });

        newsSize();

    }

    if (location.pathname.search("about.html") > -1) {
        aboutAcHeadingLength = aboutAccordionHeading.length;
    }


    if (location.pathname.search("blog.html") > -1) {

        for (var i = 0; i < blogFeaturedHeading.length; i++) {
            var li = document.createElement("li");
            document.getElementsByClassName("featuredBox")[0].getElementsByTagName("ul")[0].appendChild(li);

            var img = document.createElement("img");
            img.setAttribute("src", blogFeaturedPic[i]);
            li.appendChild(img);

            var h2 = document.createElement("h2");
            h2.innerHTML = blogFeaturedHeading[i];

            var p = document.createElement("p");
            p.innerHTML = blogFeaturedText[i];

            li.appendChild(h2);
            li.appendChild(p);
        }

        for (var i = 0; i < blogTags.length; i++) {
            var tags = document.createElement("a");
            tags.setAttribute("href", "#");
            tags.innerHTML = blogTags[i];
            document.getElementsByClassName("tags")[0].appendChild(tags);
        }

        for (var i = 0; i < blogNewsHeading.length; i++) {
            var li = document.createElement("li");
            document.getElementsByClassName("leftSection")[0].getElementsByTagName("ul")[0].appendChild(li);

            var imBlog = document.createElement("div");
            imBlog.setAttribute("class", "imBlog");
            li.appendChild(imBlog);

            var img = document.createElement("img");
            img.setAttribute("src", blogNewsPics[i]);
            imBlog.appendChild(img);

            var date = document.createElement("h2");
            date.innerHTML = blogNewsDate[i];
            imBlog.appendChild(date);

            var stepRight = document.createElement("div");
            stepRight.setAttribute("class", "col-sm-11 stepRight");
            li.appendChild(stepRight);

            var heading = document.createElement("h2");
            heading.innerHTML = blogNewsHeading[i];
            stepRight.appendChild(heading);

            var span = document.createElement("span");
            heading.appendChild(span);

            var author = document.createElement("a");
            author.innerHTML = blogNewsAuthor[i];
            if (blogNewsAuthor[i] == "admin")
                author.setAttribute("class", "admin");

            author.setAttribute("href", "#");
            span.appendChild(author);

            var bk = document.createElement("span");
            bk.innerHTML = "|";
            bk.setAttribute("class", "bk");
            span.appendChild(bk)

            var tag = document.createElement("a");
            tag.setAttribute("href", "#");
            tag.setAttribute("class", "health");
            tag.innerHTML = blogNewsTags[i];
            span.appendChild(tag);

            var text = document.createElement("p");
            text.innerHTML = blogNewsText[i];
            stepRight.appendChild(text);

            var more = document.createElement("a");
            more.setAttribute("href", "#");
            more.setAttribute("class", "bg");
            more.innerHTML = "Read More";
            stepRight.appendChild(more)

            var bord = document.createElement("div");
            bord.setAttribute("class", "bord");
            stepRight.appendChild(bord);

            var bordInner = document.createElement("div");
            bordInner.setAttribute("class", "bordInner");
            bord.appendChild(bordInner);

            var shareSpan = document.createElement("span");
            shareSpan.innerHTML = "Share :";
            bordInner.appendChild(shareSpan);

            for (var j = 0; j < blogNewsSMIcons.length; j++) {
                var sm = document.createElement("a");
                sm.setAttribute("href", "#");
                bordInner.appendChild(sm);

                var smIcons = document.createElement("img");
                smIcons.setAttribute("src", blogNewsSMIcons[j]);
                sm.appendChild(smIcons);
            }

        }

        for (var i = 0; i < blogNewsHeading.length / 3 + 2; i++) {

            var page = document.createElement("a");
            if (i > 0 && i < blogNewsHeading.length / 3 + 1) {
                page.innerHTML = i;
                page.onclick = pageClick
            }
            else {
                if (i == 0) {
                    page.setAttribute("class", "pLeft");
                }

                else {
                    page.setAttribute("class", "pRight");
                }
            }

            document.getElementsByClassName("pagerSection")[0].appendChild(page);

        }


    }

    if (location.pathname.search("blog-detail.html") > -1) {

        var blogDetailText = [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        ];


        var blogDetailQuoteText = "Roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia";

        var blogDetailCommentName = [
            "Akhil Designer",
            "Jishnu Designer",
            "Merina john",
            "Shuba chandran"
        ];

        var blogDetailCommentPics = [
            "img/akhil.jpg",
            "img/jishnu.jpg",
            "img/merina.jpg",
            "img/subha.jpg"
        ];

        var blogDetailCommentText = [
            "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ];

        var blogDetailCommentDate = [
            "04 - 11 - 2015",
            "04 - 11 - 2016",
            "04 - 11 - 2017",
            "04 - 11 - 2018"
        ]


        for (var i = 0; i < blogFeaturedHeading.length; i++) {
            var li = document.createElement("li");
            document.getElementsByClassName("featuredBox")[0].getElementsByTagName("ul")[0].appendChild(li);

            var img = document.createElement("img");
            img.setAttribute("src", blogFeaturedPic[i]);
            li.appendChild(img);

            var h2 = document.createElement("h2");
            h2.innerHTML = blogFeaturedHeading[i];

            var p = document.createElement("p");
            p.innerHTML = blogFeaturedText[i];

            li.appendChild(h2);
            li.appendChild(p);
        }

        for (var i = 0; i < blogTags.length; i++) {
            var tags = document.createElement("a");
            tags.setAttribute("href", "#");
            tags.innerHTML = blogTags[i];
            document.getElementsByClassName("tags")[0].appendChild(tags);
        }

        var bdetailnews = document.createElement("div");
        document.getElementsByClassName("leftSection")[0].appendChild(bdetailnews);

        var imBlog = document.createElement("div");
        imBlog.setAttribute("class", "imBlog");
        bdetailnews.appendChild(imBlog);

        var img = document.createElement("img");
        img.setAttribute("src", blogNewsPics[0]);
        imBlog.appendChild(img);

        var date = document.createElement("h2");
        date.innerHTML = blogNewsDate[0];
        imBlog.appendChild(date);

        var stepRight = document.createElement("div");
        stepRight.setAttribute("class", "col-sm-11 stepRight");
        bdetailnews.appendChild(stepRight);

        var heading = document.createElement("h2");
        heading.innerHTML = blogNewsHeading[0];
        stepRight.appendChild(heading);

        var span = document.createElement("span");
        heading.appendChild(span);

        var author = document.createElement("a");
        author.innerHTML = blogNewsAuthor[0];
        if (blogNewsAuthor[0] == "admin")
            author.setAttribute("class", "admin");

        author.setAttribute("href", "#");
        span.appendChild(author);

        var bk = document.createElement("span");
        bk.innerHTML = "|";
        bk.setAttribute("class", "bk");
        span.appendChild(bk)

        var tag = document.createElement("a");
        tag.setAttribute("href", "#");
        tag.setAttribute("class", "health");
        tag.innerHTML = blogNewsTags[0];
        span.appendChild(tag);

        var firsttext = document.createElement("p");
        firsttext.innerHTML = blogDetailText[0];
        stepRight.appendChild(firsttext);

        var quoteDiv = document.createElement("div");
        quoteDiv.setAttribute("class", "quote");
        stepRight.appendChild(quoteDiv);

        var quoteText = document.createElement("p");
        quoteText.innerHTML = blogDetailQuoteText;
        quoteDiv.appendChild(quoteText);

        var secondText = document.createElement("p");
        secondText.innerHTML = blogDetailText[1];
        stepRight.appendChild(secondText);



        var bord = document.createElement("div");
        bord.setAttribute("class", "bord");
        stepRight.appendChild(bord);

        var bordInner = document.createElement("div");
        bordInner.setAttribute("class", "bordInner");
        bord.appendChild(bordInner);

        var shareSpan = document.createElement("span");
        shareSpan.innerHTML = "Share :";
        bordInner.appendChild(shareSpan);

        for (var j = 0; j < blogNewsSMIcons.length; j++) {
            var sm = document.createElement("a");
            sm.setAttribute("href", "#");
            bordInner.appendChild(sm);

            var smIcons = document.createElement("img");
            smIcons.setAttribute("src", blogNewsSMIcons[j]);
            sm.appendChild(smIcons);
        }

        var comments = document.createElement("div");
        comments.setAttribute("class", "comments");
        stepRight.appendChild(comments);

        var commentHeading = document.createElement("h2");
        commentHeading.innerHTML = "Comments";
        comments.appendChild(commentHeading);

        var commentUl = document.createElement("ul");
        comments.appendChild(commentUl);

        for (var i = 0; i < blogDetailCommentName.length; i++) {
            var commentLi = document.createElement("li");
            commentUl.appendChild(commentLi);

            var commentPicDiv = document.createElement("div");
            commentPicDiv.setAttribute("class", "col-sm-1 pad0");
            commentLi.appendChild(commentPicDiv);

            var commentPic = document.createElement("img");
            commentPic.setAttribute("src", blogDetailCommentPics[i]);
            commentPicDiv.appendChild(commentPic);

            var commentContent = document.createElement("div");
            commentContent.setAttribute("class", "col-sm-11");
            commentLi.appendChild(commentContent);

            var commentH3 = document.createElement("h3");
            commentH3.innerHTML = blogDetailCommentName[i];
            commentContent.appendChild(commentH3);

            var commentDate = document.createElement("span");
            commentDate.innerHTML = blogDetailCommentDate[i];
            commentH3.appendChild(commentDate);

            var commentText = document.createElement("p");
            commentText.innerHTML = blogDetailCommentText[i];
            commentContent.appendChild(commentText);

            var commentReply = document.createElement("a");
            commentReply.setAttribute("class", "bg");
            commentReply.setAttribute("href", "#");
            commentReply.innerHTML = "Reply";
            commentContent.appendChild(commentReply);

        }




    }

    if (location.pathname.search("news.html") > -1) {
        var newsHeading = [
            "News Heading: contrary to popular.",
            "News Heading: contrary to popular.",
            "News Heading: contrary to popular.",
            "News Heading: contrary to popular."
        ];

        var newsPics = [
            "img/news-hd1.jpg",
            "img/news-hd2.jpg",
            "img/news-hd3.jpg",
            "img/news-hd4.jpg",
        ];

        var newsDate = [
            "April /05/ 2015",
            "April /05/ 2015",
            "April /05/ 2015",
            "April /05/ 2015"
        ];

        var newsText = [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        ];

        var newsAuthor = [
            "admin",
            "admin",
            "admin",
            "admin"
        ];

        var select = [
            "Select by popularity",
            "USA",
            "Canada",
            "France",
            "Spain",
            "Bulgaria",
            "Greece"
        ];



        for (var i = 0; i < newsHeading.length; i++) {
            var newsCovering = document.createElement("div");
            newsCovering.setAttribute("class", "col-sm-12 newsCovering");
            document.getElementsByClassName("newsSection")[0].appendChild(newsCovering);

            var imgSection = document.createElement("div");
            imgSection.setAttribute("class", "col-sm-2 imageSection");
            newsCovering.appendChild(imgSection);

            var img = document.createElement("img");
            img.setAttribute("src", newsPics[i]);
            imgSection.appendChild(img);

            var date = document.createElement("h2");
            date.innerHTML = newsDate[i];
            imgSection.appendChild(date);

            var newsDetail = document.createElement("div");
            newsDetail.setAttribute("class", "col-sm-10 newsDetail");
            newsCovering.appendChild(newsDetail);

            var nhead = document.createElement("h2");
            nhead.innerHTML = newsHeading[i];
            newsDetail.appendChild(nhead);

            var author = document.createElement("span");
            author.innerHTML = "by : " + newsAuthor[i];
            nhead.appendChild(author);

            var nText = document.createElement("p");
            nText.innerHTML = newsText[i];
            newsDetail.appendChild(nText);
        }

        selectt(select);

    }

    if (location.pathname.search("appointment.html") > -1) {
        
    }

   

    if (document.querySelector('#services') != null) {

        var serviceIntervalCounter = 1;

        function slideSizes() {
            if (window.innerWidth >= 992) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "163px"
            }

            else if (window.innerWidth < 992 && window.innerWidth > 767) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "184px"
            }

            else if (window.innerWidth <= 767 && window.innerWidth >= 600) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "349px"
            }

            else if (window.innerWidth < 600 && window.innerWidth >= 500) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "370px"
            }

            else if (window.innerWidth < 500 && window.innerWidth >= 480) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "391px"
            }

            else if (window.innerWidth < 480 && window.innerWidth >= 440) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "400px"
            }

            else if (window.innerWidth < 440 && window.innerWidth >= 380) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "421px"
            }

            else if (window.innerWidth < 380 && window.innerWidth >= 332) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "442px"
            }

            else if (window.innerWidth < 332 && window.innerWidth > 319) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "463px"
            }
            else if (window.innerWidth < 319 && window.innerWidth >= 300) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "459px"
            }
            else if (window.innerWidth < 300) {
                document.getElementsByClassName("happyClients")[0].getElementsByClassName("slider-cover")[0].getElementsByClassName("bx-wrapper")[0].getElementsByClassName("bx-viewport")[0].style.height = "480px"
            }



            if (window.innerWidth >= 1200) {
                for (var i = 0; i < arrLength; i++){
                        document.getElementsByClassName("slider-cover")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].style.width="1170px";
                    }
            }
            if(window.innerWidth<1200 && window.innerWidth>992){
                for (var i = 0; i < arrLength;i++){
                        document.getElementsByClassName("slider-cover")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].style.width="970px";
                    }
            }

            if(window.innerWidth<=992 && window.innerWidth>=767){
                for (var i = 0; i < arrLength;i++){
                    document.getElementsByClassName("slider-cover")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].style.width="750px";
                }

            }


            else if(window.innerWidth<767){
                for (var i = 0; i < arrLength;i++){
                    document.getElementsByClassName("slider-cover")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].style.width=window.innerWidth-17+"px";
                }


            }
        }
        $(document).ready(function () {

            $(window).resize(function () {
                slideSizes();


            });


        });

        slideSizes();
    }
}());

function pageClick() { //blog
    for (var i = 0; i < blogNewsHeading.length; i++) {
        document.getElementsByClassName("leftSection")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].style.display = "none";
    }

    for (var i = (this.innerHTML - 1) * 3; i < this.innerHTML * 3; i++) {
        document.getElementsByClassName("leftSection")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].style.display = "block";
    }

}



function navClick(k) {
    menuTarget = k;
    for (var i = 0; i < 7; i++) {
        if (!document.getElementsByClassName("menuList")[i].getElementsByTagName("a")[0].classList.contains("activeNav")) {
            document.getElementsByClassName("menuList")[i].getElementsByTagName("a")[0].style.color = "#91a8ae";
        }
    }
    menuTarget.getElementsByTagName("a")[0].style.color = "black";
}


// window.onclick=function(event) {
//     if(event.target!=menuTarget && menuTarget.getElementsByTagName("a")[0].style.color=="black"){
//        menuTarget.getElementsByTagName("a")[0].style.color="#91a8ae"
//     }


// }




function newsLeft() {    //news bölməsində sol buttona basıldıqda işə düşən function
    var k = parseInt(document.getElementsByClassName("updatesViewport")[0].style.height)
    newsTop += k;
    newsSlideNumber -= 1;
    if (newsSlideNumber < 0) {
        newsTop = 360 - k;
        newsSlideNumber = 1;
    }
    for (var i = 0; i < 6; i++)
        document.getElementsByClassName("disast")[0].getElementsByTagName("li")[i].style.top = newsTop + "px";
    console.log(document.getElementsByClassName("disast")[0].getElementsByTagName("li")[0].style.top);

}

function newsRight() {  //news bölməsində sağ buttona basıldıqda işə düşən function
    var k = parseInt(document.getElementsByClassName("updatesViewport")[0].style.height)
    newsTop -= k;
    newsSlideNumber += 1;
    if (newsSlideNumber > 1) {
        newsTop = 360;
        newsSlideNumber = 0;
    }

    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("disast")[0].getElementsByTagName("li")[i].style.top = newsTop + "px";
    }
}

function doctorsSlideRight() {
    clearInterval(docSlideTimer);
    doctorsRightFunction();
}

function doctorsSlideLeft() {
    clearInterval(docSlideTimer);
    doctorsLeftFunction();
}

function doctorsLeftFunction() {
    var k = parseInt(document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[0].style.width);
    docSlideNumber -= 1;
    docLeft += k
    console.log(docLeft);

    if (docSlideNumber < 0) {
        docSlideNumber = docNameLength / 4 - 1;
        docLeft = -k * (docNameLength / 4 - 1);
    }

    for (var i = 0; i < docNameLength / 4; i++) {
        document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[i].style.left = docLeft + "px";
    }
}

function doctorsRightFunction() {
    var k = parseInt(document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[0].style.width);
    docSlideNumber += 1;
    docLeft -= k;
    if (docSlideNumber > docNameLength / 4 - 1) {
        docSlideNumber = 0;
        docLeft = 0;
    }

    for (var i = 0; i < docNameLength / 4; i++) {
        document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[i].style.left = docLeft + "px";
    }
}



function accordionFunction() {
    var k = this;
    l = k.parentNode.getElementsByTagName("div")[0].style;


    if (k.getAttribute("class") == "minus") {
        l.height = 0;
        l.paddingTop = 0;
        l.paddingBottom = 0;
        l.borderColor = "transparent";
        k.classList.remove("minus");
        k.classList.add("plus");
    }

    else if (k.getAttribute("class") == "plus") {
        for (var i = 0; i < acHeadingLength; i++) {
            k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.height = 0;
            k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.paddingTop = 0;
            k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.paddingBottom = 0;
            k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.borderColor = "transparent";

            if (k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("h3")[0].classList.contains("minus")) {
                k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("h3")[0].classList.remove("minus");
                k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("h3")[0].classList.add("plus");
            }
        }

        l.height = "auto";

        l.paddingTop = "28px";
        l.paddingBottom = "28px";
        l.borderColor = "#dceaf6";
        k.classList.remove("plus");
        k.classList.add("minus");
    }


}

function aboutaccordionFunction(k) {
    l = k.parentNode.getElementsByTagName("div")[0].style;

    var array = [
        k.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("ul")[0].getElementsByTagName("li"),
        k.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("ul")[1].getElementsByTagName("li")
    ];

    if (k.getAttribute("class") == "minus") {
        l.height = 0;
        l.paddingTop = 0;
        l.paddingBottom = 0;
        l.borderColor = "transparent";
        k.classList.remove("minus");
        k.classList.add("plus");
    }

    else if (k.getAttribute("class") == "plus") {
        for (var i = 0; i < array.length; i++) {

            for (var j = 0; j < aboutAcHeadingLength / 2; j++) {
                array[i][j].getElementsByTagName("div")[0].style.height = 0;
                array[i][j].getElementsByTagName("div")[0].style.paddingTop = 0;
                array[i][j].getElementsByTagName("div")[0].style.paddingBottom = 0;
                array[i][j].getElementsByTagName("div")[0].style.borderColor = "transparent";
                if (array[i][j].getElementsByTagName("h3")[0].classList.contains("minus")) {
                    array[i][j].getElementsByTagName("h3")[0].classList.remove("minus");
                    array[i][j].getElementsByTagName("h3")[0].classList.add("plus");
                }

            }



        }


        l.height = "auto";
        l.paddingTop = "28px";
        l.paddingBottom = "28px";
        l.border = "1px solid #dceaf6";
        array[0][aboutAcHeadingLength / 2 - 1].getElementsByTagName("div")[0].style.borderTop = "transparent";
        array[1][aboutAcHeadingLength / 2 - 1].getElementsByTagName("div")[0].style.borderTop = "transparent";
        k.classList.remove("plus");
        k.classList.add("minus");
    }


}


function sendNewsLetter() {
    var emailInput = document.getElementsByClassName("footernewsLetter")[0].getElementsByTagName("form")[0].getElementsByTagName("input")[0];
    var emailCheck = false;

    if (emailInput.value.length > 0) {
        for (var i = 0; i < emailInput.value.length; i++) {
            if (emailInput.value[i] == '@') {
                for (var j = i; j < emailInput.value.length; j++) {
                    if (emailInput.value[j] == '.') {
                        if (emailInput.value.length - j > 2) {
                            emailCheck = true;
                        }
                    }
                }
            }
        }

        if (emailCheck == true) {
            document.getElementsByClassName("newsLetterNotification")[0].getElementsByTagName("p")[0].innerHTML = "news letter was sent";
        }

        else {
            document.getElementsByClassName("newsLetterNotification")[0].getElementsByTagName("p")[0].innerHTML = "Email is an invalid!";
        }
    }

    else {
        document.getElementsByClassName("newsLetterNotification")[0].getElementsByTagName("p")[0].innerHTML = "please fill email field";
    }
};


function selectt(select) {
    document.getElementsByClassName("select")[0].onclick = selectDownFunction;
    document.getElementsByClassName("sbSelect")[0].innerHTML = select[0];


    for (var i = 0; i < select.length; i++) {
        var li = document.createElement("li");
        document.getElementsByClassName("selectOptions")[0].appendChild(li);

        var a = document.createElement("a");
        a.innerHTML = select[i];
        a.onclick = selectFunction;
        li.appendChild(a);
    }

    function selectDownFunction() {

        if (document.getElementsByClassName("selectOptions")[0].classList.contains("close")) {
            document.getElementsByClassName("selectOptions")[0].classList.remove("close");
            document.getElementsByClassName("selectOptions")[0].classList.add("open");
        }
        else if (document.getElementsByClassName("selectOptions")[0].classList.contains("open")) {
            document.getElementsByClassName("selectOptions")[0].classList.remove("open");
            document.getElementsByClassName("selectOptions")[0].classList.add("close");
        }


    }



    window.onclick = function (event) {

        if (event.target != document.getElementsByClassName("select")[0]) {
            if (document.getElementsByClassName("selectOptions")[0].classList.contains("open")) {
                document.getElementsByClassName("selectOptions")[0].classList.remove("open");
                document.getElementsByClassName("selectOptions")[0].classList.add("close");
            }
        }

    }
}

function sendContact(number) {
    var maForm = []; //Banner hissəsində Make An AppointMent bölməsindəki textarea və inputları özündə birləşdirən massiv 
    var check = false; //Make An Appointment hissəsində inputlarda və textarea'ların boş olub olmamasını yoxlamaq üçün bool tipində dəyişən
    var nameCheck = false;  //Make An Appointment hissəsində name inputunun ad üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var phoneCheck = false; //Make An Appointment hissəsində phone inputunun nömrə üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var emailCheck = false; //Make An Appointment hissəsində email inputunun email üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var notification = document.getElementsByClassName("maNotification")[0].getElementsByTagName("p")[0]; //Make An Appointment hissəsində "GO" buttonuna click etdikdə nəticə görmək üçün tag'a müraciət dəyişəni

    for (var i = 0; i < number; i++)
        maForm[i] = document.getElementsByClassName("maInput")[i];

    maForm[maForm.length] = document.getElementsByClassName("maTArea")[0];


    for (var i = 0; i < maForm.length; i++) {
        if (maForm[i].value.length == 0) {
            check = true;
        }
    }


    if (check == true) {
        notification.innerHTML = "please fill all fields" //hər hansı input və ya textarea boş olarsa bu əmr yerinə yetirilir
    }

    else {
        for (var i = 0; i < maForm[0].value.length; i++) {
            nameCheck = false;
            for (var j = 65; j <= 90; j++) {
                if (maForm[0].value[i] == String.fromCharCode(j) || maForm[0].value[i] == String.fromCharCode(j + 32)) {
                    nameCheck = true;
                    break;
                }
            }

            if (nameCheck == false)
                break;
        }

        for (var i = 0; i < maForm[1].value.length; i++) {
            phoneCheck = false;
            for (var j = 48; j <= 57; j++) {
                if (maForm[1].value[i] == String.fromCharCode(j)) {
                    phoneCheck = true;
                    break;
                }
            }
            if (phoneCheck == false)
                break;
        }

        for (var i = 0; i < maForm[2].value.length; i++) {
            if (maForm[2].value[i] == '@') {
                for (var j = i; j < maForm[2].value.length; j++) {
                    if (maForm[2].value[j] == '.') {
                        if (maForm[2].value.length - j > 2) {
                            emailCheck = true;
                        }
                    }
                }
            }
        }
        //126-166-ci sətirlərdə inputlar boş olmazsa(yəni dolu olarsa) name hissəsinin ad üçün, phone hissəsinin nömrə, email hissəsinin email üçüb düzgün olub-olmaması yoxlanılır.

        if (nameCheck == true && phoneCheck == true && emailCheck == true) {
            notification.innerHTML = "email sent"; //input email üçün uyğun olarsa bu əmr yerinə yetirilir 
        }

        else if (nameCheck == false) {
            notification.innerHTML = "you have entered an invalid name!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if (phoneCheck == false) {
            notification.innerHTML = "you have entered an invalid phonenumber! It must be only numbers!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if (emailCheck == false) {
            notification.innerHTML = "you have entered an invalid email address!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
    }
    // 169-182-cü sətirlərdə nəticə ekrana çıxarılır
};


function sendContactt(l_name, phone, f_name, email) {
    var maForm = []; //Banner hissəsində Make An AppointMent bölməsindəki textarea və inputları özündə birləşdirən massiv 
    var check = false; //Make An Appointment hissəsində inputlarda və textarea'ların boş olub olmamasını yoxlamaq üçün bool tipində dəyişən
    var nameCheck = false;  //Make An Appointment hissəsində name inputunun ad üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var f_nameCheck = false;
    var phoneCheck = false; //Make An Appointment hissəsində phone inputunun nömrə üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var emailCheck = false; //Make An Appointment hissəsində email inputunun email üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var notification = document.getElementsByClassName("maNotification")[0].getElementsByTagName("p")[0]; //Make An Appointment hissəsində "GO" buttonuna click etdikdə nəticə görmək üçün tag'a müraciət dəyişəni

    for (var i = 0; i < document.getElementsByClassName("maInput").length; i++)
        maForm[i] = document.getElementsByClassName("maInput")[i];

    // 111-114-cü sətirlərdə maForm massivinə inputlar və textarea mənimsədilir

    for (var i = 0; i < maForm.length; i++) {
        if (maForm[i].value.length == 0) {
            check = true;
        }
    }

    // 118-122-ci sətirlərdə inputların  və textarea'nın boş olub olmaması yoxlanılır 

    if (check == true && (document.getElementById("squaredOne").checked == false || document.getElementById("squaredtwo").checked == false || document.getElementById("squaredthree").checked == false)) {
        notification.innerHTML = "please fill all fields" //hər hansı input və ya textarea boş olarsa bu əmr yerinə yetirilir
    }

    else {
        for (var i = 0; i < l_name.value.length; i++) {
            nameCheck = false;
            for (var j = 65; j <= 90; j++) {
                if (l_name.value[i] == String.fromCharCode(j) || l_name.value[i] == String.fromCharCode(j + 32)) {
                    nameCheck = true;
                    break;
                }
            }

            if (nameCheck == false)
                break;
        }

        for (var i = 0; i < f_name.value.length; i++) {
            f_nameCheck = false;
            for (var j = 65; j <= 90; j++) {
                if (f_name.value[i] == String.fromCharCode(j) || f_name.value[i] == String.fromCharCode(j + 32)) {
                    f_nameCheck = true;
                    break;
                }
            }

            if (f_nameCheck == false)
                break;
        }

        for (var i = 0; i < phone.value.length; i++) {
            phoneCheck = false;
            for (var j = 48; j <= 57; j++) {
                if (phone.value[i] == String.fromCharCode(j)) {
                    phoneCheck = true;
                    break;
                }
            }
            if (phoneCheck == false)
                break;
        }

        for (var i = 0; i < email.value.length; i++) {
            if (email.value[i] == '@') {
                for (var j = i; j < email.value.length; j++) {
                    if (email.value[j] == '.') {
                        if (email.value.length - j > 2) {
                            emailCheck = true;
                        }
                    }
                }
            }
        }
        //126-166-ci sətirlərdə inputlar boş olmazsa(yəni dolu olarsa) name hissəsinin ad üçün, phone hissəsinin nömrə, email hissəsinin email üçüb düzgün olub-olmaması yoxlanılır.

        if (nameCheck == true && f_nameCheck && phoneCheck == true && emailCheck == true) {
            notification.innerHTML = "email sent"; //input email üçün uyğun olarsa bu əmr yerinə yetirilir 
        }

        else if (nameCheck == false) {
            notification.innerHTML = "you have entered an invalid last name!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if (f_nameCheck == false) {
            notification.innerHTML = "you have entered an invalid fast name!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if (phoneCheck == false) {
            notification.innerHTML = "you have entered an invalid phone number! It must be only numbers!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if (emailCheck == false) {
            notification.innerHTML = "you have entered an invalid email address!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
    }
    // 169-182-cü sətirlərdə nəticə ekrana çıxarılır
}



function moveFunction(b) {
    var a = b.getElementsByTagName("a")[0].innerHTML - 1;
    serviceIntervalCounter = a;


    var left = parseInt(document.getElementsByClassName("slider-cover")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[0].style.width) * a;
    console.log(left);

    for (var i = 0; i < arrLength; i++) {
        if (b.parentNode.getElementsByClassName("bx-pager-item")[i].getElementsByTagName("a")[0].classList.contains("active")) {
            b.parentNode.getElementsByClassName("bx-pager-item")[i].getElementsByTagName("a")[0].classList.remove("active");
        }

        b.getElementsByTagName("a")[0].classList.add("active");

        document.getElementsByClassName("happy")[0].getElementsByTagName("li")[i].style.left = -left + "px";
    }

}



function selectDownFunction() {
    if (document.getElementsByClassName("selectOptions")[0].classList.contains("close")) {
        document.getElementsByClassName("selectOptions")[0].classList.remove("close");
        document.getElementsByClassName("selectOptions")[0].classList.add("open");
    }
    else if (document.getElementsByClassName("selectOptions")[0].classList.contains("open")) {
        document.getElementsByClassName("selectOptions")[0].classList.remove("open");
        document.getElementsByClassName("selectOptions")[0].classList.add("close");
    }
}

function selectFunction(a,k) {

    document.getElementsByClassName('sbSelect')[0].innerHTML = k.innerHTML;
    document.getElementById('departmentInput').value = a;


}