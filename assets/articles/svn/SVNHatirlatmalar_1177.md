Find the deleted file history
<pre>svn log -v | grep -B50 YourDeletedFileName
</pre>
Remove file from svn but keep it locally
<pre>svn delete --keep-local path/to/file.example
</pre>
Revert the specific commit. Dot shows that you want to revert revision from current repo.
<pre>svn merge -c -&lt;RevisionNumber&gt; .
</pre>