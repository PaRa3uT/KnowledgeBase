# [Slax](https://www.slax.org)
## Cheatcodes (Boot parameters)
To use cheatcodes, press Esc key to activate boot menu during Slax startup as usual, and when you see the boot menu, press Tab. A command line will appear at the bottom of the screen, which you can edit or add new boot parameters at the end:
Cheatcode | Meaning | Example
----------|---------|---------
from=	    | Load Slax data from specified directory or even from an ISO file | from=/slax7/<br/> from=/Downloads/slax.iso<br/> from=http://domain.com/slax.iso
noload=	  | Disable loading of particular .sb modules specify as regular expression	| noload=04-apps<br/> noload=apps\|chromium<br/> noload=04\|05
nosound	  | Mute sound on startup	| nosound
toram	    | Activate Copy to RAM feature | slax.flags=toram
perch     | Activate Persistent Changes feature | slax.flags=toram,perch
text      | Disable starting of X and stay in textmode console only | text
debug     | Enable Slax startup debugging	| debug
