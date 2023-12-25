var flightPlannerArgument="a = 0, d = 0";var flightPlannerCode="\
if (a == 0 && d == 4) return 0;\n\
else if (a<0 || a>4 || d>3) return 99;\n\
else if (d == 3) {\n\
  if (a == 0)\n\
    return 30 - a1[a][d] + f(a,d+1);\n\
  else if (a == 1)\n\
    return 20 - a1[a][d] + f(a-1,d+1);\n\
  else return 99;\n\
}\n\
else {\n\
  var ans = 30 - a1[a][d] + f(a,d+1);\n\
  if (a <= 3)\n\
    ans = Math.min(ans, 60 - a1[a][d] + f(a+1,d+1));\n\
  if (a > 0)\n\
    ans = Math.min(ans, 20 - a1[a][d] + f(a-1,d+1));\n\
  return ans;\n\
}";var flightPlannerDefault="0, 0";var flightPlannerArray1="[[1, -9, -9, 1], [1, 9, 9, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]";var flightPlannerArray2="";var UVa10702Argument="u = 0, t = 3";var UVa10702Code="\
if (t == 0) return a2[u] ? 0 : -99;\n\
var ans = -99;\n\
for (var v = 0; v < 3; v++) {\n\
  if (v == u) continue;\n\
  ans=Math.max(ans, a1[u][v]+f(v,t-1));\n\
}\n\
return ans;";var UVa10702Default="0, 3";var UVa10702Array1="[[0, 3, 5], [5, 0, 1], [9, 2, 0]]";var UVa10702Array2="[0,1,1]";function showFlightPlannerCode(){$('#arguments_textBox').val(flightPlannerArgument);$('#code').val(flightPlannerCode);$('#n_input').val(flightPlannerDefault);$('#variable1_textBox').val(flightPlannerArray1);$('#variable2_textBox').val(flightPlannerArray2);}
function showUVa10702Code(){$('#arguments_textBox').val(UVa10702Argument);$('#code').val(UVa10702Code);$('#n_input').val(UVa10702Default);$('#variable1_textBox').val(UVa10702Array1);$('#variable2_textBox').val(UVa10702Array2);}
var matchingArgument="bm = 0";var matchingCode="\
if (bm == (1<<4)-1) return 0;\n\
else {\n\
  var p1, p2, ans = 0;\n\
  if ((bm&8) == 0) p1 = 3;\n\
  if ((bm&4) == 0) p1 = 2;\n\
  if ((bm&2) == 0) p1 = 1;\n\
  if ((bm&1) == 0) p1 = 0;\n\
  for (p2 = 0; p2 < 4; p2++)\n\
    if ((a1[p1][p2] == 1 && (bm & (1<<p2)) == 0) || p1 == p2)\n\
      ans = Math.max(ans, a1[p1][p2] + f(bm|(1<<p1)|(1<<p2)));\n\
  return ans;\n\
}";var matchingDefault="0";var matchingArray1="[[0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0]]";var matchingArray2="";function showMatchingCode(){$('#arguments_textBox').val(matchingArgument);$('#code').val(matchingCode);$('#n_input').val(matchingDefault);$('#variable1_textBox').val(matchingArray1);$('#variable2_textBox').val(matchingArray2);}