function TableCreate(table_name)
{
    var extends_table = 'task';
    var fields = ["a","b","c"];
    var attrs = new Packages.java.util.HashMap();

    var tc = new GlideTableCreator(table_name , table_name);
    tc.setColumnAttributes(attrs);
    if(typeof extends_table != 'undefined') tc.setExtends(extends_table);
    tc.update();

    var grt = new GlideRecord('sys_dictionary');
    grt.setValue('name', table_name);

    for(i=0;i<fields.length;i++)
    {
    grt.setValue('column_label',fields[i]);
    grt.setValue('element',fields[i]);
    grt.insert();
    }
}

TableCreate("MyTable");
