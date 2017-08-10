//Put your custom functions and variables in this file


/** @scenario StartNewOrder*/
function StartNewOrder()
{
	SeS('Sales').DoClick();
	SeS('SalesGroup_of_Sales_records_').DoClick();
	SeS('Go_to_your_list_of_Orders__statu').DoClick();
	
	Global.DoWaitFor('New__Create_a_new_Order_record_');
	Global.DoSleep(2000);
	SeS('New__Create_a_new_Order_record_').DoClick();

}

/** @scenario CompleteOrder*/
function CompleteOrder()
{
	SeS('Name').DoClick();
	SeS('name_i').DoClick();
	SeS('name_i').DoSetText("Test Order");
	SeS('Price_List').DoClick();
	SeS('Select_a_value_').DoClick();
	SeS('Main').DoClick();
	SeS('Potential_Customer').DoClick();
	SeS('Select_a_value_1').DoClick();
	SeS('John_Smith').DoClick();
	SeS('Save__Save_this_Order_').DoClick();

// Two products to price list
	SeS('Add_Order_Product_record_').DoClick();
	SeS('Existing_ProductWriteMinusin_Pro').DoClick();

	SeS('Text').DoClick();
	SeS('Text').DoSetText("Carrot");
	Global.DoSendKeys('{TAB}');
	
	SeS('Add_Order_Product_record_').DoClick();
	SeS('Existing_ProductWriteMinusin_Pro').DoClick();

	SeS('Text').DoClick();
	SeS('Text').DoSetText("Potato");
	Global.DoSendKeys('{TAB}');	

// Add phone call
	SeS('_F6A3F83BMinus6766Minus4EC9Minus').DoClick();
	SeS('Phone_Call').DoClick();
	SeS('Description').DoSetText("Discuss volume");
	SeS('Call_With').DoClick();
	SeS('Select_a_value_2').DoClick();
	SeS('Donald_Trump').DoDblClick();
	SeS('OK').DoDblClick();
	SeS('CloseButton').DoClick();
}

/** @scenario VerifyOrderCreated*/
function VerifyOrderCreated()
{
	Tester.AssertEqual("Verify that: RowCount=1", SeS('Grid').GetRowCount(), 1);
	Tester.AssertEqual("Order name is 'Test Order'", SeS('Grid').GetCell(0, 1), "Test Order");
}

/** @scenario DeleteOrder*/
function DeleteOrder()
{
	SeS('Grid').DoClickCell(0, 0);
	SeS('Delete__Delete_these_Orders__Thi').DoClick();
	SeS('_Delete').DoClick();
	SeS('Microsoft_Dynamics_365__Go_to_ho').DoClick();
}
