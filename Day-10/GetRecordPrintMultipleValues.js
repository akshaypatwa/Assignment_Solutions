var gr = new GlideRecord("MyTable");
//gr.addQuery('short_description', '1');
gr.query();
	
while(gr.next())
{
 var F1 = gr.u_a1;
 var F2 = gr.u_a2;
 var F3 = gr.u_a3;
 var F4 = gr.u_a4;
 var F5 = gr.u_a5;

gs.log(" Field 1 :" + F1 + " Field 2 :" + F2 + " Field 3 :" + F3 + " Field 4 :" + F4 + " Field 5 :" + F5);		
}
