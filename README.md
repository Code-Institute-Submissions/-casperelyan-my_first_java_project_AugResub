![Quiz Logo](https://res.cloudinary.com/dqoovwhgm/image/upload/v1657760641/code_institute_first_project/slider/gallery/flags_challengo_logo_rdm_yqgms5.png)


# What is this quiz about : 

This is a simple Quiz in which the user answers questions about the national flags.


![PageScrenshots](https://res.cloudinary.com/dqoovwhgm/image/upload/v1657760770/code_institute_first_project/slider/gallery/Screenshot_2022-07-14_at_03.05.53_hyfzfr.png)



# Design : 
Very simple designs. Logo in the middle and four buttons with answers to choose from. The same font as in the previous project was used.



# Features :

The project actually consists of two elements. Home page with a Start button that starts the Quiz and a set of questions with answers to choose from. The user is informed about the choice of the correct or wrong answer by the appropriate color of the button and the background - green for correct and red for wrong. The quiz does not have the function of counting good answers, this option will definitely be added at a later stage of the project development. The number of questions will also be increased and a timer will be added.

![Questions](https://res.cloudinary.com/dqoovwhgm/image/upload/v1657790924/code_institute_first_project/slider/gallery/answers_jiru1u.jpg)
![GoodAnswer](https://res.cloudinary.com/dqoovwhgm/image/upload/v1657790925/code_institute_first_project/slider/gallery/good_answer_b41pie.jpg)

# Testing:

All active links work as they should and lead to the right places, with the exception of the photo gallery, where only the photo in the first row opens in full resolution after clicking. This feature requires some fine-tuning. At the moment the pictures open in full screen in a new webbrowser tab and are easy to download by user. Website desingener would like to block this posibility in the future.
The website is fully responsive thanks to the use of CSS media queries. However, the design should be refined in order to improve the visual experience of the user visiting the website from mobile devices.
The Developer Tools available in Chrome were used to check how the website is displayed on mobile devices. The website was tested in Chrome Version 101.0.4951.64  and Safari Version 15.4 on macOS Catalina system. Those browsers have the largest market share (over 84% - source: https://gs.statcounter.com/browser-market-share).

* ## Validator Testing:


### HTML :
- no errors were returned when passing through the official [W3C validator](https://validator.w3.org/) All 3 pages returned no errors :

![W3CValidator](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653604399/code_institute_first_project/slider/readMe/html_testing_eool7t.jpg)

### CSS :
- no errors were found when passing through the official [Jigsaw](https://jigsaw.w3.org/css-validator/) validator :

![CSSJigsaw](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653604399/code_institute_first_project/slider/readMe/css_testing_tyjjka.jpg)

### Accesability :

The website accessibility was tested using the [Lighthouse](https://developers.google.com/web/tools/lighthouse) application available in Developer Tools in the Chrome Version 101.0.4951.64 browser. The generated report showed 100 points out of 100 possible.

![AccessibilityRaport](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653605541/code_institute_first_project/slider/readMe/lighhouse_testing_odyq4z.jpg)


# Unfixed Bugs :

Project doesn't have any known Unfixed Bugs. The project requires, however, visual refinement, especially in terms of adapting the website to display on mobile devices. The designer, as a person with little experience, designed this website on his 15-inch laptop and an additional 24-inch screen and then added a media query to optimize the appearance of the website on mobile devices. The designer does not consider this to be the best approach. After experience with this project, he would definitely prefer to focus on designing the mobile version first and add media query later or even better option is proabaly to produce two separate version of the same portal. 
The only element that does not fully work are unsupported links to photos in the gallery. But it is intentional because designer does not like how the photos are opening in a full resolution after clicking on the thumbnail. This functionality needs to be refined.

# Credits :

### Content :

The homepage uses an excerpt from the article from the following sources:
[Wikipedia](https://en.wikipedia.org/wiki/Brutalist_architecture) |
[All That’s Interesting](https://allthatsinteresting.com/brutalism) |
[My Modern Met](https://mymodernmet.com/brutalist-architecture/) |

The icons in the footer and home page were taken from [Font Awesome](https://fontawesome.com/)

In writing the code, countless video tutorials on YouTube were also used, including: 
[1](https://www.youtube.com/watch?v=hRyDECs2N8I&t=330s), [2](https://www.youtube.com/watch?v=1CZhGDU5cWM),
[3](https://www.youtube.com/watch?v=QXFd95X08uA), [4](https://www.youtube.com/watch?v=ZRIhvtbdQWM), 
[5](https://www.youtube.com/watch?v=rg7Fvvl3taU&t=1423s), [6](https://www.youtube.com/watch?v=RuJyYiRttpI) and many more. 

### Media :

All photos used in the project were made by Lucas M Czajkowski, the website designer.
Except for the following photos:
- Central Post Office in Macedonia on home page, photo taken from [Brutalism Online](http://brutalism.online/brutalist-buildings/39-macedonia/396-central-post-office-skopje-macedonia)
- Banner photo on Photowalks page, photo taken from [Resource](http://resourcemagonline.com/2018/10/who-do-i-have-to-be-to-make-money-from-stock-photography/93084/)

The graphic on the main page depicted the UCD water tower and the banners on the subpages were made by the website designer using photos from the above-mentioned sources.

The Google Map listing the brutalist style buildings in Ireland was created by 
the website designer using [Google My Maps](https://www.google.com/maps/about/mymaps/)
