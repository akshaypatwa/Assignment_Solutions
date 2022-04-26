// Get one record in MyTable and update all string fields with value → “Same value”

var nValue = "samevalue"
var gr = new GlideRecord('MyTable');
gr.addQuery("short_description", "abc")
gr.query();

if (gr.next())
{
gr.u_a1 = nValue;
gr.u_a2 = nValue;
gr.u_a3 = nValue;
gr.u_a4 = nValue;
gr.u_a5 = nValue;
gr.aytoSysFields(false);
gr.update();
}