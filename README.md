#Twitter and IDOL On Demand Sample using Node.JS, Express framework and Socket.IO

This Node.js web application (using Express web framework) takes a search term entered by the user and searches Twitter for the first 20 matching results. These results are then analyzed by the HP IDOL On Demand Sentiment Analysis API and a negative, positive or neutral sentiment is produced based on the tweet contents. This sample is a demonstration of the requirements to build an application with more ‘moving parts’ than a basic “Hello World’ type application.

#Prerequisites

If you are missing any of these items, you must install them.

• Access to an Application Lifecycle Service (ALS) Cluster<br>
• The Helion command-line interface (CLI) must be installed.<br>
• Access to the web-based Helion Management Console.<br>
• A free HP Idol on Demand API Key (this can be accessed via HP IDOL On Demand page and creating an account)<br>
• Twitter development API keys (available from the Twitter Developers section – you will need to create an account, and a new application to retrieve these keys)<br>
• Node installed (if testing locally) – This can be installed from the Node.JS site<br>
 
#Download the Application Files

Clone this repository.


#About the Application Files

To create a CloudFoundry™ app in Node.js, the only mandatory files are:

•         The main .js file<br>
•         manifest.yml<br>
•         package.json<br>
•         Procfile<br>

Manifest.yml is a configuration file used to specify settings that would otherwise be specified by a command-line tool.
The package.json file is your standard metadata file. Name and version are the only required fields.
The Procfile tells the Helion Development Platform how to run your Node.js application. An extremely simple one is included with this sample.

#Deploy the Application (Locally)

1.    Create the following system environment variables with the appropriate values (retrieved from the Twitter Dev site above):
CONSUMER_KEY
CONSUMER_SECRET
ACCESS_TOKEN_KEY
ACCESS_TOKEN_SECRET
2.    Create the following system environment variable with the appropriate value (retrieved from the Idol on Demand site above)
IDOL_API
3.    Run the following command from the source files folder:
node app.js
4.    Open a web browser and navigate to : http://localhost:3000
5.    Enter a search term and click the search button


#Deploy the Application (Helion Development Platform)

Note: Application Lifecycle Service clusters that require an upstream HTTP proxy to access the internet will need to be made aware of the proxy. The sample applications require access to the Internet in order to download dependent packages.
Use the Helion client to deploy your app to Helion Development Platform. If you have Eclipse installed, you have the option to use the plugin.

1.    Open the manifest.yml file from the source files and change the app-dir value to the source files path.
2. Fill in the missing entries for the twitter credentials and the IDOL OnDemand API Key. Save the manifest file.
2.    Open the Helion command-line interface (CLI)
3.    Ensure that you are targeting your desired environment. 
If you are not, execute
helion target https://api.xx.xx.xx.xx.example.com2.
4.    Ensure that you are logged in to your desired environment. 
If you are not, execute
helion login
5.    If you are not already there, cd to the root directory of the sample.
6.    Deploy the application by using the command:
helion push
7.    Accept any default values that you may be prompted for. 
Note: By default, ALS Clusters are configured with two domains (private and public). In some situations, the Helion CLI may prompt you to select a target domain. If prompted, select the public domain from the given list (i.e..xxx.xxx.xxx.xxx.xip.io)


#Run the Application

1.    Open the Helion Management Console. 
The Management Console is the web-based administrative interface that can be reached by typing the ALS endpoint URL into a browser window.
2.    Click Applications.
3.    If the file push was successful, you should see node-twitter-idol in the list of available applications.
4.    The status of the application should be Started. Click the name of the application to launch it.
5.    In the upper right-hand corner, click View App.
6.    You should see a basic web page with a search field and button
7.    Searching for a term will pull results back from Twitter and their associated sentiment. If you see no values then make sure you filled in the correct credentials in the ENV section of the manifest.yml file.
8.    

