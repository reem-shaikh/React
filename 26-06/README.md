### Article Newspaper app 
### Article app 
> Light Mode
![](lightmode.PNG)

> Dark Mode 
![](darkmode.PNG)

#### Tech integrated:
- react-redux
- react-router
- Material-UI 
- axios 

#### Features integrated:
- renders cards with specific card details
- like and unlike implementation via react-redux
- light and dark mode implementation redux
- commenting integration underneath the div

#### Note: 
Initially I used the newsapi to render the json content, but after deployment i was getting this getting this error: Failed to load resource: the server responded with a status of 426 (). I read online to find a fix, but figured out, that they only support their API's on localhost and they removed their support from hosting services. Thats why I created a seperate JSON file with the same endpoint data and fetched it via axios. 
