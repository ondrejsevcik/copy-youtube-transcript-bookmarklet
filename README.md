# Copy YouTube Transcript Bookmarklet

A simple bookmarklet that will copy the YouTube video transcript to your clipboard.

## How to Use It

1. Create new bookmark in your borwser and paste following into the URL field. 
   - Alternatively, create your own using [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/).
```
javascript:(function()%7B!async%20function()%7Bconst%20e%3Ddocument.querySelector(%22.ytd-text-inline-expander%22)%3Be%26%26(e.click()%2Cawait%20new%20Promise((e%3D%3EsetTimeout(e%2C500))))%3Bconst%20t%3DArray.from(document.querySelectorAll(%22button%22)).find((e%3D%3Ee.textContent.includes(%22Show%20transcript%22)))%3Bt%26%26t.click()%3Bconst%20r%3Dawait%20function(e%2Ct%3D500)%7Breturn%20new%20Promise(((r%2Cn)%3D%3E%7Blet%20o%3Dnull%2Ci%3Dnull%3Bo%3DsetInterval((()%3D%3E%7Bconst%20t%3Ddocument.querySelector(e)%3Bt%26%26(clearInterval(o)%2CclearTimeout(i)%2Cr(t))%7D)%2Ct)%2Ci%3DsetTimeout((()%3D%3E%7BclearInterval(o)%3Bconst%20t%3Dnew%20Error(%60Element%20with%20selector%20%22%24%7Be%7D%22%20was%20not%20found%20within%20the%20timeout%20period.%60)%3Bn(t)%7D)%2C5e3)%7D))%7D(%22ytd-transcript-segment-list-renderer%22)%3Bif(0%3D%3D%3Dr.length)return%20void%20alert(%22No%20transcript%20found.%20Make%20sure%20you've%20opened%20the%20transcript%20panel.%22)%3Blet%20n%3Dr.innerText%3Bnavigator.clipboard.writeText(n.trim()).then((()%3D%3E%7Balert(%22Transcript%20copied%20to%20clipboard!%22)%7D)).catch((e%3D%3E%7Bconsole.error(%22Failed%20to%20copy%20transcript%3A%20%22%2Ce)%2Calert(%22Failed%20to%20copy%20transcript.%20See%20console%20for%20details.%22)%7D))%7D()%3B%7D)()%3B
```

2. Open a YouTube video in your browser.
3. Click on the bookmark.
4. Congratulations! You now have the video transcript in your clipboard.
5. Paste the transcript into the AI tool of your choice and request a summary.
