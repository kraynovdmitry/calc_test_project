function BadTestMain()
{
  TestedApps.calc.Run() 
  
  Runner.CallMethod("Functions.Check", "5", "*", "10", "60")
  Runner.CallMethod("Functions.Check", "58", "/", "2", "29")
  Runner.CallMethod("Functions.Check", "1", "-", "1", "0")
  Runner.CallMethod("Functions.Check", "31", "+", "13", "44")
  Runner.CallMethod("Functions.Check", "10", "-", "2", 51)
  Runner.CallMethod("Functions.Check", "21", "*", "5", "105")
 
  TestedApps.calc.Close()
}