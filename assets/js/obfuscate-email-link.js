// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "IXLFr4@svB.5xB"
  key = "Ny6wxToP5RiKBIjWcbm0LQtVrkHZ1JszvC9Y4qXhfGl2OU8DMa3ndFApe7SEug"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
  document.write("<a rel='foaf:account' alt='email' href='mailto:"+link+"' onclick='recordOutboundLink(this, \'Outbound Links\', \'email\'); return false;'><span class='showtooltip' title='email me'><i class='icon-envelope-alt'></i></span></a>")
      
}

