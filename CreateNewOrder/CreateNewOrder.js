


function Test()
{
	// Deprecated. This test is for old version of Dynamics CRM which is currently superceeded by Unified Interface.
	Navigator.Open("");
	StartNewOrder();
	CompleteOrder();
	VerifyOrderCreated();
	DeleteOrder();
}

g_load_libraries=["%g_browserLibrary:Chrome HTML%", "DomDynamicsCrm"];


