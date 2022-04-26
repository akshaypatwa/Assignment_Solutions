function createRec(TableName)
{
    var gr = new GlideRecord(TableName);
    gr.initialize();
    gr.short_description = "Network Problem2";
    gr.insert();

}

createRec("MyTable");
createRec("MyTableCopy");
