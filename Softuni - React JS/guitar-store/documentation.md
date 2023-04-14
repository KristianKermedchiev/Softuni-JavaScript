                                                            Guitar Store

I Purpose: 

1. The purpose of this website is to provide an easy way for hobby guitarists to sell their guitars. Each profile has mandatory information and optional one with the mandatory being the e-mail - this is the basic way for people to communicate with each other and the optional one being the telephone number. The website consists of a Catalog where authenticated users can view the contact details of the seller as well as add the current guitar to favorites. Authenticated users can Create posts, access their profile and manage their profile. Authenticated users who have created a post can edit and delete said post.

II. Technical information: 

2. The back-end is done using Firebase to maintain collections, access and modify them. The front-end is done with React. Additional library used is 'styled-components' to ease on the css. The website is deployed and can be accessed via the following link: https://guitar-store-b5a07.web.app ;

III. Overview:

3. Home Page. The Home page is simple and contains only a button that takes the customers to the Catalog page;

4. Catalog page contains all the guitar offers visualizing 4 per page. Each guitar is a hyper-link to it's details page;

5. Profile page contains the basic information of each person including: profile picture, email, telephone, favorites count, posts count as well as 3 buttons that bring up a Catalog page that only shows the users's Favorite guitars, a Catalog page that only shows the users's Posted guitars and a Update your Info page that show 3 separate forms that can update the users'

6. The Create Page is a simple form that allows the users to fill in the type/model/sting and fret count of the product as well as provide basic description the price and a screenshot of the product

7. Login and Register. The register form accepts Email, password and repeat password in order to be registerred, in the event of an error in the upper right corner of the field a new small section will appear with the error message. The login accepts email and password and handles the errors in the same way.

8. About us page: Currently the text there is Lorem ipsum, but the page's purpose is to provide information about the creators and the terms of the website.

9. Contact us page: has a google maps pointer to the supposed office and information on how customers can contact the website owners.

10. Details page: Shows the remainder of information that the Catalog page doesn't show - fret/string count and description. Depending on the level of authorizaton the page renders 5 different buttons - Non-authorized users that are not logged in can see all the details of the product and have access to the Back button, Logged in users that are not the creator have access to the Back button, the Show seller's info button that displays the seller's email and telephone as well as the Add to favorites button. The creators have access to the Back button, the edit and delete buttons.

11. The Edit page is almost the same as the create page difference being the Update and Cancel buttons;

12. Error Page is set to be shown when the users redirect to an unavailable page and not a page that requires authorization, those attempts will lead to the Login page.

IV. Problems and Future. 

13. The current problems of the website is that it is strictly tailered to selling guitars and the forms are not suited for other equipment which may be implemented in the future. The username is strictly cosmetic and does not serve any purpose currently and may be a part of forum or comment section in the future. The website does not use the browser history and therefore the back buttons will redirect the client to the 1st page regardless if they were previously on the 3rd, 4th, etc. 