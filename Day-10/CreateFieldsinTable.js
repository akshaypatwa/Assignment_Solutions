
var grt = new GlideRecord('sys_dictionary');
grt.setValue('name','MyTable');
grt.setValue('column_label','Example Field 5');
grt.setValue('element','example_field_5');
grt.insert();