# Bots Client SDK for JavaScript v 18.4.3.0 Readme 
## Download the SDK
The Bots Client SDK for JavaScript lets you add a messaging widget that can be added to any web page. To get this SDK, download `bots-client-sdk-js-18.2.3.0.zip` from the [Oracle Technology Network’s OMCE downloads page](http://www.oracle.com/technetwork/topics/cloud/downloads/mobile-suite-3636471.html). 
## Configuration
To improve performance, the Bots library, which is comprised of multiple resources, is fetched at runtime. For that reason, the URL where the library's static files are hosted (that is, the public path), is hard coded in many places.

To configure the library for your environment, run:

```
./configure <new-public-path>
```

The script will generate a folder with the configured project in it.

## Examples
### Local testing setup
The static files are hosted at `http://localhost:8000/static/` and the script is run in the `/home/your-name/` folder.

```
./configure http://localhost:8000/static/
```

Files will be available at `/home/your-name/http:__localhost:8000_static_/`.


### Production setup
The static files are hosted at `https://cdn.acme.org/`.

```
./configure https://cdn.acme.org/
```

Files will be available at `/home/your-name/https:__cdn.acme.org_/`.

## Deployment
1. Put all of the files from the generated folder at the root of the storage after `https://placeholder.public.path/`.
For example, if your files are hosted at `http://localhost:8000/static/` copy all the files to `static` folder of your local server.
2. If your storage is behind a CDN, make sure to issue a cache invalidation for `https://placeholder.public.path/loccurredson`.
3. Make sure your [server allows CORS requests](https://enable-cors.org/server.html).
4. Use the instructions from Bots Web Messenger section to test your deployment.

# Bots Web Messenger

The Bots Web Messenger will add live web messaging to your website or web app.

## Usage

### Script Tag

Add the following code towards the end of the `head` section on your page and replace `<sdk-folder-url>` with the URL where the SDK is hosted.

```html
<script>
    !function(e,t,n,r){
        function s(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var n=t.getElementsByTagName("script")[0],r=t.createElement("script");r.async=!0,r.src=e.url,n.parentNode.insertBefore(r,n)}}catch(e){}}var o,p,a,i=[],c=[];e[n]={init:function(){o=arguments;var e={then:function(t){return c.push({type:"t",next:t}),e},catch:function(t){return c.push({type:"c",next:t}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},e.__onWebMessengerHostReady__=function(t){if(delete e.__onWebMessengerHostReady__,e[n]=t,o)for(var r=t.init.apply(t,o),s=0;s<c.length;s++){var u=c[s];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&t.render.apply(t,p),a&&t.destroy.apply(t,a);for(s=0;s<i.length;s++)t.on.apply(t,i[s])};var u=new XMLHttpRequest;u.addEventListener("load",s),u.open("GET",r+"/loader.json",!0),u.responseType="json",u.send()
    }(window,document,"Bots", "<sdk-folder-url>");
    </script>


</code>


Next, initialize the Web Messenger by placing this snippet towards the end of the `body` section of your page and replace `<app-id>` with your app Id at the end of the script.

      
     <script>
          Bots.init({appId: '<app-id>'});
     </script>

## Browser support

Web Messenger supports all popular browsers.

#### Desktop versions

- Chrome: Latest and one major version behind
- Edge:  Latest and one major version behind
- Firefox:  Latest and one major version behind
- Internet Explorer: 11+
- Safari:  Latest and one major version behind

#### Mobile versions

- Stock browser on Android 4.1+
- Safari on iOS 8+

#### Other browsers

Web Messenger is likely compatible with other and older browsers but we only test against the versions above.

## API

### Individual functions

#### init(options)
Initializes the Bots widget in the web page using the specified options. It returns a promise that will resolve when the Web Messenger is ready. Note that except`on` and `off`, all methods needs to be called after a successful `init`.

##### Options

    | Option                   | Optional? | Default Value | Description 
    |--------------------------|-----------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
    | appId                    | No        |  --           | Your app id                                                                                             |
    | locale                   | Yes       |  en-US        | Locale used for date formatting using the `<language>-<COUNTRY>` format. Language codes can be found [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and country codes [here](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). <br /> **Note 1 : ** The country part is optional, and if a country is either not recognized or supported, it will fallback to using the generic language. If the language isn't supported, it will fallback to `en-US`. <br /> **Note 2:** this is *only* used for date formatting and doesn't provide built-in translations for Web Messenger. |
    | soundNotificationEnabled | Yes       |  true         | Enables the sound notification for new messages |
    | imageUploadEnabled       | Yes       |  true         | Enables the image upload feature. |
    | embedded                 | Yes       |  False        | Tells the widget it will be embedded. (see Embedded section below) |
    | displayStyle             | Yes       |  button       | Choose how the messenger will appear on your website. Must be either `button` or `tab`.
    | buttonIconUrl            | Yes       |  --   .       | When the `displayStyle` is `button`, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
    | buttonWidth              | Yes       |  58px         | When the `displayStyle` is `button`, you have the option of specifying the button width.
    | buttonHeight             | Yes       |  58px         | When the `displayStyle` is `button`, you have the option of specifying the button height.
    | businessName             | Yes       |  --           | A custom business name.
    | businessIconUrl          | Yes       |  --           | A custom business icon url. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
    | backgroundImageUrl       | Yes       |  --           | A background image url for the conversation. Image will be tiled to fit the window.
    | customColors             | Yes       |  See example. | Colors used in the Web Messenger UI. |
    | customText               | Yes       |  See example. | Strings used in the widget UI. You can use these to either customize the text or translate it. If something is between `{}`, it's a variable and needs to stay in your customized text if you want to use it. |

##### customColors


    | Option            | Optional? | Default value | Description 
    | ----------------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
    | brandColor        | Yes       | `65758e`      | This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.    |
    | conversationColor | Yes       | `0099ff`      | This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color. |
    | actionColor       | Yes       | `0099ff`      | This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.                       |



##### Example

  
    var initPromise = Bots.init({
        appId: '<app-id>',
        locale: 'en-US',
    
    customColors: {
        brandColor: '65758e',
        conversationColor: '65758e',
        actionColor: '65758e',
    },

    customText: {
        actionPostbackError: 'An error occurred while processing your action. Please try again.',
        clickToRetry: 'Message not delivered. Click to retry.',
        conversationTimestampHeaderFormat: 'MMMM D YYYY, h:mm A',
        fetchHistory: 'Load more',
        fetchingHistory: 'Retrieving history...',
        headerText: 'How can we help?',
        inputPlaceholder: 'Type a message...',
        invalidFileError: 'Only images are supported. Choose a file with a supported extension (jpg, jpeg, png, gif, or bmp).',
        introductionText: 'We\'re here to talk, so ask us anything!',
        locationNotSupported: 'Your browser does not support location services or it’s been disabled. Please type your location instead.',
        locationSecurityRestriction: 'This website cannot access your location. Please type your location instead.',
        locationSendingFailed: 'Could not send location',
        locationServicesDenied: 'This website cannot access your location. Allow access in your settings or type your location instead.',
        messageError: 'An error occurred while sending your message. Please try again.',
        messageIndicatorTitlePlural: '({count}) New messages',
        messageIndicatorTitleSingular: '({count}) New message',
        messageRelativeTimeDay: '{value}d ago',
        messageRelativeTimeHour: '{value}h ago',
        messageRelativeTimeJustNow: 'just now',
        messageRelativeTimeMinute: '{value}m ago',
        messageTimestampFormat: 'hh:mm A',
        messageSending: 'Sending...',
        messageDelivered: 'Delivered',
        sendButtonText: 'Send',
        settingsHeaderText: 'Settings',
        tapToRetry: 'Message not delivered. Tap to retry.',
        unsupportedMessageType: 'Unsupported message type.',
        unsupportedActionType: 'Unsupported action type.'
      }
    });


    initPromise.then(function() {
        // do something
     });

    // pass it around...

    initPromise.then(function() {
        //do something else
    });
 
 

#### open()
Opens the conversation widget (noop when embedded)

```javascript
Bots.open();
```

#### close()
Closes the conversation widget (noop when embedded)

```javascript
Bots.close();
```

#### isOpened()
Tells if the widget is currently opened or closed.

```javascript
Bots.isOpened();
```

#### destroy()
Destroys the Web Messenger and makes it disappear. The Web Messenger has to be reinitialized with `init` to be working again because it also clears up the app id from the Web Messenger. It will also unbind all listeners you might have with `Bots.on`.

```
Bots.destroy();
```

#### sendMessage(message)
Sends a message on the user's behalf

```javascript
Bots.sendMessage({
    type: 'text',
    text: 'hello'
});

// OR

Bots.sendMessage('hello');
```

#### triggerPostback(actionId)
Trigger a postback action on the user's behalf.
The `actionId` is the `_id` property of the targeted action.

If you have the `_id` of the targetted `postback` action, you can pass it directly to `triggerPostback`.

```javascript
const actionId = '5a747faa065bbe4e7804f2a4';
Bots.triggerPostback(actionId);
```

Otherwise, you can get the `_id` of an action by using `Bots.getConversation()`, e.g.

```javascript
const conversation = Bots.getConversation();

console.log(conversation.messages);
// [
//     {
//         "text": "Do you want to continue?",
//         "actions": [
//             {
//                 "payload": "text:continue",
//                 "text": "Continue conversation",
//                 "_id": "5a7c65211aaa9b61f69c95e3",
//                 "type": "postback"
//             }
//         ],
//         "type": "text",
//         "role": "appMaker",
//         "_id": "5a7c65211aaa9b61f69c95e2",
//         // ...
//     }
// ]

// Indicate to Bots SDK that the user has clicked on the "Continue conversation" postback action.
Bots.triggerPostback(conversation.messages[0].actions[0]._id);
```

#### updateUser(user)
Updates user information

```javascript
Bots.updateUser({
    givenName: 'Updated',
    surname: 'Name',
    email: 'updated@email.com',
    properties: {
      'justGotUpdated': true
    }
});
```

#### getConversation()
Returns the conversation if it exists

```javascript
var conversation = Bots.getConversation();
```

#### startConversation()
Creates a user and conversation on the server, allowing the business to reach out proactively to the user via the public API.

It is strongly recommended to only call this method in the case where a message is likely to be sent.

This method is called automatically when starting a conversation via the `sendMessage` method, or when a user sends a message via the conversation view.

If a conversation already exists for the current user, this call is a no-op.

```javascript
Bots.startConversation();
```

### Events
If you want to make sure your events are triggered, try to bind them before calling `Bots.init`.

To bind an event, use `Bots.on(<event name>, <handler>);`. To unbind events, you can either call `Bots.off(<event name>, handler)` to remove one specific handler, call `Bots.off(<event name>)` to remove all handlers for an event, or call `Bots.off()` to unbind all handlers.

#### ready
```
// This event triggers when init completes successfully... Be sure to bind before calling init!
Bots.on('ready', function(){
    console.log('the init has completed!');
});

Bots.init(...);
```

#### destroy
```
// This event triggers when the widget is destroyed.
Bots.on('destroy', function(){
    console.log('the widget is destroyed!');
});

Bots.destroy();
```

#### message:received
```
// This event triggers when the user receives a message
Bots.on('message:received', function(message) {
    console.log('the user received a message', message);
});
```

#### message:sent
```
// This event triggers when the user sends a message
Bots.on('message:sent', function(message) {
    console.log('the user sent a message', message);
});
```

#### message
```
// This event triggers when a message was added to the conversation
Bots.on('message', function(message) {
    console.log('a message was added to the conversation', message);
});
```

#### unreadCount
```
// This event triggers when the number of unread messages changes
Bots.on('unreadCount', function(unreadCount) {
    console.log('the number of unread messages was updated', unreadCount);
});
```

#### widget:opened
```
// This event triggers when the widget is opened
Bots.on('widget:opened', function() {
    console.log('Widget is opened!');
});
```

#### widget:closed
```
// This event triggers when the widget is closed
Bots.on('widget:closed', function() {
    console.log('Widget is closed!');
});
```

### Embedded mode
As described above, to activate the embedded mode, you need to pass `embedded: true` when calling `Bots.init`. By doing this, you disable the auto-rendering mechanism so you will need to call `Bots.render` manually. This method accepts a DOM element which will be used as the container where the widget will be rendered.

The embedded widget will take full width and height of the container. You must give it a height, otherwise, the widget will collapse.
##License##
Copyright (c) 2018 Oracle Corporation and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.