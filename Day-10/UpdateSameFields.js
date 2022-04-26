var nValue = "samevalue"
var gr = new GlideRecord('MyTable');
gr.query();

if (gr.next())
{
gr.u_a1 = nValue;
gr.u_a2 = nValue;
gr.u_a3 = nValue;
gr.u_a4 = nValue;
gr.u_a5 = nValue;
gr.update();
}