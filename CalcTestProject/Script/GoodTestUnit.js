function GoodTestMain()
{
  TestedApps.calc.Run() 
  
  Runner.CallMethod("Functions.Check", "12", "*", "5", "60")
  Runner.CallMethod("Functions.Check", "123", "+", "321", "444")
  Runner.CallMethod("Functions.Check", "120", "/", "10", "12")
  Runner.CallMethod("Functions.Check", "32", "-", "23", "9")
  Runner.CallMethod("Functions.Check", "5", "*", "0", "0")
  Runner.CallMethod("Functions.Check", "53", "+", "71", "124")
 
  TestedApps.calc.Close()
}