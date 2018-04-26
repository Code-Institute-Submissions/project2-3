# Project2: Dragon Age Data Visualization
 
## Overview
 
### What is this website for?
 
This is a fan site for those who have played Dragon Age: Inquisition who want in-depth details about all the quests available throughout the game.
 
### What does it do?
 
This site has 1 page with 4 graphs using the quests data: 1 showing starting locations, 1 showing ending locations, 1 showing difficulty levels based on starting locations, and 1 showing the different categories available.
 
### How does it work
 
This site uses simple HTML and CSS. The site is also styled with **Bootstrap**. The graphs have been created using **Javascript** and DC/D3 data visualization. Heroku was used to deploy this web page. All the data is stored in JSON files in my data folder. The site can be viewed [HERE](https://dragonagequests.herokuapp.com)

### Data

All quest data (432 entries with 5 categories each) used to create the graphs were typed up by me for this specific project the weekend before project week began. 

## Features
 
### Existing Features
- 2 vertical bar charts
    - Starting Location
    - Ending Location
- 1 stacked bar chart
    - Difficulty based on starting locations
        
- 2 pie charts
    - Categories of quests
    - Count of quests that started and ended in the same location versus quests that started and ended in different locations. 
- Site tour(Intro js)
    - All code for tour should be credited to the Code Institute LMS

### Features Left to Implement
- Page for war table quests(data found in second JSON file)

## Tech Used

### Some the tech used includes:
- **HTML** and **CSS**
  - Base languages used to create the website
- **Javascript** and **DC/D3**
    - Used to create graphs
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [JQuery](https://jquery.com)
    - Use **JQuery** for bootstrap and displaying modal

## Testing
- All code used on the site has been tested to ensure everything is working as expected
- Site viewed and tested in the following browsers:
  - Google Chrome
  - Microsoft Edge
  - Mozilla Firefox
- Site link sent to and tested on multiple machines on different continents

## Contributing
 

## Credits

### Media
The photos used in this site were obtained from various locations over google and screenshots of the games
All game info and names credited to its developers (**BioWare**) and publishers (**Electronic Arts**)

## Planning
All wireframes and planning documents can be found in the stream2Project folder here in the repository. Unable to find a map file for the game.

## Color Pallete 

- Stacked bar chart
    - These colors were deliberately chosen to display the difficulty levels from easiest(blue) to hardest(purple).
- Pie chart(categories)
    - Two colors were chosen for this graph to emphasize how few main missions there are compared to all other side categories. Red was chosen for main quests while the different types of other quests are represented by different shades of blue.
