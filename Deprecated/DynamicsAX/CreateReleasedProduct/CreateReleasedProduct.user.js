//Put your custom functions and variables in this file

eval(File.IncludeOnce('%WORKDIR%/Config.js'));

/** @scenario ConfigUnitTest*/
function ConfigUnitTest()
{
	File.Delete(__configJson);
	var itemId = Global.GetProperty("LastItemId", 10);
	Tester.Assert("ItemId is 10", itemId == "10");
	var retval = Global.SetProperty("LastItemId", ++itemId);
	Tester.AssertEqual("retval is true", retval, true);
	itemId = Global.GetProperty("LastItemId", 10);
	Tester.AssertEqual("ItemId is 11", itemId, "11");
	itemId = Global.GetProperty("LastItemId");
	Tester.AssertEqual("ItemId is 11", itemId, "11");	
	var someprop = Global.GetProperty("someprop");
	Tester.AssertEqual("someprop is null", someprop, null);
	var someprop = Global.GetProperty("someprop", false);
	Tester.AssertEqual("someprop is false", someprop, false);
	var noparams = Global.GetProperty();
	Tester.AssertEqual("noparams is null", noparams, null);
	Tester.AssertEqual("return value is false", Global.SetProperty(), false);
	Tester.AssertEqual("return value is false", Global.SetProperty("name"), false);
}

/** @scenario JavaScriptMode*/
function JavaScriptMode()
{
	var itemId = Global.GetProperty("LastItemId", 10);
	Global.SetProperty("LastItemId", ++itemId);
	
	SeS('MenuBar').DoMenu('Modules;Product information management;Products;Released products');

	SeS('_New').DoClick();
	
	Dynamics.Wait();
	
	var productName = "Potato" + itemId;
	
	SeS('Product_name').DoSetText(productName);
	SeS('Item_number').DoSetText(itemId);
	SeS('EcoResProductCreate_ModelGroupId').DoOpen();
	SeS('InventModelGroup_SysTL_Grid').DoClickText('MainModelGroup');
	SeS('EcoResProductCreate_ItemGroupId').DoOpen();
	SeS('InventItemGroup_SysTL_Grid').DoClickText('MainItemGroup');
	SeS('EcoResProductCreate_StorageDimen').DoOpen();
	SeS('EcoResStorageDimensionGroup_SysT').DoClickText('Site');
	SeS('EcoResProductCreate_TrackingDime').DoOpen();
	SeS('EcoResTrackingDimensionGroup_Sys').DoClickText('None');
	SeS('EcoResProductCreate_InventUnitId').DoOpen();
	SeS('UnitOfMeasureLookup_GridAll').DoClickText('1/2 pound');
	SeS('EcoResProductCreate_PurchUnitId').DoOpen();
	SeS('UnitOfMeasureLookup_GridConverti').DoClickText('1/2 pound');
	SeS('EcoResProductCreate_SalesUnitId').DoOpen();
	SeS('UnitOfMeasureLookup_GridConverti1').DoClickText('1/2 pound');	
	SeS('EcoResProductCreate_BOMUnitId').DoOpen();
	SeS('UnitOfMeasureLookup_GridConverti2').DoClickText('1/2 pound');
	SeS('OK').DoClick();
	
	Dynamics.Wait();
	
	Tester.Assert("Verify that: InnerText contains " + productName, SeS('ProductTitle').GetInnerText().indexOf(productName) != -1);
	
	SeS('Operations').DoClick();
}
