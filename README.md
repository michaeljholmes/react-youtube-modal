## react-youtube-modal
A simple modal which opens with a youtube video. Modal closes when user clicks outside modal or if video finishes(default behaviour).


##Install

```javascript 1.8
npm install- react-youtube-modal --save
```
##Basic Usage

```javascript 1.8
  
 <YoutubeModal videoId="B6-WRTmjFAA" >
    <button type="button">Open Modal!</button>
 </YoutubeModal>
 ```
 
## Props
 
 Required: 
+ videoId - ID of youtube video displayed in modal

 Not Required: 
 + closeOnFinish :  Default - true
 + height : Default - 640px 
 + width : Default - 390px 
