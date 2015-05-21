
<div class=WordSection1>

<p class=MsoNormal style='mso-margin-top-alt:auto;margin-bottom:7.5pt;
line-height:27.0pt;mso-outline-level:1'><span style='font-size:24.0pt;
font-family:"HP Simplified",sans-serif;mso-fareast-font-family:"Times New Roman";
mso-bidi-font-family:"Times New Roman";color:black;mso-font-kerning:18.0pt'>Twitter
and IDOL On Demand Sample using Node.JS and Express framework<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>This Node.js web application (using Express
web framework) takes a search term entered by the user and searches Twitter for
the first 20 matching results. These results are then analyzed by the HP IDOL
On Demand Sentiment Analysis API and a negative, positive or neutral sentiment
is produced based on the tweet contents. This sample is a demonstration of the requirements
to build an application with more ‘moving parts’ than a basic “Hello World’
type application. <o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;margin-bottom:7.5pt;
line-height:27.0pt;mso-outline-level:2'><span style='font-size:19.5pt;
font-family:"HP Simplified",sans-serif;mso-fareast-font-family:"Times New Roman";
mso-bidi-font-family:"Times New Roman";color:black'>Prerequisites<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>If you are missing any of these items, you
must&nbsp;</span><a href="http://docs.hpcloud.com/helion/devplatform/appdev/"><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#0096D6'>install them</span></a><span style='font-size:
12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'>.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l1 level1 lfo1;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Access to an
Application Lifecycle Service (ALS)&nbsp;</span><a
href="http://docs.hpcloud.com/als/v1/admin/cluster/"><span style='font-size:
12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#0096D6'>Cluster</span></a><span style='font-size:12.0pt;font-family:
"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l1 level1 lfo1;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>The&nbsp;<span
class=SpellE><a href="http://docs.hpcloud.com/als/v1/user/client/"><span
style='color:#0096D6'>Helion</span><span style='color:#0096D6'> comm</span><span
style='color:#0096D6'>and-line interface (CLI)</span></a></span>&nbsp;must be
installed.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l1 level1 lfo1;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Access to the
web-based&nbsp;<span class=SpellE><a
href="http://docs.hpcloud.com/als/v1/user/console/"><span style='color:#0096D6'>Helion</span><span
style='color:#0096D6'> Management Console</span></a></span>.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l1 level1 lfo1;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>A free HP Idol on
Demand API Key (this can be accessed via </span><a
href="https://www.idolondemand.com/signup.html"><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman"'>HP
IDOL On Demand</span></a><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'> page and creating an
account)<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l1 level1 lfo1;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Twitter development
API keys (available from the </span><a href="https://dev.twitter.com/"><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman"'>Twitter Developers section</span></a><span style='font-size:
12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'> – you will need to create an account, and a new application to
retrieve these keys)<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l1 level1 lfo1;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Node installed (if
testing locally) – This can be installed from the <a
href="https://nodejs.org/download/">Node.JS site</a><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
line-height:16.5pt'><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;margin-bottom:7.5pt;
line-height:27.0pt;mso-outline-level:2'><span style='font-size:19.5pt;
font-family:"HP Simplified",sans-serif;mso-fareast-font-family:"Times New Roman";
mso-bidi-font-family:"Times New Roman";color:black'>Download the Application
Files<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><a
href="https://github.com/nwright-nz/Twitter-Sentiment-Analysis---NodeJS-IDOL"><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#0096D6'>Click here to access the code repository.</span></a><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;margin-bottom:7.5pt;
line-height:18.0pt;mso-outline-level:3'><b><span style='font-size:15.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#404040'>About the Application Files<o:p></o:p></span></b></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>To create a <span class=SpellE>CloudFoundry</span>™
app in Node.js, the only mandatory files are:<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l5 level1 lfo2;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>The main .<span
class=SpellE>js</span> file<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l5 level1 lfo2;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'>manifest.yml</span></span><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l5 level1 lfo2;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'>package.json</span></span><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l5 level1 lfo2;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:10.0pt;
mso-bidi-font-size:12.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;
mso-bidi-font-family:Symbol;color:#222222'><span style='mso-list:Ignore'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'>Procfile</span></span><span style='font-size:12.0pt;font-family:
"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><span
class=SpellE><i><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Manifest.yml</span></i></span><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>&nbsp;is a configuration file used to specify
settings that would otherwise be specified by a command-line tool.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>The&nbsp;<span class=SpellE><i>package.json</i></span>&nbsp;file
is your standard metadata file.&nbsp;<b>Name</b>&nbsp;and&nbsp;<b>version</b>&nbsp;are
the only required fields.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>The&nbsp;<span class=SpellE><i>Procfile</i></span>&nbsp;tells
the <span class=SpellE>Helion</span> Development Platform how to run your
Node.js application. An extremely simple one is included with this sample.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;margin-bottom:7.5pt;
line-height:27.0pt;mso-outline-level:2'><span style='font-size:19.5pt;
font-family:"HP Simplified",sans-serif;mso-fareast-font-family:"Times New Roman";
mso-bidi-font-family:"Times New Roman";color:black'>Deploy the Application
(Locally)<o:p></o:p></span></p>

