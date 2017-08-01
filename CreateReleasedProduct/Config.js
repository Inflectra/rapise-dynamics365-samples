if (g_recording)
{
	Global = {};
}


var __configJson = "Config.json";

function __readConfigJson()
{
	var conf = {};
	if (File.Exists(__configJson))
	{
		eval("conf = " + File.Read(__configJson));
	}
	return conf;
}

function __writeConfigJson(conf)
{
	File.Write(__configJson, JSON.stringify(conf));
}

Global.GetProperty = function(name, defValue)
{
	if (!name)
	{
		return null;
	}

	var conf = __readConfigJson();

	if (conf.hasOwnProperty(name))
	{
		return conf[name];
	}
	
	if (typeof(defValue) == "undefined")
	{
		return null;
	}
	
	return defValue;
}

Global.SetProperty = function(name, value)
{
	if (!name)
	{
		return false;
	}
	
	if (typeof(value) == "undefined")
	{
		return false;
	}

	var conf = __readConfigJson();
	conf[name] = value;
	__writeConfigJson(conf);
	
	return true;
}

