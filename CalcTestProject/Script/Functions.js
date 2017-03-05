function ClickDigit( v )
{
  keysV = NameMapping.Sys.calc.wnd.frame.keys
  switch( v )
  {
    case "0":   keysV.btn0.Click(); break;
    case "1":   keysV.btn1.Click(); break;
    case "2":   keysV.btn2.Click(); break;
    case "3":   keysV.btn3.Click(); break;
    case "4":   keysV.btn4.Click(); break;
    case "5":   keysV.btn5.Click(); break;
    case "6":   keysV.btn6.Click(); break;
    case "7":   keysV.btn7.Click(); break;
    case "8":   keysV.btn8.Click(); break;
    case "9":   keysV.btn9.Click(); break;
  }
}

function ClickNumber( v )
{
  for( i = 0; i < aqString.GetLength(v); i++)
    ClickDigit(v[i])
}

function ClickOp( v )
{
  keysV = NameMapping.Sys.calc.wnd.frame.keys
  switch( v )
  {
    case "+":   keysV.btnPlus.Click(); break;
    case "-":   keysV.btnMinus.Click(); break;
    case "*":   keysV.btnMult.Click(); break;
    case "/":   keysV.btnDiv.Click(); break;
    case "=":   keysV.btnEqual.Click(); break;
  }
}

function CheckResult(right_result)
{
  var PropArray = new Array("WndCaption", "Enabled");
  var ValuesArray = new Array(aqConvert.IntToStr(right_result), true);
  result = NameMapping.Sys.calc.wnd.frame.edit.FindChild(PropArray, ValuesArray)
  return result.Exists
}

function Check( var1, op, var2, right_result )
{
  keysV = NameMapping.Sys.calc.wnd.frame.keys
  keysV.btnC.Click()
  ClickNumber(var1)
  ClickOp(op)
  ClickNumber(var2)
  keysV.btnEqual.Click()
  CheckResult(right_result)
  text = var1 + " " + op + " " + var2 + " = " + right_result
  if( result.Exists )
    Log.Message("Тест " + text + " пройден");
  else
    Log.Warning("Тест " + text + " не пройден");  
}