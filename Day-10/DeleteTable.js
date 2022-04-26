function DeleteTable(tableName)
{
    var tableDeletion = new TableUtils();
    tableDeletion.dropAndClean(tableName);
}

DeleteTable("MyTable");