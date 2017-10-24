


function Test()
{
	g_chromeSingleWindow = true;
	Navigator.Open("");
	CreateNewLead();
	DeleteLead();
}

g_load_libraries=["%g_browserLibrary:Chrome HTML%", "DomDynamicsCrm"];


