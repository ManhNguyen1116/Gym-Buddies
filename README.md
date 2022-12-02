# Gym-Buddies

This is a short guide on how to get the project environment setup.
There are three different things you have to run at the same time.
***DOWNLOAD TRACK-SERVER FROM MOODLE. IT IS IN LECTURES SECTION BETWEEN LECTURES 19 and 20!
1) Setting up MongoDB
	*I invited each of your college emails to my MongoDB project with project owner permissions.
	*Join the project and go to the database cluster and click connect on the right. 
	*You will need to make a user to connect the database, and choose the connect your application option.
	*Go to track-server directory, and open src for the server code.
	*Copy the connection string and paste it into index.js line 16 as the mongoUri string, 
	 and replace the <password> with your atlas user's password.
	*Use a command-line terminal like Git Bash or command prompt in the track-server directory
	 and use the 'npm run dev' command to run the server.
2) Setting up our app.
	*You just need to do expo start to start our app and connect with your mobile device.
	*However, you have to install and use ngrok to make requests to our server. https://ngrok.com/
	*Sign-up to ngrok, log-in, download it, and copy your authtoken from ngrok.
	*Move ngrok.exe into gym-buddies directory, open it, and run this command 'ngrok authtoken [YOUR TOKEN]'
	*Then run 'ngrok http 3000'
	*You'll then have a window where it tells you your account, version, region etc. You want to look at forwarding.
	*Copy the URL (The URL ending in ngrok.io, not http://localhost:3000).
	*Go to tracker.js which is in GYM-BUDDIES/src/api/tracker.js and paste as baseURL in line 4.
	****For ngrok the forwarding URL will change, and when it changes, you will have to 
	    change the baseURL to accomodate this. 
3) That is pretty much it. The point of this is for everyone to realize that we have to be running three different things at once:
	track-server, gym-buddy, and ngrok 
	*So you will do npm start to start the track server, expo start to start gym-buddy, and the ngrok http 3000 
	 and URL change.

***run 'npm install --legacy-peer-deps' for node modules
***go to node_modules/react-navigation-tabs/lib-module/utils/withDimensions.js and comment out line 57 if signout is acting funny

(These are just the commands used to build the node modules)
npm install react-navigation --legacy-peer-deps  
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps
npm install react-navigation --legacy-peer-deps      
npm install react-navigation-tabs --legacy-peer-deps
npm install react-native-elements --legacy-peer-deps
npm install axios --legacy-peer-deps
expo r -c
ngrok http 3000
npm install @react-native-async-storage/async-storage --legacy-peer-deps
npm install react-native-maps --legacy-peer-deps
npm install expo-location --legacy-peer-deps





