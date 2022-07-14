![Quiz Logo](https://res.cloudinary.com/dqoovwhgm/image/upload/v1657760641/code_institute_first_project/slider/gallery/flags_challengo_logo_rdm_yqgms5.png)


# What is this quiz about : 

This is a simple Quiz in which the user answers questions about the national flags.


![PageScrenshots](https://res.cloudinary.com/dqoovwhgm/image/upload/v1657760770/code_institute_first_project/slider/gallery/Screenshot_2022-07-14_at_03.05.53_hyfzfr.png)


# Design : 




# Features :

The project consists of the main page divided into 3 and actually 4 separate sections. The animated main slide, the text part describing the characteristics of the architectural style called brutalism, the part where the visitor can see subjective choose of 5 examples of the most interesting brutalist architecture in Europe, and the created by author map of brutalist buildings in Ireland. The portal also includes two additional subpages - photo gallerie and registration form for architecture photography workshops.

* ## Navigation bar :

The navigation menu allows the user to select individual subpages without the need to use the back button in the browser. On the left side there is a logo with a link that also takes to the home page. The menu item is highlighted in blue when the user hovers the cursor over it.

![NavigationBar](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653575622/code_institute_first_project/slider/readMe/navigation_bar_it80r3.jpg)

* ## Home page image slider:

The main page includes slider composed from photos where the viewer can see brutalist-style buildings located in Dublin. Each photo has caption with a building name. However, the user cannot manually choose the order in which the photos are presented. Photos are displayed in a loop. After presenting the last, the slider returns to the first position.

![MainSlider](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653575919/code_institute_first_project/slider/readMe/main_page_slider_of5gie.jpg)

* ## What is brutalism section:

This part of the page, divided into six columns, introduces the user to the definition of an architectural style called brutalism. In the center there is also a graphic matching the website design with a very characteristic building - water tower on the campus of the University City of Dublin. The page section is fully scalable and is displayed on mobile devices as one column - one block of text.

![BrutalismDefinition](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653576962/code_institute_first_project/slider/readMe/whats_brutalism_wuyjfh.jpg)

* ## A subjective choice of brutalist architecture in Europe:

In this part, the designer of the site chose, in his opinion, the most characteristic buildings of the brutalist style in Europe. The section consists of 5 black and white photos. The photo changes to color when user move cursor over it. The designer idea  was that the first photo should show the general shape / block of the building and the second, colored one, focuses on characteristic detail of a given structure. Below the photo there is the name of the building, its location and the "Discover more" button. The button opens the Wikipedia page (or other available source) where the user can learn more about the structure.

![BrutalismInEurope](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653578252/code_institute_first_project/slider/readMe/brutalisminEurope_bilu5k.jpg)

* ## Google Map with the location of known or less known brutalist buildings in Ireland:

This part features a map of Ireland with the location of known brutalist buildings. Map created by the website designer in the [Google My Maps](www.google.com/maps/about/mymaps). The design of the map and its colors have been matched to the design of the website as much as the customization tools provided by Google allows it. The choice of buildings is suggestive and based solely on the knowledge of the designer and is certainly not complete. The designer would like to expand the functionality of this map in the future so that the user can add new buildings to the list.

![CustomGoogleMaps](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653601835/code_institute_first_project/slider/readMe/maps_brut_t9asfm.gif)

* ## Last but not least - footer :

The simple design of the footer makes it easy to read on any mobile device. The footer contains links to social media in the form of explicitly recoganizble icons. Links to Twitter and Insyagram are connected to live accounts that belongs to the website designer on similar topics. Facebook link is not connected to any account. In addition, there is also a link that allows user send an email with a predefined subject.

![Footer](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653602027/code_institute_first_project/slider/readMe/footer_r3swjs.jpg)

* ## Gallery page :

The Gallery subpage feature pictures of brutalist-style buildings taken by a website designer in Dublin. Gallery has a simple layout based on a masonry design known from Instagram. The gallery does not have any additional functionality. Each photo has caption with the name of the building. Clicking on the photo, open the photo in a full resolution on a new page. Gallery is fully responsive. 

![Gallery](https://res.cloudinary.com/dqoovwhgm/image/upload/v1653606801/code_institute_first_project/slider/readMe/gallery_ieg0tn.jpg)

* ## Photowalks page: 

On this page, the user has the opportunity to provide his personal data, answer to a few questions and sign up for an architecture photography workshop. The user may also attach a photo of the architecture he made. The design of this page is fully responsive, but the appearance of the form should be visually refined, because on mobile devices with a low-resolution screen, the form does not look aesthetically appealing. The designer is aware of this underdevelopment, but he wanted to ensure that each element of the form harmonized with the appearance of the page and, unfortunately, he could not fully cope with adjusting the appearance of the form to screens with lower resolution.

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
