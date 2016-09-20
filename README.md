# Guiltless

Guiltless is an interactive web application that recommends themed treat destinations for food and drinks based on alliterative suggestions for the day of the week, a user’s starting location, and preferred walking distance. Most importantly, Guiltless uses humor (and a bit of sass) to eliminate decision fatigue by providing the user with fewer, simpler choices and encouraging users to explore the city by walking.

https://guiltless.herokuapp.com/

## Table of Contents
- [Tech stack](#tech)
- [Overview](#overview)
- [How it works](#how)
- [Team](#team)

### <a name="tech"></a>Tech stack
- Python
- Flask
- Javascript
- jQuery
- AJAX
- JSON
- Jinja2
- Bootstrap
- HTML
- CSS
- Google Maps API
- Yelp API

Dependencies are listed in requirements.txt

### <a name="overview"></a>Overview
Guiltless was built by five teammates during the one-day [All-Women Hackathon in San Francisco](https://www.eventbrite.com/e/the-all-women-hackathon-san-francisco-tickets-26387976147#) hosted by The Expat Woman on September 10, 2016. In line with the theme "San Francisco City Hack Challenges," Guiltless encourages SF residents, new expats, and tourists to support local businesses and explore new neighborhoods.

### <a name="how"></a>How it works
Users can enter a custom starting address or use their current location, which is auto-filled when the homepage loads. Themed destinations correspond to each day of the week (on Tuesday, users can select Tacos, Tequila, or Tofu) and the user's walking distance is measured by a hop(1/2 mile), skip (1 mile), or a jump (1 1/2 miles).


![homepage](https://cloud.githubusercontent.com/assets/18318386/18684683/df060b6a-7f29-11e6-92b7-f8cdda4cef47.png)


The results page displays three restaurants that match the user's search. A users can learn more about the restaurant by clicking on the magnifying glass, which opens a map showing the business' location with a link to their Yelp page.

![search](https://cloud.githubusercontent.com/assets/18318386/18684684/e19e344c-7f29-11e6-9d1c-c189151f78eb.png)

### <a name="team"></a>Team
Guiltness was made by software engineers [Allison Lyon](https://www.linkedin.com/in/allisonplyon), [Christina Long](https://www.linkedin.com/in/cvlong), [Dori Runyon](https://www.linkedin.com/in/dorirunyon), and [Veronica Erick](https://www.linkedin.com/in/veronicaerick) with designer [Amy Kircher](https://www.linkedin.com/in/amykircher).