<p class=MsoListParagraphCxSpFirst style='mso-margin-bottom-alt:auto;
mso-add-space:auto;text-indent:-18.0pt;line-height:16.5pt;mso-list:l3 level1 lfo6'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Create the following
system environment variables with the appropriate values (retrieved from the
Twitter <span class=SpellE>Dev</span> site above):<br>
CONSUMER_KEY<br>
CONSUMER_SECRET<br>
ACCESS_TOKEN_KEY<br>
ACCESS_TOKEN_SECRET<o:p></o:p></span></p>

<p class=MsoListParagraphCxSpMiddle style='mso-margin-bottom-alt:auto;
mso-add-space:auto;text-indent:-18.0pt;line-height:16.5pt;mso-list:l3 level1 lfo6'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Create the following
system environment variable with the appropriate value (retrieved from the Idol
on Demand site above)<br>
IDOL_API<o:p></o:p></span></p>

<p class=MsoListParagraphCxSpMiddle style='mso-margin-bottom-alt:auto;
mso-add-space:auto;text-indent:-18.0pt;line-height:16.5pt;mso-list:l3 level1 lfo6'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Run the following
command from the source files folder:<br>
node app.js<o:p></o:p></span></p>

<p class=MsoListParagraphCxSpMiddle style='mso-margin-bottom-alt:auto;
mso-add-space:auto;text-indent:-18.0pt;line-height:16.5pt;mso-list:l3 level1 lfo6'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Open a web browser and
navigate to : <a href="http://localhost:3000">http://localhost:3000</a><o:p></o:p></span></p>

<p class=MsoListParagraphCxSpLast style='mso-margin-bottom-alt:auto;mso-add-space:
auto;text-indent:-18.0pt;line-height:16.5pt;mso-list:l3 level1 lfo6'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Enter a search term
and click the search button<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;margin-bottom:7.5pt;
line-height:27.0pt;mso-outline-level:2'><span style='font-size:19.5pt;
font-family:"HP Simplified",sans-serif;mso-fareast-font-family:"Times New Roman";
mso-bidi-font-family:"Times New Roman";color:black'>Deploy the Application (<span
class=SpellE>Helion</span> Development Platform)<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><b><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>Note</span></b><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'>: Application Lifecycle Service clusters that require an
upstream HTTP proxy to access the internet will need to be&nbsp;</span><a
href="http://docs.hpcloud.com/als/v1/admin/server/configuration/#staging-cache-app-http-proxy"><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#0096D6'>made aware of the proxy</span></a><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>. The sample applications require access to
the Internet in order to download dependent packages.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;line-height:16.5pt'><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>Use the <span class=SpellE>Helion</span>
client to deploy your app to <span class=SpellE>Helion</span> Development
Platform. If you have Eclipse installed, you have the option to use the&nbsp;</span><a
href="http://docs.hpcloud.com/helion/devplatform/eclipse/"><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#0096D6'>plugin</span></a><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'>.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:Arial;color:#222222'><span
style='mso-list:Ignore'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Open the <span
class=SpellE>manifest.yml</span> file from the source files and change the app-<span
class=SpellE>dir</span> value to the source files path. Save the manifest file.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:Arial;color:#222222'><span
style='mso-list:Ignore'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Open the&nbsp;<span
class=SpellE><a href="http://docs.hpcloud.com/als/v1/user/reference/client-ref/"><span
style='color:#0096D6'>Helion</span><span style='color:#0096D6'> command-line
interface (CLI)</span></a></span><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Ensure that you are
targeting your desired environment.&nbsp;<br>
If you are not, execute<o:p></o:p></span></p>

