## Chalkboard-Pictionary

Link to [Live Site](https://sketch-something.herokuapp.com/#/)

* Background and Overview
    * Motivation for project
        * Clever display of front-end chops
        * Fun way to play pictionary with friends
    * High level overview
        * created a drawing canvas for users
        * randomly select a topic to draw for their partner
* Functionality and MVP Features
    * create the chalkboard canvas backdrop using js/css
    * create the clear chalkboard button, clears off the board
    * create the medium selector for the chalkboard
    * allow for upload of user images to the local storage of the users machine ( so that they can use this a medium )
    * send finished image to their pictionary partner
* Architecture and Technologies
    * Technology 1
        * javascript - creating interactive websites will require clever use of javascript window event listeners
    * Technology 2
        * cascading style sheets - creates an appealing backdrop that's reactive to user events
    * Technology 3
        * websockets - to send image over to other user (potentially store image in user's local storage)
    
    ...
Implementation Timeline
    * Day 1 - 2
        * wireframes and proposal
        * gets user canvas ready for user to draw and select medium
        * created clear board button that resets the drawing pad
        * save current board to an array of boards into local storage
    * Day 3 - 4
        * allow users the ability to upload medium and also download finish products of the drawing
    * Day 4 (bonus)
        * allow user to send finished product to another user so they can guess what the picture is
