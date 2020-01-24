


function Test()
{
	// Deprecated. This test is for old version of Dynamics CRM which is currently superceeded by Unified Interface.
	g_chromeSingleWindow = true;
	Navigator.Open("");
	CreateNewLead();
	DeleteLead();
}

g_load_libraries=["%g_browserLibrary:Chrome HTML%", "DomDynamicsCrm"];