<div style='mso-element:para-border-div;border:solid #CCCCCC 1.0pt;mso-border-alt:
solid #CCCCCC .75pt;padding:8.0pt 8.0pt 8.0pt 8.0pt'>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
16.5pt;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
border:none;mso-border-alt:solid #CCCCCC .75pt;padding:0cm;mso-padding-alt:
8.0pt 8.0pt 8.0pt 8.0pt'><span class=SpellE><span class=GramE><span
style='font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#333333;background:white'>helion</span></span></span><span
style='font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#333333;background:white'> target https</span><span style='font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#822980;background:white'>:</span><span style='font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:"Times New Roman";color:#999999;
background:white'>//api.xx.xx.xx.xx.example.com2. </span><span
style='font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#EEEEEE'><o:p></o:p></span></p>

</div>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Ensure that you are
logged in to your desired environment.&nbsp;<br>
If you are not, execute<o:p></o:p></span></p>

<div style='mso-element:para-border-div;border:solid #CCCCCC 1.0pt;mso-border-alt:
solid #CCCCCC .75pt;padding:8.0pt 8.0pt 8.0pt 8.0pt'>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
16.5pt;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
border:none;mso-border-alt:solid #CCCCCC .75pt;padding:0cm;mso-padding-alt:
8.0pt 8.0pt 8.0pt 8.0pt'><span class=SpellE><span class=GramE><span
style='font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#333333;background:white'>helion</span></span></span><span
style='font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#333333;background:white'> login</span><span style='font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:"Times New Roman";color:#EEEEEE'><o:p></o:p></span></p>

</div>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>If you are not already
there,&nbsp;</span><span style='font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";color:#333333;background:white'>cd</span><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'>&nbsp;to the root directory of the sample.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Deploy the application
by using the command:<o:p></o:p></span></p>

<div style='mso-element:para-border-div;border:solid #CCCCCC 1.0pt;mso-border-alt:
solid #CCCCCC .75pt;padding:8.0pt 8.0pt 8.0pt 8.0pt'>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
16.5pt;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
border:none;mso-border-alt:solid #CCCCCC .75pt;padding:0cm;mso-padding-alt:
8.0pt 8.0pt 8.0pt 8.0pt'><span class=SpellE><span class=GramE><span
style='font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#333333;background:white'>helion</span></span></span><span
style='font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#333333;background:white'> push </span><span style='font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:"Times New Roman";color:#EEEEEE'><o:p></o:p></span></p>

