stylesheet
  : [ CHARSET_SYM STRING ';' ]?
    [ import ]
    [ [ ruleset | media | page ] ]
  ;

@{I}{M}{P}{O}{R}{T}	{return IMPORT_SYM;}
@{P}{A}{G}{E}		{return PAGE_SYM;}
@{M}{E}{D}{I}{A}	{return MEDIA_SYM;}
"@charset "		{return CHARSET_SYM;}
