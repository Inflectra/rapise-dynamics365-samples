


function Test()
{
	StartNewOrder();
	CompleteOrder();
	VerifyOrderCreated();
	DeleteOrder();
}

g_load_libraries=["%g_browserLibrary:Chrome HTML%", "DomDynamicsCrm"];


