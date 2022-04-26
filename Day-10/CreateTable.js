var table_name = 'MyTable';
var extends_table = 'task';
var fname = 'myfield';

var attrs = new Packages.java.util.HashMap();
var ca = new GlideColumnAttributes(fname);
ca.setType("string");
ca.setUsePrefix(false);
attrs.put(fname, ca);

var tc = new GlideTableCreator(table_name , table_name);
tc.setColumnAttributes(attrs);
if(typeof extends_table != 'undefined') tc.setExtends(extends_table);
tc.update();