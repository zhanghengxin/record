1.使用强制push的方法：
$ git push -u origin master -f 
这样会使远程修改丢失，一般是不可取的，尤其是多人协作开发的时候。
2.push前先将远程repository修改pull下来
$ git pull origin master
$ git push -u origin master
3.若不想merge远程和本地修改，可以先创建新的分支：
$ git branch [name]
然后push
$ git push -u origin [name]


创建分支
$ git branch newbranch
查看分支
$ git branch
选择分支
$ git checkout newbranch
合并分支到主分支
$ git merge newbranch
查看分支冲突
$ git diff
删除分支
$ git branch -D newbranch