</div>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Accept any default
values that you may be prompted for.&nbsp;<br>
<b>Note</b>: By default, ALS Clusters are configured with two domains (private
and public). In some situations, the <span class=SpellE>Helion</span> CLI may
prompt you to select a target domain. If prompted, select the public domain
from the given list (<span class=SpellE>i.e.<i>.xxx.xxx.xxx.xxx.xip.io</i></span>)<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Once the application
has successfully pushed to <span class=SpellE>Helion</span> Development
Platform, you need to create environment variables to hold you Twitter and IDOL
on Demand API Keys<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Open a web browser and
navigate to your <span class=SpellE>Helion</span> Development Platform
environment (<span class=SpellE>ie</span> </span><span style='font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:"Times New Roman";color:#333333;
background:white'><a href="https://api.xx.xx.xx.xx.example.com2">https://api.xx.xx.xx.xx.example.com2</a></span><span
style='font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:"Times New Roman";
color:#999999;background:white'> </span><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#999999;background:white'>)</span><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>10.<span style='font:7.0pt "Times New Roman"'>
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";background:white'>Log into HDP
Environment and navigate to the Applications section</span><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>11.<span style='font:7.0pt "Times New Roman"'>
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";background:white'>Select the
appropriate application</span><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>12.<span style='font:7.0pt "Times New Roman"'>
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";background:white'>In the menu options
on the left hand side of the screen, select : Environment Variables<br
style='mso-special-character:line-break'>
<![if !supportLineBreakNewLine]><br style='mso-special-character:line-break'>
<![endif]></span><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>13.<span style='font:7.0pt "Times New Roman"'>
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";background:white'>Add the below
variables and add the appropriate values (from both the Twitter <span
class=SpellE>Dev</span> site and the IDOL on Demand API site mentioned above):</span><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
"Times New Roman";color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
line-height:16.5pt'><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>CONSUMER_KEY<br>
CONSUMER_SECRET<br>
ACCESS_TOKEN_KEY<br>
ACCESS_TOKEN_SECRET<br>
IDOL_API<br style='mso-special-character:line-break'>
<![if !supportLineBreakNewLine]><br style='mso-special-character:line-break'>
<![endif]><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-bottom-alt:auto;margin-left:18.0pt;
text-indent:-18.0pt;line-height:16.5pt;mso-list:l0 level1 lfo3;tab-stops:list 36.0pt'><![if !supportLists]><span
style='font-size:12.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
Arial;color:#222222'><span style='mso-list:Ignore'>14.<span style='font:7.0pt "Times New Roman"'>
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";background:white'>Click the save
button, then restart the application.</span><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#222222'><o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;margin-bottom:7.5pt;
line-height:27.0pt;mso-outline-level:2'><span style='font-size:19.5pt;
font-family:"HP Simplified",sans-serif;mso-fareast-font-family:"Times New Roman";
mso-bidi-font-family:"Times New Roman";color:black'>Run the Application<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l4 level1 lfo4;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:Arial;color:#222222'><span
style='mso-list:Ignore'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Open the <span
class=SpellE>Helion</span> Management Console.&nbsp;<br>
The Management Console is the web-based administrative interface that can be
reached by typing the ALS endpoint URL into a browser window.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l4 level1 lfo4;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:Arial;color:#222222'><span
style='mso-list:Ignore'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>Click&nbsp;<b>Applications</b>.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l4 level1 lfo4;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:Arial;color:#222222'><span
style='mso-list:Ignore'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>If the file push was
successful, you should see&nbsp;<b style='mso-bidi-font-weight:normal'>node-twitter-idol</b>&nbsp;in
the list of available applications.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l4 level1 lfo4;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:Arial;color:#222222'><span
style='mso-list:Ignore'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>The status of the
application should be&nbsp;<span class=GramE><b>Started</b></span>. Click the
name of the application to launch it.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l4 level1 lfo4;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:Arial;color:#222222'><span
style='mso-list:Ignore'>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>In the upper
right-hand corner, click&nbsp;<b>View App</b>.<o:p></o:p></span></p>

<p class=MsoNormal style='mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
margin-left:18.0pt;text-indent:-18.0pt;line-height:16.5pt;mso-list:l4 level1 lfo4;
tab-stops:list 36.0pt'><![if !supportLists]><span style='font-size:12.0pt;
font-family:"Arial",sans-serif;mso-fareast-font-family:Arial;color:#222222'><span
style='mso-list:Ignore'>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:12.0pt;font-family:"Arial",sans-serif;
mso-fareast-font-family:"Times New Roman";color:#222222'>You should see a basic
web page with a search field and button <o:p></o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

</div>

</body>

</html>



