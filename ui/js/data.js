var fields = [
	{ name: "Status", unit: "", status: "GOOD", critical: true,
		max: 5, min: 1}, /* let 0 (fault) trigger color change */
	{ name: "Stopd", unit: "cm", status: "GOOD", critical: false,
		max: 125000, min: 0},
	{ name: "StripeCount", unit: "", status: "GOOD", critical: false,
		max: 53, min: 0},
	{ name: "Position", unit: "cm", status: "GOOD", critical: false,
		max: 125000, min: 0},
	{ name: "Acceleration", unit: "cm/s^2", status: "GOOD", critical: false,
		max: 1962, min: -1962},
	{ name: "Velocity", unit: "cm/s", status: "GOOD", critical: false,
		max: 10000, min: 0},
	{ name: "BatteryCurrent", unit: "mA", status: "GOOD", critical: false,
		max: 20000, min: 3000},
	{ name: "BatteryTemperature", unit: "C", status: "GOOD", critical: false,
		max: 500, min: 200},
	{ name: "BatteryVoltage", unit: "mV", status: "GOOD", critical: true,
		max: 14000, min: 12000},
	{ name: "BrP1", unit: "PSI", status: "GOOD", critical: true,
		max: 300, min: 250},
	{ name: "BrP2", unit: "PSI", status: "GOOD", critical: true,
		max: 300, min: 250},
	{ name: "BrP3", unit: "PSI", status: "GOOD", critical: false,
		max: 300, min: 250},
	{ name: "PrP1", unit: "PSI", status: "GOOD", critical: false,
		max: 5000, min: 2000},
	{ name: "PrP2", unit: "PSI", status: "GOOD", critical: false,
		max: 5000, min: 2000},
	{ name: "PodPressure", unit: "mPSI", status: "GOOD", critical: false,
		max: 15000, min: 0},
	{ name: "PodTemperature", unit: "1/10 C", status: "GOOD", critical: false,
		max: 350, min: 200},
	{ name: "SwitchStates", unit: " ", status: "GOOD", critical: false,
		max: 255, min: 0}
];

var dashboard_ip = "192.168.0.112";
//var dashboard_ip = "localhost";
